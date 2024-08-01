import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-indigo-100 to-indigo-200 flex flex-col items-center justify-center px-4">{children}</div>
  );
};

export default AuthLayout;
