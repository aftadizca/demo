"use client";
import React, { useState } from "react"; // import state


const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false


    const menuItemData = [
        { name: "ABOUT", url: "/about" },
        { name: "PORTOFOLIO", url: "/portofolio" },
        { name: "CONTACT", url: "/contact" },
    ]

    const menuItemDekstop = menuItemData.map(({ name, url }) =>
        <li key={name} className="flex min-w-32 justify-center group before:content-[''] before:absolute before:min-w-32 before:h-10  before:-z-1 hover:before:blur-xl hover:before:bg-stone-600">
            <div className="opacity-0 py-1 group-hover:opacity-100 group-hover:text-red-500 transition-all duration-500 ease-in z-10">&#123;&nbsp;</div>
            <a className="py-1 group-hover:text-red-500 z-10" href={url}>{name}</a>
            <div className="py-1 opacity-0 group-hover:opacity-100 group-hover:text-red-500 transition-all duration-500 ease-in z-10">&nbsp;&#125;</div>
        </li>
    )

    return (
        <div className="flex items-center justify-around backdrop-blur-lg sticky top-0 z-10">
            <a className="flex justify-center py-8  before:content-[''] before:absolute before:min-w-32 before:h-10  before:-z-1 hover:before:blur-xl hover:before:bg-stone-600" href="/">
                <div className="font-playwrite font-black align-text-bottom text-xl text-red-500 drop-shadow-sm leading-10 italic">&lt;</div>
                <div className="font-playwrite font-black text-3xl text-red-500 drop-shadow-sm italic leading-none">Afta dw</div>
                <div className="font-playwrite font-black text-xl text-red-500 drop-shadow-sm italic leading-10">&nbsp;&#47;&gt;</div>
            </a>
            <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                    <div
                        className="space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> // toggle class based on isNavOpen state
                        <div
                            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
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
                        <ul className="flex flex-col items-center justify-between min-h-[250px] text-slate-400">
                            <li className="border-b my-8 uppercase">
                                <a href="/about">About</a>
                            </li>
                            <li className="border-b my-8 uppercase">
                                <a href="/portfolio">Portfolio</a>
                            </li>
                            <li className="border-b my-8 uppercase">
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* DESKTOP-MENU  */}
                <ul className="hidden uppercase font-dosis-extrabold text-lg lg:min-w-full text-slate-50 lg:flex">
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
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </div>
    );
}


export default Header;