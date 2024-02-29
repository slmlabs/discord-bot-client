import { validateCookies } from "@/utils/helpers";
import { fetchMutualGuilds } from "@/utils/api";
import { Guild } from "@/utils/types";
import { GuildMenuItems } from "./_components/guilds/GuildMenuItems";

export default async function MenuPage() {
  const headers = await validateCookies();
  const data = await fetchMutualGuilds(headers);
  const guilds = data.props.guilds;
  console.log(guilds);

  return (
    <div className="w-[768px] mx-[auto] my-[0] flex flex-col items-center">
      <div className="">
        <h1 className="text-3xl font-semibold pb-2">Please Select a Guild</h1>
        {guilds.map((guild: Guild) => (
          <div key={guild.id}>
            <GuildMenuItems guild={guild} />
          </div>
        ))}
      </div>
    </div>
  );
}
