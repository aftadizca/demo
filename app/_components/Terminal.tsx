"use client";
import { MouseEventHandler, Component } from "react";
import { Props } from "../_interfaces";

interface ITerminal extends Props {
  footerPrompt?: boolean;
  headerPrompt?: boolean;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}

export const Terminal = ({
  footerPrompt = true,
  headerPrompt = false,
  ...props
}: ITerminal) => {
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
      {/* content */}
      <div className="table text-red-400">
        <div className="typewriter ml-3 mt-3 font-victor-mono text-xs font-bold lg:text-base">
          {`[root@afta ~]$`} ./about -show
        </div>
      </div>
      {props.children}
      {/* terminal footer */}
      {/* {footer && (
            <div className="absolute bottom-3 ml-3 flex w-full justify-start">
              <a className="mr-3 flex justify-start" href="/about">
                <div className="mr-1 block h-5 w-5 bg-red-500 text-center text-white">
                  ^A
                </div>
                <div className="block text-white">ABOUT</div>
              </a>
              <a className="mr-3 flex justify-start" href="/portofolio">
                <div className="mr-1 block h-5 w-5 bg-red-500 text-center text-white">
                  ^P
                </div>
                <div className="block text-white">PORTOFOLIO</div>
              </a>
              <a className="mr-3 flex justify-start" href="/contact">
                <div className="mr-1 block h-5 w-5 bg-red-500 text-center text-white">
                  ^C
                </div>
                <div className="block text-white">CONTACT</div>
              </a>
            </div>
          )} */}
    </div>
  );
};
