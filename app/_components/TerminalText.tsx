"use client";

import React from "react";

interface TerminalTextType {
  ascii?: boolean;
  children: string;
}

export class TerminalText extends React.Component<TerminalTextType, {}> {
  public static defaultProps = {
    ascii: false,
    children: "",
  };

  public render(): JSX.Element {
    const { ascii, children } = this.props;
    const text = children.split("\\n");

    if (ascii) {
      return (
        <div className="ml-3 whitespace-pre font-monospace text-sm leading-tight">
          <pre>{text.map((x) => x + "\n")}</pre>
        </div>
      );
    } else {
      return (
        <div className="ml-3 mt-3 font-monospace text-2xl">{children}</div>
      );
    }
  }
}
