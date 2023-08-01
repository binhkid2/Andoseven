<script lang="ts">
import { get } from 'svelte/store';
	import { cartItems, addToCart, removeFromCart, DeleteCart } from '../../cart';
	import LazyImg from '$lib/Lazy/lazyImg.svelte';
	export let product: Product 
	let cart = get(cartItems); // [ { id: "1", quantity: 6 }, { id: "2", quantity: 3 } ]
	// id: "1"
	let cartItemIndex = cart.findIndex((item) => {
		return item.id === product.id;
	});
	let cartProduct = cart[cartItemIndex];
	let price=product.price;
	function formatPrice(number:number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
	let totalPrice: number = cartProduct ? cartProduct.quantity * product.price : 0;
	cartItems.subscribe((newCartValue) => {
		cart = newCartValue;
		cartItemIndex = cart.findIndex((item) => {
			return item.id === product.id;
		});
		cartProduct = cart[cartItemIndex];
		totalPrice = cartProduct ? cartProduct.quantity * product.price : 0;
	});
</script>
{#if product.images && product.id && product.title && product.price}
	<div class="relative">
	  <div class="absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50">
		<p class="text-xs leading-3 text-gray-800">New</p>
	  </div>
	  <div class="relative group">
		<div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
		<a href={`/product/${product.id}`} class="relative inline-block">
			
			<LazyImg
			class="w-96 h-96" alt={product.title} src={product.images[0]} />
			{#if product.images[1]}
			<img
			class="w-96 h-96 absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300" alt={product.title} src={product.images[1]}/>
			
			{/if}
		  </a>		  
		<div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
		  <button class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full" on:click={() => addToCart(product.id, totalPrice, price)}>Thêm vào giỏ</button>
		  <a href={`/product/${product.id}`}>
			<button class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-black">Xem thêm</button>
		  </a>
		</div>
	  </div>
	  <a href={`/product/${product.id}`}>
		<p class="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">{product.title}</p>
	  </a>
	  <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">{formatPrice(price)} <span> &#8363;</span></p>
	</div>
  {/if}