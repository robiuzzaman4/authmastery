import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      <h1 className="text-xl text-wrap">{JSON.stringify(session)}</h1>
      {/* <h1 className="text-3xl">Settings page</h1> */}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit" variant="destructive">
          Sign Out
        </Button>
      </form>
    </div>
  );
};

export default SettingsPage;
