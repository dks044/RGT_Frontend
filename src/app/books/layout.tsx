import LoadingModal from "@/components/modals/LoadingModal";
import Nav from "@/components/Nav";
import React, { ReactNode, Suspense } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<LoadingModal show />}>
      <main>
        <Nav />
        <div>{children}</div>
      </main>
    </Suspense>
  );
};

export default layout;
