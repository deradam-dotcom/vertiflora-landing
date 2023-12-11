import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="sharp"
      rel="preload"
      href="/fonts/Sharp-Grotesk.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="sharp-bold"
      rel="preload"
      href="/fonts/Sharp-Grotesk-Bold.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="tanker"
      rel="preload"
      href="/fonts/Tanker-Regular.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
  ]);
};
