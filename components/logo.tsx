import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden ml-2 md:flex">
        <Image src="/logo.png" alt="Logo" height={40} width={40} />
        <p className="text-2xl font-bold pb-1">RNDM</p>
      </div>
    </Link>
  );
};
