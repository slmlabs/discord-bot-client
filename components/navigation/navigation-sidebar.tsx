"use client";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LayoutPanelLeft, TerminalSquare, Wrench, LogOut } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

const routes = [
  {
    name: "dashboard",
    getPath: (id: string) => `/dashboard/${id}`,
    icon: <LayoutPanelLeft size={48} />,
  },
  {
    name: "commands",
    getPath: (id: string) => `/dashboard/${id}/commands`,
    icon: <TerminalSquare size={48} />,
  },
  {
    name: "settings",
    getPath: (id: string) => `/dashboard/${id}/settings`,
    icon: <Wrench size={48} />,
  },
];

export const NavigationSidebar = async () => {
  const router = useRouter();
  const params = useParams();

  return (
    <div className="h-full flex flex-col items-center ml-0 justify-between">
      <Image
        src={"/question.png"}
        height={50}
        width={50}
        alt="guild_icon"
        className="rounded-full"
      />
      <div className="flex flex-col items-center *:my-8 *:mx-0">
        {routes.map((route) => (
          <div key={route.name}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push(route.getPath(params.id as string))}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>{route.icon}</TooltipTrigger>
                  <TooltipContent className="capitalize dark:bg-[#393E46]">
                    <p>{route.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Button>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center">
        {/* <div className="mb-6">
          <ModeToggle />
        </div> */}
        <Button variant="ghost" size="icon">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <LogOut size={48} />
              </TooltipTrigger>
              <TooltipContent className="capitalize dark:bg-[#393E46]">
                <p>Logout</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Button>
      </div>
    </div>
  );
};
