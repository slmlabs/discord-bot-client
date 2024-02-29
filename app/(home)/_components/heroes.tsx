import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] ">
          <Image
            src="/play_light.svg"
            fill
            className="object-contain dark:hidden"
            alt="play"
          />
          <Image
            src="/play_dark.svg"
            fill
            className="object-contain hidden dark:block"
            alt="play"
          />
        </div>
        <div className="relative ml-4 h-[400px] w-[400px] hidden md:block">
          <Image
            src="gaming_light.svg"
            fill
            className="object-contain dark:hidden"
            alt="Team"
          />
          <Image
            src="gaming_dark.svg"
            fill
            className="object-contain hidden dark:block"
            alt="Team"
          />
        </div>
      </div>
    </div>
  );
};
