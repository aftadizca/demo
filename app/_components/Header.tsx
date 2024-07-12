"use client";

import React, { useState, MouseEvent } from "react"; // import state
import { IProps } from "../_interfaces";
import { useRouter } from "next/navigation";

import Link from "next/link";

type MenuItem = {
  name: string;
  url: string;
};

interface HeaderProps extends IProps {
  item: MenuItem[];
  logo: string;
}

export const Header = ({
  id = "header",
  logo = "Logo",
  ...props
}: HeaderProps) => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(e.currentTarget.href);
  };

  const menuItemDekstop = props.item.map(({ name, url }, i) => (
    <li
      key={i}
      className="before:-z-1 group flex min-w-32 justify-center before:absolute before:h-10 before:min-w-32 before:scale-50 before:transition-all before:duration-500 before:ease-out-back before:content-[''] before:hover:scale-100 hover:before:bg-stone-600 hover:before:blur-xl"
    >
      <div className="z-10 translate-x-3 py-1 opacity-0 transition-all duration-500 ease-in-out-back group-hover:translate-x-0 group-hover:text-red-500 group-hover:opacity-100">
        &#123;&nbsp;
      </div>
      <Link
        className="z-10 py-1 group-hover:font-victor-mono-italic group-hover:text-red-500"
        href={url}
        onClick={handleClick}
      >
        {name}
      </Link>
      <div className="z-10 -translate-x-3 py-1 opacity-0 transition-all duration-500 ease-in-out-back group-hover:-translate-x-0 group-hover:text-red-500 group-hover:opacity-100">
        &nbsp;&#125;
      </div>
    </li>
  ));

  return (
    <div
      id={id}
      className="sticky top-0 z-10 flex items-center justify-around backdrop-blur-lg"
    >
      <a
        className="before:-z-1 flex justify-center py-8 before:absolute before:h-10 before:min-w-32 before:scale-50 before:transition-all before:duration-500 before:content-[''] before:hover:scale-100 hover:before:bg-stone-600 hover:before:blur-xl"
        href="/"
      >
        <div className="align-text-bottom font-playwrite text-xl font-black italic leading-10 text-red-500 drop-shadow-sm">
          &lt;
        </div>
        <div className="font-playwrite text-3xl font-black italic leading-none text-red-500 drop-shadow-sm">
          {logo}
        </div>
        <div className="font-playwrite text-xl font-black italic leading-10 text-red-500 drop-shadow-sm">
          &nbsp;&#47;&gt;
        </div>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-1 w-8 animate-pulse rounded-sm bg-red-500"></span>
            <span className="block h-1 w-8 animate-pulse rounded-sm bg-red-500"></span>
            <span className="block h-1 w-8 animate-pulse rounded-sm bg-red-500"></span>
          </div>

          <div
            className={
              isNavOpen
                ? "showMenuNav bg-black/95 backdrop:blur-3xl"
                : "hideMenuNav"
            }
          >
            {/* toggle class based on isNavOpen state */}
            <div
              className="absolute right-0 top-0 mr-7 px-7 py-7"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-12 w-12 text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex min-h-[250px] flex-col items-center justify-between font-victor-mono text-2xl font-black text-red-500">
              <li className="my-8 uppercase">
                <Link onClick={() => setIsNavOpen(false)} href="/about">
                  About
                </Link>
              </li>
              <li className="my-8 uppercase">
                <Link onClick={() => setIsNavOpen(false)} href="/portofolio">
                  Portfolio
                </Link>
              </li>
              <li className="my-8 uppercase">
                <Link onClick={() => setIsNavOpen(false)} href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* DESKTOP-MENU  */}
        <ul className="hidden font-victor-mono text-lg text-slate-50 lg:flex lg:min-w-full">
          {menuItemDekstop}
        </ul>
      </nav>

      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};
