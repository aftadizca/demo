import React from "react";
import { IProps } from "../_interfaces";

interface ITerminalText extends IProps {
  ascii?: boolean;
}

export const TerminalText = ({ ascii = false, ...props }: ITerminalText) => {
  return (
    <div className="mx-3 ml-7 mt-3 table max-w-[75vw] text-wrap font-victor-mono text-xs font-light text-white lg:max-w-[30vw] lg:text-sm">
      {props.children}
    </div>
  );
};
