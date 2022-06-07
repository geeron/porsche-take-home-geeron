import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import { ScrollContext } from "../utils/scroll-observer";
import TypeWriter from "./typewriter";

const Masthead: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 5200);
  }, []);

  return (
    <div
      ref={refContainer}
      className="sticky top-0 -z-10 flex min-h-screen flex-col items-center justify-center"
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute h-full w-full object-cover"
      >
        <source src="/assets/porsche.mp4" type="video/mp4" />
      </video>

      <div className="z-10 flex flex-1 flex-col items-center justify-center p-12 text-center font-bold text-white drop-shadow-sm">
        <h2 className="mb-2 w-full text-xl tracking-tight xl:text-3xl">
          <div className="ml-1 -mt-4 flex justify-items-start xl:-ml-3">
            <TypeWriter></TypeWriter>
          </div>
        </h2>
      </div>
      <div
        className={`duration-2000 flex-grow-0 animate-bounce pb-20 transition-opacity md:pb-10  ${
          imageLoaded ? " opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/assets/arrow.png"
          width={80}
          height={80}
          alt="scroll down"
          onLoad={handleImageLoaded}
        ></Image>
      </div>
    </div>
  );
};

export default Masthead;
