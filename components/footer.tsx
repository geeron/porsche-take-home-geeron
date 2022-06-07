import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="flex min-h-full flex-col items-center justify-center gap-8 bg-black p-10 text-white">
      <span>
        Crafted with{" "}
        <span className="tracking-widest bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text font-extrabold text-transparent">
          love
        </span>{" "}
        by <strong>geeron</strong>
      </span>
      <div className="flex gap-4">
        <a href="https://github.com/geeron" rel="noopener noreferrer">
          <span className="cursor:pointer flex items-center justify-center">
            Github
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/gaute-rongve/"
          rel="noopener noreferrer"
        >
          <span className="flex items-center justify-center">LinkedIn</span>
        </a>
        <a
          href="mailto:gaute.rongve@gmail.com"
          rel="noopener noreferrer"
        >
          <span className="flex items-center justify-center">Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/gaute-rongve/"
          rel="noopener noreferrer"
        >
          <span className="flex items-center justify-center">Resume</span>
        </a>
      </div>

      <div className="flex gap-8">
        <span>© 2015 - 2022</span>
      </div>
    </footer>
  );
};

export default Footer;
