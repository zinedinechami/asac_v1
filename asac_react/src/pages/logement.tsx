import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import database from "../database.json";
import Carrousel from "../components/carrousel";

export default function Logement() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(database.find((findObject) => findObject.id === id));
  }, [data, id]);

  return (
    <>
      {/* {data === undefined && <PageError />} */}
      <nav className="bg-stone-950 h-16 w-full  flex  border-solid border-0 border-b border-neutral-800">
        <h1 className="text-neutral-50 figtree_bold text-3xl mt-3 pl-12 italic ">
          asac
        </h1>
      </nav>
      {data && (
        <section className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-25%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-neutral-50">
          <div className="w-8/12 mx-auto pt-12">
            {data && <Carrousel pictures={data?.pictures} />}
            <div className="logement_flex">
              <div className="pt-10">
                <h1 className="text-3xl font-bold">{data?.title}</h1>
                <h2 className="logement_location">{data?.location}</h2>
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
