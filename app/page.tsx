import { TerminalText } from './_components/TerminalText'
import Terminal from './_components/Terminal'

export default function Home() {
  return (
    <div className="flex lg:min-h-full mt-16 justify-center content-center">
      <Terminal>
        <TerminalText>
          Hi, I am AFTA DIZCA WAHANA
        </TerminalText>
        <br />
        <TerminalText ascii={true}>
          █▀▀ █░█ █░░ █░░ ▄▄ █▀ ▀█▀ ▄▀█ █▀▀ █▄▀\n█▀░ █▄█ █▄▄ █▄▄ ░░ ▄█ ░█░ █▀█ █▄▄ █░█
        </TerminalText>
        <br />
        <TerminalText ascii={true}>
          █▀▄ █▀▀ █░█ █▀▀ █░░ █▀█ █▀█ █▀▀ █▀█\n█▄▀ ██▄ ▀▄▀ ██▄ █▄▄ █▄█ █▀▀ ██▄ █▀▄
        </TerminalText>
      </Terminal>
    </div>
  );
}


