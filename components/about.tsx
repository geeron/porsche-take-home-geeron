import React from "react";
import Image from "next/image";
import Skills from "./skills";

const About: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-10">
        <p className="mx-auto max-w-5xl leading-tight tracking-tight">
          I am a <strong>Full Stack Developer</strong> that writes clean
          code, with a focus on excellent design and thorough testing.
        </p>

        <p className="mx-auto mt-8 max-w-5xl leading-tight tracking-tight">
          This page is made with <strong>Next</strong>,{" "}
          <strong>Tailwind</strong> and <strong>TypeScript</strong>, which is my
          current go-to stack.
        </p>

        <p className="mx-auto mt-16 max-w-5xl leading-tight tracking-tight">
          These are the technologies I{" "}
          <span className="tracking-widest bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text font-extrabold text-transparent">
            love
          </span>{" "}
          to work with:
        </p>
      </div>
      <div className="container mx-auto mt-4 px-10 text-center">
        {/* <h2 className="font-bold text-6xl">tech stack <span className="text-blue-400">favorite technologies</span> to work
          with</h2> */}
        <Skills></Skills>
      </div>
    </section>
  );
};

export default About;
