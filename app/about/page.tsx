"use client";
import {
  Delay,
  TerminalCommandText,
  TerminalTextHeader,
  TerminalText,
} from "../_components";

export default function Home() {
  return (
    <>
      <TerminalCommandText key="about" typing>
        <span className="font-bold text-white"> ./about</span>
        <span className="font-thin text-white/45"> --show</span>
      </TerminalCommandText>
      <Delay delay={4000}>
        <TerminalTextHeader>Hi, my name is Afta</TerminalTextHeader>
        <TerminalText>
          A Full-Stack Web Developer passionate about creating interactive
          website. I also interested in Mobile Application (Android) and Machine
          Learning.
        </TerminalText>
        <TerminalText>Always love to learn new things. 🤗</TerminalText>
        <TerminalCommandText>&nbsp;</TerminalCommandText>
      </Delay>
    </>
  );
}
