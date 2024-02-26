"use client";

import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Guild } from "@/app/utils/types";

const API_URL = "http://localhost:3001/api/guilds";

const validateCookies = () => {
  const sessionID = Cookies.get("connect.sid");
  console.log("Session ID:", sessionID);
  return sessionID
    ? {
        Cookie: `connect.sid=${sessionID}`,
      }
    : false;
};

const fetchMutualGuilds = async (headers: { Cookie: string }) => {
  try {
    const { data: guilds } = await axios.get<Guild[]>(`${API_URL}/guilds`, {
      headers,
    });
    console.log("Fetched guilds:", guilds);
    return guilds;
  } catch (err) {
    console.error("Error fetching guilds:", err);
    return null;
  }
};

const MenuPage = () => {
  const [guilds, setGuilds] = useState<Guild[]>([]);

  useEffect(() => {
    const fetchGuilds = async () => {
      const cookies = validateCookies();
      if (!cookies) {
        console.log("No session ID, redirecting to login page");
        // window.location.href = "/";
        return;
      }

      const mutualGuilds = await fetchMutualGuilds(cookies);
      if (!mutualGuilds) {
        console.log("Error fetching guilds, redirecting to login page");
        // window.location.href = "/";
        return;
      }

      setGuilds(mutualGuilds);
    };

    fetchGuilds();
  }, []);

  return (
    <div>
      {guilds.map((guild) => (
        <div key={guild.id}>{guild.name}</div>
      ))}
    </div>
  );
};

export default MenuPage;
// import { fetchMutualGuilds } from "@/app/utils/api";
// import { GetServerSideProps, GetServerSidePropsContext } from "next";

// const MenuPage = () => {
//   return <div>Menu Page</div>;
// };

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   return fetchMutualGuilds(context);
// }

// export default MenuPage;
