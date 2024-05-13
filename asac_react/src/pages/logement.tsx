import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import database from "../database.json";
import Carrousel from "../components/carrousel";

// import Header from "../components/header";
// import Home from "./home";

// todo: add seearch feature

// faire un type a la place
type UserData = {
  title: string;
  pictures: string;
  description: string;
  host: string;
  name: string;
  location: string;
  rating: number;
};

export default function Logement() {
  const { id } = useParams();
  const [data, setData] = useState<UserData | null>(null);

  // todo: faire de la gestion d'erreur avec le find
  // mettre une valeur qui correspond au type de data

  useEffect(() => {
    setData(database.find((findObject) => findObject.id === id));
  }, [data, id]);

  return (
    <>
      {/* {data === undefined && <Home />} */}

      {data && (
        <section className="bg-neutral-50  text-neutral-950 pb-96">
          <nav className="h-24 border-solid  border-b bg-neutral-100 border">
            <a className="hover:opacity-80 transition-opacity" href="/">
              <h1 className="text-neutral-900 font-semibold text-4xl pt-6 pl-12  ">
                Asac
              </h1>
            </a>

            <a
              className="hover:opacity-80 transition-opacity"
              href="https://github.com/zinedinechami/asac_v1"
            >
              <svg
                className="w-10 absolute top-6 right-12"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </nav>
          <div className="w-8/12 mx-auto pt-12">
            {data && <Carrousel pictures={data?.pictures} />}
            <div className="flex flex-row  relative ">
              <div className="pt-10">
                <h1 className="text-3xl font-bold">{data?.title}</h1>
                <h2>{data?.location}</h2>
                <h3>Hosted by {data?.host.name}</h3>
              </div>
              <div className=" right-0 top-8 absolute  w-96 py-6 bg-neutral-100 p-4 mb-4 rounded-xl border shadow-sm  ">
                <h1 className="text-2xl font-bold mb-2">
                  {" "}
                  $ {data?.price} night
                </h1>
                {/* <h2 className="text-2xl">{data?.rating}</h2> */}
                <button className="w-full py-3 bg-neutral-950 text-neutral-50 rounded-xl font-bold hover:bg-neutral-800 transition-colors">
                  Reserve
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* <Footer /> */}
    </>
  );
}
