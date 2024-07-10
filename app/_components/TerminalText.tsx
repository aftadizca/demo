import React from "react";

interface ITerminalText {
  ascii?: boolean;
  children: string;
}

export const TerminalText = ({ ascii = false, ...props }: ITerminalText) => {
  console.log("test", ascii);
  const text = props.children.split("\\n");

  return (
    <div className="mx-3 mt-3 table text-wrap font-victor-mono text-lg font-thin text-red-400 lg:text-lg">
      {"> " + props.children}
    </div>
  );
};
