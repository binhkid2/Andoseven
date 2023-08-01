import { env } from "$env/dynamic/private";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const res = await fetch(`${env.SHEET}`);
  const products =  await res.json();
  return { products};
}

