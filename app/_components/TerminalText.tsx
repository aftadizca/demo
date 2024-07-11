import React from "react";
import { Delay } from ".";

interface ITerminalText {
  ascii?: boolean;
  children: string;
}

export const TerminalText = ({ ascii = false, ...props }: ITerminalText) => {
  const text = props.children.split("\\n");

  return (
    <div className="mx-3 mt-3 table list-disc text-wrap font-victor-mono text-base italic text-red-400 lg:text-lg">
      &#10003;{" " + props.children}
    </div>
  );
};
