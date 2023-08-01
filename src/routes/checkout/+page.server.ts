
import { env } from '$env/dynamic/private';
import { redirect, fail } from '@sveltejs/kit';

export async function load({ fetch }) {
    const productsData = await fetch(`${env.SHEET}`);
    const products = await productsData.json();
 
    return { products };
}

export const actions = {
    checkout: async ({ request }) => {
      const data = await request.formData();
      const email = data.get('email');
      const phone = data.get('phone');
      const address = data.get('address');
      const name = data.get('name');
      const state = data.get('state');
      const street = data.get('street');
      const products = data.get('products');
      const orderTotal = data.get('orderTotal');
      const note = data.get('note');
      const requestBody = {
        email: email,
        phone: phone,
        address: address,
        name: name,
        street:street,
        state:state,
        orderTotal:orderTotal,
        products:products,
        note:note
      };
  
      const url = (`${env.ORDERS}`);
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      };
  
      
        const response = await fetch(url, options);
        throw redirect(303, '/thankyou');
          // Request successful, handle the response if needed
       //   return {
          //  success: "true",
       //   }
      
       
     
    },
  };
  