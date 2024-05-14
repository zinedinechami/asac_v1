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
      <section className=" w-full  bg-neutral-50 ">
        <div className="bg-gradient-to-t bg-neutral-100">
          <a className="hover:opacity-80 transition-opacity" href="/">
            <h1 className="text-neutral-900 font-semibold text-4xl pt-6 pl-12  ">
              Asac
            </h1>
          </a>
          <a
            className="hover:opacity-80 transition-opacity"
            href="https://github.com/zinedinechami/asac_v1"
          >
            {/* <img
              src={github_logo}
              alt="github_logo"
              className="w-10 absolute top-6 right-12"
            /> */}
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
          <div className="pt-16 pb-8 border-solid  ">
            <h1 className="text-center text-6xl  font-bold text-neutral-950 ">
              Your Home, Everywhere
            </h1>
            <p className="text-center pt-2 text-neutral-500 ">
              Find the cheapest nights at the best appartements{" "}
            </p>
            {/* <button className="mx-auto">lol</button> */}
            <div className="mt-6 mb-2 text-center">
              <input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search asac.com"
                className="h-14 w-96 rounded-full cursor-pointer shadow-sm  bg-white mx-auto  border text-center focus:ring-0 outline-0 hover:bg-neutral-100  transition-colors"
              ></input>
              <a href="#appartements">
                <button className="h-14  bg-neutral-900 hover:bg-neutral-700   transition-colors text-neutral-50 mx-4 px-6 rounded-full font-semibold">
                  Search
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="border rounded-xl">
          <h1 className="text-neutral-900 pl-32 pt-10 text-base">
            Over <span className="font-bold">{database.length}</span>{" "}
            Appartements Available
          </h1>
          <div
            id="appartements"
            className="ml-auto flex flex-wrap w-11/12 pt-10 "
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
                      <div className="hover:opacity-90 transition-opacity ">
                        <img
                          className="w-72 h-64 object-cover rounded-lg hover:shadow-lg transition-shadow"
                          src={data.cover}
                          alt=""
                        />
                      </div>
                      <div className="mb-2">
                        <p className="text-neutral-900 pt-2 text-sm font-bold">
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
