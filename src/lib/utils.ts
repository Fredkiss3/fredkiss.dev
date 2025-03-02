import { createClient } from "redis";
import { z } from "zod";

export function formattedDate(dateInput: string | Date): string {
  const date = new Date(dateInput);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric"
  }).format(date);

  return formattedDate;
}

const githubGraphQLAPIResponseSchema = z.union([
  z.object({
    message: z.string(),
    documentation_url: z.string().url()
  }),
  z.object({
    message: z.undefined(),
    data: z.record(z.string(), z.any())
  }),
  z.object({
    data: z.undefined(),
    message: z.undefined(),
    errors: z.array(z.record(z.string(), z.any()))
  })
]);

const env = import.meta.env.PROD ? process.env : import.meta.env;

/**
 * @param graphqlQuery
 * @param variables
 *
 * To explore and see the available graphQL queries, see : https://docs.github.com/fr/graphql/overview/explorer
 * @returns
 */
export async function fetchFromGithubAPI<T extends Record<string, any>>(
  graphqlQuery: string,
  variables: Record<string, any> = {}
) {
  return fetch(`https://api.github.com/graphql`, {
    method: "POST",
    body: JSON.stringify({
      query: graphqlQuery,
      variables
    }),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      // this header is required per the documentation : https://docs.github.com/en/rest/overview/resources-in-the-rest-api?apiVersion=2022-11-28#user-agent-required
      "User-Agent": "Fredkiss3"
    }
    // cache: "no-store",
  })
    .then(async (r) => {
      const text = await r.text();
      if (!r.ok) {
        console.error({
          text,
          status: r.status,
          statusText: r.statusText
        });
        throw new Error(text);
      }
      return JSON.parse(text);
    })
    .then((json) => {
      const parsed = githubGraphQLAPIResponseSchema.parse(json);

      if (parsed.message !== undefined) {
        if (parsed.message.toLowerCase() === "bad credentials") {
          throw new Error(
            "Invalid credentials, please update the credentials in the app settings"
          );
        } else {
          throw new Error(`Unknown error ${parsed.message}`);
        }
      } else if (parsed.data) {
        return parsed.data as T;
      } else {
        console.dir(
          {
            errors: parsed.errors
          },
          {
            depth: null
          }
        );
        throw new Error(`GraphQL error : check the terminal for errors.`);
      }
    });
}

export async function cache<T extends (...args: any[]) => Promise<any>>(
  key: string,
  ttl: number,
  fn: T
): Promise<Awaited<ReturnType<T>>> {
  if (!import.meta.env.PROD) {
    return await fn();
  }

  const redisClient = createClient({
    url: env.REDIS_URL
  }).on("error", (err) => {
    console.error("Redis Client Error:", err);
  });
  await redisClient.connect();
  const value = await redisClient.get(key);

  if (value) {
    console.log(`${key}: Cache HIT`);
    return JSON.parse(value);
  }

  console.log(`${key}: Cache MISS`);
  const result = await fn();
  await redisClient.set(key, JSON.stringify(result));
  await redisClient.expire(key, ttl);

  return result;
}
