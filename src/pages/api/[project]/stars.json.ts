import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { fetchFromGithubAPI } from "~/lib/utils";

export const prerender = false;

type RepositoryStatsResponse = {
  repository: {
    stargazerCount: number;
  };
};

const repostatsQuery = /* GraphQL */ `
query ($repoName: String!, $repoOwner: String!) {
  repository(name: $repoName, owner: $repoOwner) {
    stargazerCount
  }
}
`;

export const GET: APIRoute = async function get({ params }) {
  const projects = await getCollection("projects");

  const project = projects.find((p) => p.slug === params.project);

  if (!project) {
    return Response.json(
      {
        error: `project ${params.project} not found`
      },
      { status: 400 }
    );
  }

  const [repoOwner, repoName] = project.data.repository
    .replace("https://github.com", "")
    .split("/")
    .filter((part) => part.length > 0);

  const data = await fetchFromGithubAPI<RepositoryStatsResponse>(
    repostatsQuery,
    {
      repoName,
      repoOwner
    }
  );

  const cacheHeader = import.meta.env.PROD
    ? "public, s-max-age=1800, stale-while-revalidate=1800, stale-if-error=43200"
    : "private, no-cache";

  return Response.json(
    {
      stargazerCount: data.repository.stargazerCount
    },
    {
      headers: {
        "Cache-Control": cacheHeader
      }
    }
  );
};
