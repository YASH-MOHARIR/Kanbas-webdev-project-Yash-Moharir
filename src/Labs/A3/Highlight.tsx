import React from "react"; 

import { ReactNode } from "react";
export default function Highlight({ children }: { children: ReactNode }) {
  return (
    <span id="wd-highlight" style={{ backgroundColor: "lightBlue", color: "white" }}>
      {children}
    </span>
  );
}
