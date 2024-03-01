"use client";
import { AlignRight } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Appbar = async () => {
  const router = useRouter();
  return (
    <div className="h-[100px] flex items-center justify-between px-10 py-0 text-[#EEEEEE] bg-[#393E46] dark:bg-neutral-950 text-xl">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => router.push("/menu")}
            >
              <AlignRight size={55} />
              {/* <p className="ml-6">Menu</p> */}
            </div>
          </TooltipTrigger>
          <TooltipContent className="dark:bg-[#393E46]">
            <p>Menu</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="flex items-center">
        <p>{"My Discord Server Name"}</p>
      </div>
    </div>
  );
};
