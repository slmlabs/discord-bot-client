import { Guild } from "@/app/utils/types";
import Image from "next/image";
import { FC } from "react";

type Props = {
  guild: Guild;
};

export const GuildMenuItems: FC<Props> = ({ guild }) => {
  return (
    <div className="border flex items-center justify-between dark:border-white dark:border-opacity-20 py-5 px-8 my-3 mx-0 rounded-lg cursor-pointer ">
      {guild.icon ? (
        <Image
          src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
          height={55}
          width={55}
          className="rounded-full"
          alt={guild.name}
        />
      ) : (
        <Image
          src={`/question.png`}
          height={55}
          width={55}
          className="rounded-full"
          alt={guild.name}
        />
      )}
      <p>{guild.name}</p>
    </div>
  );
};
