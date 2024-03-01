import Image from "next/image";
import { Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2  ml-2 hover:bg-accent hover:text-accent-foreground">
      <Image src="/logo.png" alt="Logo" height={30} width={30} />
      <p className={cn("font-semibold", font.className)}>RNDM</p>
    </div>
  );
};
