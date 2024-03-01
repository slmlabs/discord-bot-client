"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Guild } from "@/utils/types";
import { GuildMenuItems } from "./_components/guilds/GuildMenuItems";
import axios from "axios";
import { LoadingScreen } from "@/components/loading/loading-widget";
import Image from "next/image";

export default function MenuPage() {
  const router = useRouter();
  const [guilds, setGuilds] = useState<Guild[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      axios
        .get("/api/guilds")
        .then((res) => {
          // console.log(res.data);
          setGuilds(res.data.guilds);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (!guilds)
    return (
      <div className="w-[768px] mx-[auto] my-[0] flex flex-col items-center">
        <div className="">No mutual servers found</div>
      </div>
    );

  return (
    <div className="w-[768px] mx-[auto] my-[0] py-5 flex flex-col">
      <h1 className="text-3xl font-bold pb-5">Please Select a Server</h1>
      <div className="flex flex-wrap items-center">
        {guilds.map((guild: Guild) => (
          <div
            className="w-1/2 md:w-1/3"
            key={guild.id}
            onClick={() => router.push(`dashboard/${guild.id}`)}
          >
            <GuildMenuItems guild={guild} />
          </div>
        ))}
      </div>
    </div>
  );
}
