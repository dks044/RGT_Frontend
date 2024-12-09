import React from "react";
import AuthForm from "./components/authform";

const LoginPage = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-1">
      <section>
        <AuthForm />
      </section>
    </main>
  );
};

export default LoginPage;
