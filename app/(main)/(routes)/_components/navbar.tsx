"use client";

import Link from "next/link";
import { Logo } from "@/app/(home)/_components/logo";
import Login from "./login";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { redirect, useRouter } from "next/navigation";

const Navbar = () => {
  // const INVITE_LINK = process.env.DISCORD_BOT_INVITE_LINK;
  const router = useRouter();
  return (
    <nav className="fixed z-50 top-0 w-full h-14 border-b shadow-sm flex items-center dark:border-white dark:border-opacity-20 ">
      {/* TODO: Mobile Sidebar */}
      <div className="flex items-center gap-x-4">
        <Logo />
        <Button
          size="lg"
          variant="ghost"
          className="px-4 rounded-sm hidden md:block h-auto py-3 border border-black border-opacity-25 dark:border-white dark:border-opacity-25 items-center"
          // onClick={() => router.push(INVITE_LINK)}
        >
          Invite
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="px-4 rounded-sm hidden md:block h-auto py-3 items-center"
          onClick={() => router.push("/menu")}
        >
          Guilds
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="ml-2 px-4 rounded-sm block md:hidden items-center border border-black border-opacity-25 dark:border-white dark:border-opacity-25"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2 mr-2">
        <ModeToggle />
        <Login />
      </div>
    </nav>
  );
};

export default Navbar;
