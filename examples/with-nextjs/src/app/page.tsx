// ...existing code...
import Script from "next/script";

import "../common.scss";

import ExcalidrawClientOnly from "./ExcalidrawClientOnly";

// Since client components get prerenderd on server as well hence importing the excalidraw stuff dynamically
// with ssr false

export default function Page() {
  return (
    <>
      <a href="/excalidraw-in-pages">Switch to Pages router</a>
      <h1 className="page-title">App Router</h1>
      <Script id="load-env-variables" strategy="beforeInteractive">
        {`window["EXCALIDRAW_ASSET_PATH"] = window.origin;`}
      </Script>
      <ExcalidrawClientOnly />
    </>
  );
}
