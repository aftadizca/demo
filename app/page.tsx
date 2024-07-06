export default function Home() {
  return (
    <div className="flex justify-center content-center">
      {/* windows */}
      <div className="min-w-[50vw] min-h-[30vw] relative bg-neutral-800 rounded-md border  border-red-500 drop-shadow-[0_10px_20px_rgba(87,83,78,0.8)]">
        {/* header */}
        <div className="flex justify-start p-3">
          <div className="h-3 w-3 bg-red-500 rounded-xl mr-2"></div>
          <div className="h-3 w-3 bg-yellow-500 rounded-xl mr-2"></div>
          <div className="h-3 w-3 bg-green-500 rounded-xl mr-2"></div>
        </div>
        {/* content */}
        <div className="p-5 font-dosis-extrabold text-red-400">
          {/* terminal header */}
          <div className="whitespace-pre"><span className="text-green-500">afta</span>@linux: -&gt;<span>  ./hello_world</span></div>
          <div className="text-2xl mt-3">
            Hi, I am AFTA DIZCA WAHANA
          </div>
          <br />
          <div className=" text-xl font-monospace whitespace-pre leading-tight">
            █▀▀ █░█ █░░ █░░ ▄▄ █▀ ▀█▀ ▄▀█ █▀▀ █▄▀<br />
            █▀░ █▄█ █▄▄ █▄▄ ░░ ▄█ ░█░ █▀█ █▄▄ █░█
          </div>
          <br />
          <div className="text-xl font-monospace whitespace-pre leading-tight">
            █▀▄ █▀▀ █░█ █▀▀ █░░ █▀█ █▀█ █▀▀ █▀█<br />
            █▄▀ ██▄ ▀▄▀ ██▄ █▄▄ █▄█ █▀▀ ██▄ █▀▄
          </div>
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
    </div >
  );
}


