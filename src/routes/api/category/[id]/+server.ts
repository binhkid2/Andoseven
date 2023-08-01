import type { RequestHandler,RequestEvent } from './$types';
import  products  from '$lib/utils/products.json';
import { json } from '@sveltejs/kit';
export const GET: RequestHandler = async (e:RequestEvent) => {


const cate = e.params.id;

// Filter the products array to find items with the specified category
let productsByCate = products.filter((product) => product.category === cate);

// Now, productsByCate contains an array of products that have the same category as 'cate'
return json(productsByCate);

};