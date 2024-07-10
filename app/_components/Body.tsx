"use client";
import { Terminal } from ".";
import { MouseEvent, useState } from "react";
import { Props } from "../_interfaces";

interface BodyProps extends Props {}

export function Body(props: BodyProps) {
  const [leftHover, setLeftHover] = useState(false);

  function handleMouseEnter(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    setLeftHover(true);
  }
  function handleMouseLeave(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    setLeftHover(false);
  }

  return (
    <div className="mt-16 flex flex-col items-center justify-center lg:min-h-full lg:flex-row lg:content-center lg:justify-center lg:p-12">
      <Terminal
        className={
          (leftHover ? "lg:translate-x-26 lg:scale-90 " : "") +
          "min-h-[60vh] min-w-[90vw] transition-all duration-700 ease-out-back lg:z-50 lg:min-h-[70vh] lg:min-w-[70vh] lg:translate-x-28"
        }
      >
        {props.children}
      </Terminal>

      <Terminal
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        id="left"
        className={
          "group min-h-[60vw] min-w-[90vw] !bg-black pb-0 transition-all duration-700 ease-out-back lg:min-h-[60vh] lg:min-w-[60vh] lg:-translate-x-28 " +
          (leftHover
            ? " z-50 !bg-neutral-800/10 lg:-translate-x-40 lg:scale-105"
            : " z-1")
        }
      >
        <div
          className={
            "mx-3 min-h-[60vw] min-w-[60vw] bg-[url('/img/afta-ascii-art.png')] bg-contain bg-bottom bg-no-repeat lg:min-h-[60vh] lg:min-w-[60vh] " +
            (leftHover ? " bg-[url('/img/afta.png')]" : "")
          }
        ></div>
      </Terminal>
    </div>
  );
}
