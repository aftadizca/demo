const Terminal = ({ children }: { children: React.ReactElement[] }) => {

    return (
        <div className="pb-24 min-w-[50vh] lg:min-h-[60vh] lg:min-w-[40vw] relative backdrop-blur-xl bg-neutral-800/10 rounded-md border  border-red-500 drop-shadow-[0_10px_20px_rgba(87,83,78,0.8)]">
            {/* header */}
            <div className="flex justify-start p-3">
                <div className="h-3 w-3 bg-red-500 rounded-xl mr-2"></div>
                <div className="h-3 w-3 bg-yellow-500 rounded-xl mr-2"></div>
                <div className="h-3 w-3 bg-green-500 rounded-xl mr-2"></div>
            </div>
            {/* content */}
            <div className="px-3 font-dosis-extrabold text-red-400">
                {children}
                {/* terminal footer */}
                <div className="absolute bottom-3 flex justify-start w-full">
                    <a className="flex justify-start mr-3" href="/about">
                        <div className="bg-red-500 block mr-1 h-5 w-5 text-center  text-white">^A</div>
                        <div className=" block  text-white">ABOUT</div>
                    </a>
                    <a className="flex justify-start mr-3" href="/portofolio">
                        <div className="bg-red-500 block mr-1 h-5 w-5 text-center  text-white">^P</div>
                        <div className=" block text-white">PORTOFOLIO</div>
                    </a>
                    <a className="flex justify-start mr-3" href="/contact">
                        <div className="bg-red-500 block mr-1 h-5 w-5 text-center  text-white">^C</div>
                        <div className=" block  text-white">CONTACT</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Terminal;