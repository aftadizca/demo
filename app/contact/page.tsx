import { Delay, TerminalCommandText, TerminalTextHeader } from "../_components";

export default function Page() {
  return (
    <>
      <TerminalCommandText typing>
        <span className="font-bold text-white"> ./contact</span>
        <span className="font-thin text-white/45"> --show</span>
      </TerminalCommandText>
      <Delay delay={4000}>
        <TerminalTextHeader>Hi, I am Afta</TerminalTextHeader>
        <TerminalTextHeader>Fullstack Web Developer</TerminalTextHeader>
        <TerminalCommandText>&nbsp;</TerminalCommandText>
      </Delay>
    </>
  );
}
