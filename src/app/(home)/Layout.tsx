import { ToasterContext } from "@/context/ToastContext";
import React, { ReactNode } from "react";

const LoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full h-full flex justify-center items-center">
      <ToasterContext />
      {children}
    </main>
  );
};

export default LoginLayout;
