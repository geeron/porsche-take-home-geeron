import React from "react";
import Image from "next/image";

const Skills: React.FC = () => {
  interface Skill {
    id: number;
    name: string;
    url: string;
    category: string[];
  }

  const skillsArray: Skill[] = [
    {
      id: 1,
      name: "NextJS",
      url: "nextjs.svg",
      category: ["Framework", "Frontend"],
    },
    {
      id: 2,
      name: "TailWindCSS",
      url: "tailwindcss.svg",
      category: ["CSS", "Frontend"],
    },
    {
      id: 3,
      name: "PostgreSQL",
      url: "postgresql.svg",
      category: ["Database"],
    },
    {
      id: 4,
      name: "TypeScript",
      url: "typescript.svg",
      category: ["TypeScript"],
    },
    {
      id: 5,
      name: "React",
      url: "react.svg",
      category: ["Framework", "Frontend"],
    },
    {
      id: 6,
      name: "Svelte",
      url: "svelte.svg",
      category: ["Framework", "Frontend"],
    },
    {
      id: 7,
      name: "Prisma",
      url: "prisma.svg",
      category: ["Database", "ORM"],
    },
    {
      id: 8,
      name: "MongoDB",
      url: "mongodb.svg",
      category: ["Database"],
    },
    {
      id: 9,
      name: "Cypress",
      url: "cypress.svg",
      category: ["E2E", "Testing"],
    },
    {
      id: 10,
      name: "Jest",
      url: "jest.svg",
      category: ["E2E", "Testing"],
    },
    {
      id: 11,
      name: "Node",
      url: "nodejs.svg",
      category: ["Backend"],
    },
    {
      id: 12,
      name: "Express",
      url: "express.svg",
      category: ["Backend"],
    },
    {
      id: 13,
      name: "GraphQL",
      url: "graphql.svg",
      category: ["Backend"],
    },
    {
      id: 14,
      name: "FireBase",
      url: "firebase.svg",
      category: ["Backend"],
    },
  ];

  return (
    <div className="mt-10 grid grid-cols-2 gap-y-4 gap-x-8 px-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-20 xl:grid-cols-5">
      {skillsArray.map((skill) => {
        return (
          <div key={skill.id} className="flex flex-col justify-center">
            <Image
              src={`https://raw.githubusercontent.com/gilbarbara/logos/80c549990a0f513dcbaf3c9eab6a1a620df76088/logos/${skill.url}`}
              width={180}
              height={90}
            ></Image>
            <span className=" pt-4 text-lg  md:text-2xl text-slate-400">{skill.name}</span>
          </div>
        );
      })}
    </div>
  );
};
export default Skills;
