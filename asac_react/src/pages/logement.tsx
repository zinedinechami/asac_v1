import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import database from "../database.json";
import Carrousel from "../components/carrousel";
import Github from "../assets/pngegg.png";
// import Header from "../components/header";
// import Home from "./home";

interface UserData {
  title: string;
  pictures: string;
  description: string;
  host: string;
  name: string;
  location: string;
  rating: number;
}

export default function Logement() {
  const { id } = useParams();
  const [data, setData] = useState<UserData | null>(null);

  useEffect(() => {
    setData(database.find((findObject) => findObject.id === id));
  }, [data, id]);

  return (
    <>
      {/* {data === undefined && <Home />} */}

      {data && (
        <section className="bg-gradient-to-l from-neutral-900 to-black  text-neutral-50">
          <nav className="h-20 border-solid border-0 border-b border-neutral-800">
            <a className="hover:opacity-80 transition-opacity" href="/">
              <h1 className="text-neutral-100 figtree_bold text-4xl pt-5 pl-12 italic ">
                asac
              </h1>
            </a>

            <a
              className="hover:opacity-80 transition-opacity"
              href="https://github.com/zinedinechami/asac_v1"
            >
              <img
                src={Github}
                alt="github_logo"
                className="w-10 absolute top-6 right-12"
              />
            </a>
          </nav>
          <div className="w-8/12 mx-auto pt-12">
            {data && <Carrousel pictures={data?.pictures} />}
            <div className="flex flex-col">
              <div className="">
                <div className="pt-10">
                  <h1 className="text-3xl font-bold">{data?.title}</h1>
                  <h2>{data?.location}</h2>
                  <h3>Hosted by {data?.host.name}</h3>
                </div>
                <div className="w-96 py-6 bg-neutral-900 p-4 mb-4 rounded-xl border border-neutral-700 ">
                  <h1 className="text-2xl font-bold mb-2">137£ night</h1>
                  <h2 className="text-2xl">{data?.rating}</h2>
                  <button className="w-full py-2 bg-slate-50 text-neutral-950 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                    Reserve
                  </button>
                </div>
              </div>
              {/* <div className="logement_tag">
              {data &&
                data?.tags.map((tag, index) => {
                  return <Tag key={index} tag_name={tag} />;
                })}
            </div> */}
              {/* <div className="profile_ratings">
              {data && (
                <Profile
                  profile_name={data?.host?.name}
                  profile_img={data?.host?.picture}
                />
              )}
              {data && <Ratings rating={data?.rating} />}
            </div> */}
            </div>
            {/* <div className="logement_collapse">
            {data && (
              <Collapse title={"Description"} content={data?.description} />
            )}

            {data && (
              <Collapse title={"Equipement"} content={data?.equipments} />
            )}
          </div> */}
          </div>
        </section>
      )}
      {/* <Footer /> */}
    </>
  );
}
