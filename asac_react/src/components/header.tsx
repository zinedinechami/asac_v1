import github_logo from "../assets/pngegg.png";

export default function Header() {
  // glass header
  //   bottom border
  //   larger seafch bar
  //   github link
  return (
    <>
      <nav>
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
      </nav>
    </>
  );
}
