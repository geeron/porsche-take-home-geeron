import React from "react";
import Image from "next/image";
import Skills from "./skills";

const About: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-10">
        <p className="mx-auto max-w-5xl leading-tight tracking-tight">
          <strong> Timeless </strong>design, contemporary interpretation. The
          shape of the 911
        </p>

        <p className="mx-auto mt-8 max-w-5xl leading-tight tracking-tight">
          Carrera is unmistakable because of its iconic flyline and elegant roof
          lines.
        </p>

        <p className="mx-auto mt-16 max-w-5xl leading-tight tracking-tight">
          These have characterised Porsche since{" "}
          <span className="tracking-widest bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text font-extrabold text-transparent">
            1963,
          </span>{" "}
          as have sports cars with astonishing performance.
        </p>
      </div>
      <div className="container mx-auto mt-4 px-10 text-center">
        {/* <h2 className="font-bold text-6xl">tech stack <span className="text-blue-400">favorite technologies</span> to work
          with</h2> */}

      </div>
    </section>
  );
};

export default About;
