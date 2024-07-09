"use client";
import { TerminalText } from "./_components/TerminalText";
import { Terminal } from "./_components/Terminal";
import { MouseEvent, useState } from "react";
import { Props } from "./_interfaces";

export default function Home() {
  const [leftHover, setLeftHover] = useState(false);

  function handleMouseEnter(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    setLeftHover(true);
    console.log("enter");
  }
  function handleMouseLeave(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    setLeftHover(false);
  }

  return (
    <>
      <TerminalText>Hi, I am Afta</TerminalText>
      <br />
      <TerminalText ascii={true}>
        ██████████████████████████████████████████████████████████\n
        █▄─▄▄─█▄─██─▄█▄─▄███▄─▄█████─▄▄▄▄█─▄─▄─██▀▄─██─▄▄▄─█▄─█─▄█\n
        ██─▄████─██─███─██▀██─██▀███▄▄▄▄─███─████─▀─██─███▀██─▄▀██\n
        ▀▄▄▄▀▀▀▀▄▄▄▄▀▀▄▄▄▄▄▀▄▄▄▄▄▀▀▀▄▄▄▄▄▀▀▄▄▄▀▀▄▄▀▄▄▀▄▄▄▄▄▀▄▄▀▄▄▀
      </TerminalText>
      <br />
      <TerminalText ascii={true}>
        ██████████████████████████████████████████████████████\n
        █▄─▄▄▀█▄─▄▄─█▄─█─▄█▄─▄▄─█▄─▄███─▄▄─█▄─▄▄─█▄─▄▄─█▄─▄▄▀█\n
        ██─██─██─▄█▀██▄▀▄███─▄█▀██─██▀█─██─██─▄▄▄██─▄█▀██─▄─▄█\n
        ▀▄▄▄▄▀▀▄▄▄▄▄▀▀▀▄▀▀▀▄▄▄▄▄▀▄▄▄▄▄▀▄▄▄▄▀▄▄▄▀▀▀▄▄▄▄▄▀▄▄▀▄▄▀
      </TerminalText>
    </>
  );
}
