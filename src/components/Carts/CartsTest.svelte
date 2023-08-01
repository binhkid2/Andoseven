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
	let price = product.price;
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


	{#if cartProduct !== undefined}
		
    <div class="flex justify-around shadow-lg ring-1 ring-slate-400 p-4 rounded-lg m-0">
       
        <LazyImg
        src="{product.images[0]}"
        alt="{product.title}"
        class="w-32 lg:w-60 m-auto rounded-lg"  />
        <div>
            <div class="text-xl text-center lg:text-3xl  m-auto">
                <a href="/product/{product.id}" class="transition ease-in-out  delay-15 duration-300">
                    <h2 class="w-full text-xl">{product.title}</h2>
                    <p class="badge bg-blue-700 border-0 lg:text-xl sm:text-base px-2 py-4 my-2">{product.categoryVN}</p>
                    <p class="badge badge-secondary  lg:text-xl sm:text-base px-2 py-4 mb-2">{formatPrice(price)} <span> &#8363;</span></p>
                    
                </a>
            </div>
            <p class="p-2">Số lượng: </p>
            <div class="flex space-x-2 rounded-xl bg-gray-200 py-2 mx-3 w-40 justify-center">
                <button class="w-2" on:click={() =>  removeFromCart(product.id)}>-</button>
                <span class="w-2  px-4 ">{cartProduct.quantity}</span>
                <button class="w-2 "  on:click={() =>  addToCart(product.id,totalPrice,price)}>+</button>
            </div>
            <button  on:click={() => DeleteCart(product.id)} class=" lg:hidden w-40 py-2 m-3  bg-gradient-to-r from-red-200 to-red-500 text-white rounded-lg hover:scale-110 border-0">Delete</button>
        </div>
        
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a  on:click={() => DeleteCart(product.id)} class=" m-auto hidden md:block">
            <svg class="h-5 w-5" fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path d="M512.481 421.906L850.682 84.621c25.023-24.964 65.545-24.917 90.51.105s24.917 65.545-.105 90.51L603.03 512.377 940.94 850c25.003 24.984 25.017 65.507.033 90.51s-65.507 25.017-90.51.033L512.397 602.764 174.215 940.03c-25.023 24.964-65.545 24.917-90.51-.105s-24.917-65.545.105-90.51l338.038-337.122L84.14 174.872c-25.003-24.984-25.017-65.507-.033-90.51s65.507-25.017 90.51-.033L512.48 421.906z"></path></g></svg>
        </a>
        
    </div>
    
{/if}