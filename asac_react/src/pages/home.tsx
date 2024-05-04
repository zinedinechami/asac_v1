import Header from "../components/header";
import database from "../database.json";

// header that becomes sticky at scroll down?

export default function Home() {
  return (
    <>
      <Header />

      <section className="bg-neutral-900 w-full ">
        <div className="pt-20 ">
          <h1 className="text-center text-5xl font-bold text-neutral-50">
            A Home Away from Home
          </h1>
          <p className="text-center pt-5 text-neutral-50">
            Find the cheapest nights at the best appartements{" "}
          </p>
          {/* <button className="mx-auto">lol</button> */}
          <div className="mt-8  text-center">
            <input className="h-12 w-96 rounded-full bg-neutral-50 mx-auto "></input>
          </div>
        </div>

        <div className="ml-auto flex flex-wrap w-11/12 pt-20">
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
