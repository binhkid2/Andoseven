import type { RequestHandler } from './$types';
import  products  from '$lib/utils/products.json';
import { json } from '@sveltejs/kit';
export async function GET({ request }) {
	return json(products);
}

	