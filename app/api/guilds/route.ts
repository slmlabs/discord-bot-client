"use server";
import { validateCookies } from "@/utils/helpers";
import { Guild } from "@/utils/types";
import axios from "axios";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { json } from "stream/consumers";

const API_URL = "http://localhost:3001/api";

export async function GET(req: Request) {
  const headers = await validateCookies();
  //   console.log(headers);
  if (!headers) {
    return NextResponse.redirect(new URL("/", req.url));
    // return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const { data: guilds } = await axios.get<Guild[]>(`${API_URL}/guilds`, {
      headers,
    });
    // console.log(guilds);
    return NextResponse.json(guilds);
  } catch (err) {
    // console.error(err);
    return NextResponse.redirect(new URL("/", req.url));
    // return redirect("/");
  }
}
