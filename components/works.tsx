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
                <div className="to bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
                  Fast
                </div>
                <div className=" mt-2 max-w-xs text-lg"></div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/porsche.png"
                  layout="responsive"
                  width={862}
                  height={292}
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
                <div></div>
                <div className="to bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
                  Elegant
                </div>
                <div className=" mt-2 max-w-xs text-lg"></div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/porsche.png"
                  layout="responsive"
                  width={862}
                  height={292}
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
                <div>Timeless</div>
                <div className="to bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
                  Design
                </div>
                <div className=" mt-2 max-w-xs text-lg">
                  contemporary interpretation. The shape of the{" "}
                  <strong>911</strong>
                </div>
              </WorkLeft>

              <WorkRight progress={progress}>
                <Image
                  src="/assets/porsche.png"
                  layout="responsive"
                  width={862}
                  height={292}
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
