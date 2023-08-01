import type { RequestHandler,RequestEvent } from './$types';
import  products  from '$lib/utils/products.json';
import { json } from '@sveltejs/kit';
export const GET: RequestHandler = async (e:RequestEvent) => {

const idd = parseInt(e.params.id)
let product = products[idd]
    return json(product);
};