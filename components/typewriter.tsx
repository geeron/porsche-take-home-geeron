import * as React from "react";

import { useTypeWriter } from "@vegadev/react-type-writer";

const TypeWriter = () => {
  const text = useTypeWriter({
    text: ["Porsche 911"],
    infiniteLoop: false,
    blinker: "|",
    delay: 1000,
    blinkerDelay: 550,
  });
  return (
    <div className=" pl-4">
      {text}
    </div>
  );
};

export default TypeWriter;
