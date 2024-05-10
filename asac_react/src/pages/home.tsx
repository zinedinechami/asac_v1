import database from "../database.json";
import github_logo from "../assets/pngegg.png";

// header that becomes sticky at scroll down?

// header only appears and becomes sticky on scroll down

// slight graidant on text

export default function Home() {
  return (
    <>
      <section className=" w-full      bg-gradient-to-l from-neutral-900 to-black ">
        <h1 className="text-neutral-50 figtree_bold text-4xl pt-5 pl-12 italic ">
          asac
        </h1>
        <a
          className="hover:opacity-80 transition-opacity"
          href="https://github.com/zinedinechami/asac_v1"
        >
          <img
            src={github_logo}
            alt="github_logo"
            className="w-10 absolute top-6 right-12"
          />
        </a>
        <div className="pt-16 pb-10 border-solid border-0 border-b border-neutral-800">
          <h1 className="text-center text-6xl  font-bold text-neutral-50 ">
            Your Home, Everywhere
          </h1>
          <p className="text-center pt-2 text-neutral-200">
            Find the cheapest nights at the best appartements{" "}
          </p>
          {/* <button className="mx-auto">lol</button> */}
          <div className="mt-8 mb-2 text-center">
            <input
              placeholder="Search asac.com"
              className="h-12 w-80 rounded-md  cursor-pointer  bg-neutral-50 mx-auto   text-center focus:ring-0 outline-0 hover:bg-neutral-300 transition-colors"
            ></input>
            <a href="#appartements">
              <button className="h-12  bg-neutral-500 text-neutral-50 mx-4 px-4 rounded-md">
                Search
              </button>
            </a>
          </div>
          <h2 className="text-center text-neutral-50 pt-6">
            Join our community !
          </h2>
          <div className="flex -space-x-4 rtl:space-x-reverse justify-center pt-2">
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg"
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg"
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-3.jpg"
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-4.jpg"
              alt=""
            />
            <a
              className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-neutral-500 border-2 border-neutral-800 rounded-full hover:bg-neutral-600 "
              href=""
            >
              +1k
            </a>
          </div>
        </div>
        <h1></h1>
        {/* add number of locations */}

        <h1 className="text-neutral-50 pl-48 pt-10 text-xl">
          Over {database.length} Appartements in{" "}
          <span className="font-bold">Paris</span>{" "}
        </h1>
        <div
          id="appartements"
          className="ml-auto flex flex-wrap w-11/12 pt-10 pl-16"
        >
          {/* <nav className="bg-stone-950 h-16 w-full sticky top-0 flex  border-solid border-0 border-b border-neutral-800 z-50">
            <h1 className="text-neutral-50 figtree_bold text-3xl mt-3 pl-12 italic ">
              asac
            </h1>
          </nav> */}
          {database.map((data) => {
            return (
              <a key={data.id} href={"logement/" + data.id}>
                <article className="w-64 h-64 mr-10 mb-20 relative rounded-xl  shadow-xl opacity-90 ">
                  <div className="hover:opacity-80 transition-opacity ">
                    <img
                      className="w-72 h-60 object-cover rounded-lg "
                      src={data.cover}
                      alt=""
                    />
                  </div>
                  <div className="mb-2">
                    <p className="text-neutral-50 pt-2 text-sm font-bold">
                      {data.title}
                    </p>
                    <p className="text-neutral-200 text-sm ">
                      Hosted by {data.host.name}
                    </p>
                    <p className="text-neutral-200 text-sm font-bold ">
                      $ {data.price} <span className="font-normal">night</span>
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
