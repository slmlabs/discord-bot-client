"use client";

import { Button } from "@/components/ui/button";
import { Quicksand } from "next/font/google";
import { FaDiscord } from "react-icons/fa";
import { cn } from "@/lib/utils";

const font = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Amplify your Discord Community with{" "}
        <span className={cn("font-bold", font.className)}>RNDM</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        <span className={cn("", font.className)}>RNDM</span> is a multi-purpose
        bot that is designed with your community in mind.
      </h3>
      <Button>
        <FaDiscord size="30" color="#7289DA" className="mr-2" />
        Login with Discord
      </Button>
    </div>
  );
};
