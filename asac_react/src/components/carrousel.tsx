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
          className="w-full h-96  rounded-xl object-cover opacity-90 "
          src={pictures[imageIndex]}
          alt=""
        />
        {pictures.length > 1 && (
          <div>
            <button
              onClick={showNextImage}
              className="absolute right-2 top-1/2 text-2xl"
            >
              <div>{">"}</div>
            </button>
            <button
              onClick={showPrevImage}
              className="absolute left-2 top-1/2 text-2xl"
            >
              <div>{"<"}</div>
            </button>
          </div>
        )}
        {pictures.length > 1 && (
          <p className="absolute right-0 pt-2">
            {[imageIndex + 1]} / {pictures.length}
          </p>
        )}
      </div>
    </>
  );
}
