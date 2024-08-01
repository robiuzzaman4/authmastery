"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

interface LoginButtonProps {
  children: ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO: MODAL COMPONENT</span>;
  }
  return (
    <span onClick={onClick} className="cursor-pointer w-full">
      {children}
    </span>
  );
};

export default LoginButton;
