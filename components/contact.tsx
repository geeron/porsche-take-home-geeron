import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      className={`-mt-10 flex flex-col bg-white  pb-20 text-3xl md:py-40 md:text-4xl`}
    >
      <div className="container mx-auto px-10">
        <h2 className="mx-auto mt-8 max-w-5xl  font-bold leading-tight tracking-tight">
          Feel free to contact me!
        </h2>
        <p className="mx-auto mt-8 max-w-5xl leading-tight">
          I{"'"}d{" "}
          <span className="tracking-widest bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text font-extrabold text-transparent">
            love
          </span>{" "}
          to hear from you, whether you need <strong>help</strong> with a
          project, have some <strong>interesting</strong> job-opportunities or
          want me to <strong>contribute</strong> to an open-source project!
        </p>
        <p className="mx-auto mt-8 max-w-5xl leading-tight">
          Check out my{" "}
          <span className="tracking-widest bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text font-extrabold text-transparent">
            <a href="https://github.com/geeron" rel="noopener noreferrer">
              Github
            </a>
          </span>{" "}
          for more work, connect with me on{" "}
          <span className="tracking-widest bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text font-extrabold text-transparent">
            <a
              href="https://www.linkedin.com/in/gaute-rongve/"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </span>
          , or shoot me an{" "}
          <span className="tracking-widest bg-gradient-to-r from-red-700 to-red-800 bg-clip-text font-extrabold text-transparent">
            <a href="mailto:gaute.rongve@gmail.com" rel="noopener noreferrer">
              email
            </a>
          </span>
          .
        </p>
      </div>
    </section>
  );
};

export default Contact;
