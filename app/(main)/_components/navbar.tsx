import { Logo } from "@/components/logo";
import Login from "./login";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 w-full h-14 border-b shadow-sm flex items-center dark:border-white dark:border-opacity-20 ">
      {/* TODO: Mobile Sidebar */}
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button
          size="lg"
          variant="ghost"
          className="px-4 rounded-sm hidden md:block h-auto py-3 border border-black border-opacity-25 dark:border-white dark:border-opacity-25 items-center"
        >
          Invite
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
