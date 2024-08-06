import { auth } from "@/auth";
import React from "react";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      <h1 className="text-3xl">{JSON.stringify(session)}</h1>
    </div>
  );
};

export default SettingsPage;
