import Header from "../components/header";
import database from "../database.json";

export default function Home() {
  return (
    <>
      <Header />

      <section className="bg-neutral-900 w-full ">
        {/* <div>
          <h1 className="text-center text-5xl font-bold text-neutral-50">
            A Home Away from Home
          </h1>
          <p>Spend the cheapest nights at the best appartements </p>
          <button className="mx-auto">lol</button>
        </div> */}

        <div className="mx-auto flex flex-wrap w-11/12">
          {database.map((data) => {
            return (
              <a key={data.id} href={"logement/" + data.id}>
                <article className="w-72 h-60 px-2 mb-20 relative rounded-md">
                  <img
                    className="w-72 h-60 object-cover rounded-md"
                    src={data.cover}
                    alt=""
                  />
                  <p className="text-neutral-50">{data.title}</p>
                </article>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}
