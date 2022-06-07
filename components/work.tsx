import React from "react";
import Link from "next/link";

interface Props {
  children?: any;
  progress?: number;
}

export const WorkContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2 ">
      {children}
    </div>
  );
};

export const WorkBackground: React.FC = () => {
  return (
    <div className="sticky top-0 grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
      <div className="h-[30vh] bg-black lg:h-auto"></div>
      <div className="h-[70vh] bg-white lg:min-h-screen"></div>
    </div>
  );
};

export const WorkLeft: React.FC<Props> = ({ children, progress }) => {
  let translateY = Math.max(0, 50 - progress! * 3 * 50);
  if (progress! > 0.85) {
    translateY = Math.max(-50, -(progress! - 0.85) * 2 * 50);
  }
  return (
    <div
      className="flex h-[30vh] flex-col items-center justify-center text-3xl lg:h-auto lg:text-3xl "
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="leading-10">{children}</div>
    </div>
  );
};

export const WorkRight: React.FC<Props> = ({ children, progress }) => {
  let translateY = Math.max(-50, -(progress! - 0.5) * 50);

  return (
    <div
      className="flex h-screen flex-1 justify-center lg:items-center"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="w-full max-w-lg px-5 pt-10 md:px-0 lg:pt-0">
        {children}
      </div>
    </div>
  );
};
