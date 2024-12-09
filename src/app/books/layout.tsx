import Nav from "@/components/Nav";
import React, { ReactNode, Suspense } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense>
      <main>
        <Nav />
        <div>{children}</div>
      </main>
    </Suspense>
  );
};

export default layout;
