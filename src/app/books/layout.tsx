import Nav from "@/components/Nav";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Nav />
      <div>{children}</div>
    </main>
  );
};

export default layout;
