import React from "react";
import { IProps } from "../_interfaces";

interface ITerminalCommandText extends IProps {
  typing?: boolean;
}

export const TerminalCommandText = ({
  typing = false,
  ...props
}: ITerminalCommandText) => {
  return (
    <div className="table text-red-400">
      <div
        key={props.key}
        className={
          (typing ? "animate-typing-blink-caret-5" : "animate-blink-caret") +
          " typewriter ml-3 mt-3 border-transparent font-victor-mono text-xs font-bold lg:text-sm"
        }
      >
        {`[root@afta ~]$ `}
        {props.children}
      </div>
    </div>
  );
};
