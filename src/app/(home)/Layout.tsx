import React, { ReactNode } from "react";

const LoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-1">
      {children}
    </main>
  );
};

export default LoginLayout;
