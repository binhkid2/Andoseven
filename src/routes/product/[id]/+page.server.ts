import { env } from "$env/dynamic/private";


/** @type {import('./$types').PageLoad} */
export async function load({ fetch,params }) {
  const res = await fetch(`${env.SHEET}/${params.id}`);
const product =  await res.json()
  return { product};
}
