"use client";
import dynamic from "next/dynamic";

const ExcalidrawWithClientOnly = dynamic(
  async () => (await import("../excalidrawWrapper")).default,
  {
    ssr: false,
  },
);

export default function ExcalidrawClientOnly() {
  return <ExcalidrawWithClientOnly />;
}
