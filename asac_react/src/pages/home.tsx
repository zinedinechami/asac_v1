import database from "../database.json";

// header that becomes sticky at scroll down?

// header only appears and becomes sticky on scroll down

export default function Home() {
  return (
    <>
      <section className=" w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-25%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ">
        <h1 className="text-neutral-100 figtree_bold text-3xl pt-5 pl-12 italic ">
          asac
        </h1>
        <div className="pt-16 pb-12 border-solid border-0 border-b border-neutral-800">
          <h1 className="text-center text-5xl font-bold text-neutral-50">
            A Home Away from Home
          </h1>
          <p className="text-center pt-5 text-neutral-50">
            Find the cheapest nights at the best appartements in Paris{" "}
          </p>
          {/* <button className="mx-auto">lol</button> */}
          <div className="mt-8  text-center">
            <input className="h-12 w-96 rounded-full bg-neutral-50 mx-auto border border-slate-300 "></input>
          </div>
        </div>

        <div className="ml-auto flex flex-wrap w-11/12 pt-20">
          {/* <nav className="bg-stone-950 h-16 w-full sticky top-0 flex  border-solid border-0 border-b border-neutral-800 z-50">
            <h1 className="text-neutral-50 figtree_bold text-3xl mt-3 pl-12 italic ">
              asac
            </h1>
          </nav> */}
          {database.map((data) => {
            return (
              <a key={data.id} href={"logement/" + data.id}>
                <article className="w-72 h-60 px-3 mb-20 relative rounded-xl  ">
                  <img
                    className="w-72 h-60 object-cover rounded-xl "
                    src={data.cover}
                    alt=""
                  />
                  <p className="text-neutral-50 pt-2">{data.title}</p>
                </article>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}
