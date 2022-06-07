import Image from "next/image";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from "./work";

const Works = () => {
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground>
        <WorkBackground></WorkBackground>
      </TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>I helped speed up</div>
                <div className="to bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
                  PowerWash
                </div>

                <div className=" mt-2 max-w-xs text-lg">
                  by refactoring the React Native app to TypeScript, adding E2E
                  testing using Cypress and Jest, and rethinking the component
                  structure.
                </div>
              </WorkLeft>

              <WorkRight progress={progress}>
                <Image
                  src="/assets/powerwash.png"
                  layout="responsive"
                  width={1400}
                  height={1200}
                  alt="powerwash"
                ></Image>
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
      <TileContent>
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>I built</div>
                <div className="to bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
                  HikeHike
                </div>
                <div className=" mt-2 max-w-xs text-lg">
                  using React, NodeJS, Express and MongoDB, with dynamic
                  QR-codes.
                </div>
              </WorkLeft>

              <WorkRight progress={progress}>
                <Image
                  src="/assets/hikehike.png"
                  layout="responsive"
                  width={850}
                  height={650}
                  alt="hikehike"
                ></Image>
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
      <TileContent>
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>I developed for</div>
                <div className="to bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
                  PictureThis!
                </div>
                <div className=" mt-2 max-w-xs text-lg">
                  utilizing Svelte with Tailwind, interacting with websockets
                  through Socket.IO.
                </div>
              </WorkLeft>

              <WorkRight progress={progress}>
                <Image
                  src="/assets/picturethis.png"
                  layout="responsive"
                  width={900}
                  height={650}
                  alt="picture this"
                ></Image>
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
    </TileWrapper>
  );
};

export default Works;
