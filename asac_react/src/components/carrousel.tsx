import { useState } from "react";

interface Props {
  pictures: string;
}

export default function Carrousel({ pictures }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => (index === pictures.length - 1 ? 0 : index + 1));
  };

  const showPrevImage = () => {
    setImageIndex((index) => (index === 0 ? pictures.length - 1 : index - 1));
  };

  return (
    <>
      <div className="mx-auto w-full h-96 relative justify-center ">
        <img
          className="w-full h-96  rounded-xl object-cover  border shadow-sm "
          src={pictures[imageIndex]}
          alt=""
        />
        {pictures.length > 1 && (
          <div>
            <button
              onClick={showNextImage}
              className="absolute carrousel_arrows_right top-1/2 text-2xl"
            >
              <svg
                className="w-6 h-6 text-neutral-800 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </button>
            <button
              onClick={showPrevImage}
              className="absolute  carrousel_arrows_left top-1/2 text-2xl"
            >
              <svg
                className="w-6 h-6 text-neutral-800 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m15 19-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        )}
        {/* {pictures.length > 1 && (
          <p className="absolute right-0 pt-2">
            {[imageIndex + 1]} / {pictures.length}
          </p>
        )} */}
      </div>
    </>
  );
}
