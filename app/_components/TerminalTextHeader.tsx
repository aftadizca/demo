import React from "react";

interface ITerminalTextHeader {
  ascii?: boolean;
  children: string;
}

export const TerminalTextHeader = ({
  ascii = false,
  ...props
}: ITerminalTextHeader) => {
  const text = props.children.split("\\n");

  return (
    <div className="bre mx-3 mt-3 table text-pretty font-victor-mono text-xs font-bold uppercase text-red-400 lg:text-sm">
      &#8226; <span className="underline">{props.children}</span>
    </div>
  );
};
