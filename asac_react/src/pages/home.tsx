import database from "../database.json";

import { useState } from "react";

//todo: add home svg to logo
//todo: add social proof under searchbar
//todo: add rating star under logements

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <section className=" w-full  bg-neutral-white ">
        <div className="bg-gray-50">
          <a className=" " href="/">
            <h1 className=" ml-32  text-2xl font-bold text-blue-500     pt-6  ">
              asac<span className="font-normal">.com</span>
            </h1>
          </a>

          <div className="pt-8 pb-12 border-b border-neutral-200 ">
            <h1 className="text-center sm:text-5xl text-3xl font-bold text-blue-500 ">
              Your home everywhere.
            </h1>
            <h2 className="text-center text-base  mt-1 text-neutral-700">
              Find the best appartements at the cheapest prices.
            </h2>

            {/* <button className="mx-auto">lol</button> */}
            <div className="h-12 sm:w-2/5 w-10/12 mx-auto mt-6  text-center flex">
              <div className="relative w-full">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Find your appartement"
                  className="h-12 w-full rounded-xl cursor-pointer shadow-md mt-0 bg-white mx-auto ring-blue-200 border border-neutral-300 pl-12 focus:ring-1 outline-0   transition-colors"
                ></input>
                <div
                  className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-6 mr-1 text-neutral-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
              </div>
              <a href="#appartements">
                <button className="h-12 bg-gradient-to-t from-blue-500 to-blue-400 border border-blue-500 shadow-md   text-white mx-2 px-6 rounded-xl font-medium hover:scale-95 transition">
                  <div className="flex font-semibold">Search</div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <h1 className="ml-32 mt-6">
          Showing <span className="font-bold">{database.length}</span> Rental
          Appartements
        </h1>
        <div
          id="appartements"
          className=" flex flex-wrap justify-center  pt-10  "
        >
          {database
            .filter((data) => {
              return search.toLowerCase() === ""
                ? data
                : data.title.toLowerCase().includes(search);
            })
            .map((data) => {
              return (
                <a key={data.id} href={"logement/" + data.id}>
                  <article className="sm:w-72 w-full h-72 mr-14 mb-16 relative rounded-xl   ">
                    <div className="hover:brightness-95	 transition-all ">
                      <img
                        className="sm:w-70 w-96 h-64 object-cover rounded-xl shadow-md    "
                        src={data.cover}
                        alt=""
                      />
                    </div>
                    <div className="mb-2">
                      <p className="text-neutral-900 pt-2 text-base font-medium">
                        {data.title}
                      </p>

                      <p className="text-neutral-500 text-sm ">
                        Hosted by {data.host.name}
                      </p>

                      <p className="text-neutral-900 text-sm font-bold ">
                        € {data.price}{" "}
                        <span className="font-normal">night</span>
                      </p>
                    </div>
                  </article>
                </a>
              );
            })}
        </div>
      </section>
    </>
  );
}
