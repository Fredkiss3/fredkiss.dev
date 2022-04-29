import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className={`container`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={``}>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>

        <p>
          L’assurance habitation regroupe toutes les formules d’assurance qu’il
          est possible de choisir pour assurer le lieu dans lequel vous vivez,
          que vous en soyez locataire, propriétaire occupant ou non.{" "}
          <strong>
            Pour faire face à la diversité des situations, s’adapter à la
            superficie du logement, à sa localisation ou encore à sa valeur, les
            options possibles via l’assurance habitation sont très nombreuses.
          </strong>{" "}
          Nous vous aidons à vous y repérer et à comprendre tant le mode de
          calcul que la nature des options à votre disposition.
        </p>

        <span className="font-custom text-8xl">Adrien</span>
      </main>
    </div>
  );
};

export default Home;
