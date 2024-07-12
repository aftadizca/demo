import {
  Delay,
  TerminalCommandText,
  TerminalTextHeader,
  TerminalText,
} from "../_components";

export default function Page() {
  return (
    <>
      <TerminalCommandText typing>
        <span className="font-bold text-white"> ./contact</span>
        <span className="font-thin text-white/45"> --show</span>
      </TerminalCommandText>
      <Delay delay={4000}>
        <TerminalTextHeader>E-mail</TerminalTextHeader>
        <TerminalText>
          <div className="flex justify-start">
            <img
              className="mr-2 animate-bounce"
              height={16}
              width={16}
              src="/img/email.svg"
            ></img>
            mail@aftadw.my.id
          </div>
        </TerminalText>
        <TerminalText>
          <div className="flex justify-start">
            <img
              className="mr-2 animate-bounce"
              height={16}
              width={16}
              src="/img/email.svg"
            ></img>
            aftadizca@gmail.com
          </div>
        </TerminalText>

        <TerminalTextHeader>Git</TerminalTextHeader>
        <TerminalText>
          <div className="flex justify-start">
            <img
              className="mr-2 animate-bounce"
              height={16}
              width={16}
              src="/img/link.svg"
            ></img>
            <a target="_blank" href="https://github.com/aftadizca">
              github.com/aftadizca
            </a>
          </div>
        </TerminalText>
        <TerminalText>
          <div className="flex justify-start">
            <img
              className="mr-2 animate-bounce"
              height={16}
              width={16}
              src="/img/link.svg"
            ></img>
            <a target="_blank" href="https://gitlab.com/aftadizca">
              gitlab.com/aftadizca
            </a>
          </div>
        </TerminalText>
        <TerminalCommandText>&nbsp;</TerminalCommandText>
      </Delay>
    </>
  );
}
