"use client";
import { Delay, TerminalCommandText } from "../_components";
import { TerminalText } from "../_components/TerminalText";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <>
      <TerminalCommandText typing>
        <span className="font-bold text-white"> ./about</span>
        <span className="font-thin text-white/45"> --show</span>
      </TerminalCommandText>
      <Delay delay={4000}>
        <TerminalText>Hi, I am Afta</TerminalText>
        <TerminalText>Fullstack Web Developer</TerminalText>
        <TerminalCommandText>&nbsp;</TerminalCommandText>
      </Delay>
    </>
  );
}
