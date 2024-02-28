"use server";
// import { GetServerSidePropsContext } from "next";
import axios from "axios";
import { validateCookies } from "./helpers";
import { Guild } from "./types";
import { redirect } from "next/navigation";

const API_URL = "http://localhost:3001/api";

export async function fetchMutualGuilds(headers: string | false) {
  // const headers = await validateCookies();
  console.log(headers);
  if (!headers) return redirect("/");

  try {
    const { data: guilds } = await axios.get<Guild[]>(`${API_URL}/guilds`, {
      headers,
    });
    // console.log(guilds);
    return { props: guilds };
  } catch (err) {
    console.error(err);
    return redirect("/");
  }
}
