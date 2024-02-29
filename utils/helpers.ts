"use server";
import { cookies } from "next/headers";

export async function validateCookies() {
  const sessionID = cookies().get("connect.sid")?.value;
  return (await sessionID) ? { Cookie: `connect.sid=${sessionID}` } : false;
}
