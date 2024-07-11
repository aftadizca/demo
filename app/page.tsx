"use client";
import { TerminalText } from "./_components/TerminalText";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/about");

  return <></>;
}
