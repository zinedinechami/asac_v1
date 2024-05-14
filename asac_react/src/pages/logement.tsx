import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import database from "../database.json";
import Carrousel from "../components/carrousel";
import Header from "../components/header";
import Footer from "../components/footer";

// todo: faire un type a la place, create an object for name
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
        <section className="bg-neutral-50  text-neutral-950 pb-52">
          <Header />
          <div className="w-8/12 mx-auto pt-12">
            {data && <Carrousel pictures={data?.pictures} />}
            <div className="flex flex-row  relative ">
              <div className="pt-8">
                <h1 className="text-2xl font-bold">{data?.title}</h1>
                <h2>{data?.location}</h2>
                <div className="flex pt-6">
                  <img
                    className="h-12 mr-4 rounded-full"
                    src={data?.host.picture}
                    alt=""
                  />
                  <h3 className="font-bold pt-3 text-base">
                    Hosted by {data?.host.name}
                  </h3>
                </div>
                <hr className="my-6 h-px w-7/12 border-t-0 bg-neutral-200 " />
                <p className="w-7/12 text-lg">{data?.description}</p>
              </div>
              <div className=" right-0 top-8 absolute  w-96 py-6 bg-neutral-100 p-5 mb-4 rounded-xl border shadow-sm  ">
                <h1 className="text-2xl font-bold mb-4">
                  {" "}
                  € {data?.price} <span className="font-normal">night</span>
                </h1>
                {/* <h2 className="text-2xl">{data?.rating}</h2> */}
                <button className="w-full py-3 bg-neutral-950 text-neutral-50 rounded-lg font-bold hover:bg-neutral-800 transition-colors">
                  Reserve
                </button>
                <div className="pt-4">
                  <p className="pt-2">
                    € {data?.price} x 5 =
                    <span className="font-bold pl-2">${data?.price * 5}</span>
                  </p>

                  <p className="pt-2">
                    {" "}
                    Asac Service Fee =
                    <span className="font-bold pl-2">€ 100</span>
                  </p>
                  <p className="pt-2">
                    Taxes = <span className=" font-bold pl-2">€ 10</span>
                  </p>
                </div>
                <hr className="my-6 h-px  border-t-0 bg-neutral-200 " />
                <p className="font-bold text-xl">
                  Total € {data?.price * 5 + 100 + 10}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
}
