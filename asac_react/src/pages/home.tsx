import database from "../database.json";

import { useState } from "react";
import Footer from "../components/footer";

// header that becomes sticky at scroll down?

// header only appears and becomes sticky on scroll down

// slight graidant on text

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <section className=" w-full  bg-gray-50 ">
        <div className="bg-gradient-to-t bg-gray-100">
          <a className="hover:opacity-80 transition-opacity" href="/">
            <h1 className="text-neutral-900 font-semibold text-3xl pt-6 pl-24  ">
              Asac
            </h1>
          </a>

          <div className="pt-6 pb-8 border-solid  ">
            <h1 className="text-center text-5xl  font-bold text-neutral-950 ">
              Your Home, Everywhere
            </h1>
            <p className="text-center pt-1 text-base  text-neutral-900  ">
              The cheapest nights at the best appartements.{" "}
            </p>
            {/* <button className="mx-auto">lol</button> */}
            <div className="h-14 w-2/5 mx-auto mt-6 2 text-center flex">
              <div className="relative w-full">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Find your appartement"
                  className="h-14 w-full rounded-xl cursor-pointer shadow mt-0 bg-white mx-auto ring-neutral-400 border pl-12 focus:ring-1 outline-0   transition-colors"
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
                <button className="h-14  bg-gradient-to-t from-neutral-800 border border-neutral-950  to-neutral-900  shadow   text-white mx-2 px-5 rounded-xl font-medium hover:scale-95 transition">
                  <div className="flex">Search</div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="border shadow-sm">
          <h1 className="text-neutral-900 pl-32 pt-6 text-base">
            Over <span className="font-bold">{database.length}</span> Rentals
            Available
          </h1>
          <div
            id="appartements"
            className="ml-auto flex flex-wrap w-11/12 pt-6 "
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
                    <article className="w-70 h-72 mr-10 mb-20 relative rounded-xl    ">
                      <div className="hover:brightness-90	 transition-all ">
                        <img
                          className="w-72 h-64 object-cover rounded-lg  border"
                          src={data.cover}
                          alt=""
                        />
                      </div>
                      <div className="mb-2">
                        <p className="text-neutral-900 pt-2 text-sm font-semibold">
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
        </div>
      </section>
      <Footer />
    </>
  );
}
