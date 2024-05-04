export default function Header() {
  // glass header
  //   bottom border
  //   larger seafch bar
  //   github link
  return (
    <>
      <nav className="bg-stone-950 h-28 w-full  flex shadow">
        <h1 className="text-neutral-50 figtree_bold text-4xl mt-6 pl-12 italic">
          asac
        </h1>

        <div className="flex mx-auto mt-6 ">
          <input className="h-12 w-96 rounded-xl bg-neutral-900"></input>
        </div>
      </nav>
    </>
  );
}
