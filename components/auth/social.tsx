import React from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex items-center w-full gap-3">
      <Button onClick={() => {}} className="w-full" variant="outline">
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button onClick={() => {}} className="w-full">
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Social;
