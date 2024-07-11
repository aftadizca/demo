import React from "react";

interface ITerminalText {
  ascii?: boolean;
  children: string;
}

export const TerminalText = ({ ascii = false, ...props }: ITerminalText) => {
  const text = props.children.split("\\n");

  return (
    <div className="mx-3 ml-7 mt-3 table max-w-[50vh] text-wrap font-victor-mono text-xs font-light text-red-400 lg:text-sm">
      {props.children}
    </div>
  );
};
