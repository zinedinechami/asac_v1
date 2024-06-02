import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import database from "../database.json";
import Carrousel from "../components/carrousel";
import Header from "../components/header";
import Footer from "../components/footer";

type UserData = {
  id: string;
  title: string;
  cover: string;
  pictures: string;
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
  price: number;
};

export default function Logement() {
  const { id } = useParams();
  const [data, setData] = useState<UserData | null>(null);

  const navigate = useNavigate();

  // mettre une valeur qui correspond au type de data

  useEffect(() => {
    database === undefined
      ? navigate("/")
      : setData(database.find((findObject) => findObject.id === id) || null);
  }, [id, navigate]);

  return (
    <>
      {data && (
        <section className="bg-gray-50  text-neutral-950 pb-52">
          <Header />
          <div className="sm:w-8/12 w-10/12 mx-auto pt-8">
            {data && <Carrousel pictures={data?.pictures} />}
            <div className="flex sm:flex-row flex-col relative ">
              <div className="pt-6">
                <h1 className="text-2xl font-semibold">{data?.title}</h1>
                <h2>{data?.location}</h2>
                <div className="flex pt-6">
                  <img
                    className="h-12 mr-4 rounded-full border"
                    src={data?.host.picture}
                    alt=""
                  />
                  <h3 className="font-semibold pt-3 text-base">
                    Hosted by {data?.host.name}
                  </h3>
                </div>
                <hr className="my-6 h-px sm:w-7/12 w-full border-t-0 bg-neutral-200 " />
                <p className="sm:w-7/12 mb-4 text-base">{data?.description}</p>
              </div>
              <div className=" right-0 top-8 sm:absolute relative sm:w-96 w-full py-6 bg-neutral-100 p-5 mb-4 rounded-xl border shadow-sm  ">
                <h1 className="text-2xl font-semibold ">
                  {" "}
                  € {data?.price}{" "}
                  <span className="font-normal text-base">night</span>
                </h1>

                {/* <h2 className="text-2xl">{data?.rating}</h2> */}
                <a href="/reservation">
                  <button className="w-full py-3 mt-4 mb-4 bg-gradient-to-t from-neutral-800 border border-neutral-950  to-neutral-900 text-neutral-50 rounded-lg shadow-sm font-semibold  hover:scale-95 transition">
                    Reserve
                  </button>
                </a>
                <div className="pb-4">
                  <p className="pt-2 underline">
                    € {data?.price} x 5
                    <span className=" pl-2 absolute right-5">
                      ${data?.price * 5}
                    </span>
                  </p>

                  <p className="pt-2 underline">
                    {" "}
                    Asac Service Fee
                    <span className=" pl-2 absolute right-5">€ 100</span>
                  </p>
                  <p className="pt-2 underline">
                    Taxes
                    <span className="  pl-2 absolute right-5">€ 10</span>
                  </p>
                </div>
                <hr className="my-2 h-px  border-t-0 bg-neutral-200 " />
                <p className="font-semibold  text-xl mt-4">
                  Total{" "}
                  <span className="absolute right-5">
                    € {data?.price * 5 + 100 + 10}
                  </span>
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
