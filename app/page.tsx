import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen w-full bg-gradient-to-tr from-indigo-100 to-indigo-200 flex flex-col items-center justify-center px-4">
      <Card className="w-full max-w-96 shadow-md">
        <CardHeader>
          <div className="flex flex-col items-center gap-3">
            <span className="flex items-center justify-center w-full gap-1 text-3xl font-medium tracking-tighter text-center">
              <Shield />
              <p>Auth</p>
            </span>
            <p className="text-sm text-center text-muted-foreground">
              Modern Authentication System in Next.js Application.
            </p>
          </div>
        </CardHeader>

        <CardFooter>
          <LoginButton>
            <Button className="w-full">Get Started</Button>
          </LoginButton>
        </CardFooter>
      </Card>
    </main>
  );
};

const Shield = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-shield-check h-8 w-8"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
};
export default Home;
