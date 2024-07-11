"use client";
import { MouseEventHandler, Component } from "react";
import { IProps } from "../_interfaces";

interface ITerminal extends IProps {
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}

export const Terminal = (props: ITerminal) => {
  return (
    <div
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      className={
        "relative my-2 overflow-hidden rounded-md border border-red-500 bg-neutral-800/10 drop-shadow-[0_10px_20px_rgba(87,83,78,0.8)] backdrop-blur-xl " +
        props.className
      }
      id={props.id}
    >
      {/* header */}
      <div className="flex justify-start bg-red-900 p-3">
        <div className="mr-2 h-3 w-3 rounded-xl bg-red-500"></div>
        <div className="mr-2 h-3 w-3 rounded-xl bg-yellow-500"></div>
        <div className="mr-2 h-3 w-3 rounded-xl bg-green-500"></div>
      </div>
      {props.children}
    </div>
  );
};
