import { BASE_URL } from "@/components/shared/api/baseUrl";

export async function getPosts(limit: number = 30) {
  const resp = await fetch(`${BASE_URL}/posts?_limit=${limit}`);

  const data = await resp.json();

  return data;
}
