"use client";

import React from "react";

interface TerminalTextType {
    ascii?: boolean,
    children: string
}


export class TerminalText extends React.Component<TerminalTextType, {}> {
    public static defaultProps = {
        ascii: false,
        children: ""
    }

    public render(): JSX.Element {
        const { ascii, children } = this.props
        const text = children.split('\\n')

        if (ascii) {
            return (
                <div className=" text-xl font-monospace whitespace-pre leading-tight" >
                    <pre>
                        {text.map(x => (x + '\n'))}
                    </pre>
                </div>
            );
        } else {
            return (
                <div className="text-2xl mt-3">
                    {children}
                </div>
            )
        }

    }
}
