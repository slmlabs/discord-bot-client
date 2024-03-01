import { Guild } from "@/utils/types";
import Image from "next/image";
import { FC } from "react";

type Props = {
  guild: Guild;
};

export const GuildMenuItems: FC<Props> = ({ guild }) => {
  return (
    <div className="border flex flex-col items-center justify-between py-4 my-3 mx-0 rounded-lg cursor-pointer ">
      {guild.icon ? (
        <Image
          src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
          height={100}
          width={100}
          className="rounded-full border-solid border-4 border-gray-300"
          alt={guild.name}
        />
      ) : (
        <Image
          src={`/question.png`}
          height={100}
          width={100}
          className="rounded-full"
          alt={guild.name}
        />
      )}
      <p className="text-2xl font-semibold my-2 text-center">{guild.name}</p>
    </div>
  );
};
