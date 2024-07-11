import { Delay, TerminalCommandText, TerminalText } from "../_components";

export default function Page() {
  return (
    <>
      <TerminalCommandText typing>
        <span className="font-bold text-white"> ./portofolio</span>
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
