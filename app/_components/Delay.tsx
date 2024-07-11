"use client";

import { useEffect, useState } from "react";
import { IProps } from "../_interfaces";

interface IDelay extends IProps {
  delay: number;
}

export const Delay = (props: IDelay) => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const delayEl = setTimeout(() => setShown(true), props.delay);
    return () => clearTimeout(delayEl);
  }, [props.delay]);

  return shown && props.children;
};
