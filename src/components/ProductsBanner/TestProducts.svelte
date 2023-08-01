
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
        let totalPrice: number = cartProduct ? cartProduct.quantity * product.price : 0;
        cartItems.subscribe((newCartValue) => {
            cart = newCartValue;
            cartItemIndex = cart.findIndex((item) => {
                return item.id === product.id;
            });
            cartProduct = cart[cartItemIndex];
            totalPrice = cartProduct ? cartProduct.quantity * product.price : 0;
        });
	function formatPrice(number:number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
    </script>
    {#if product.images && product.id && product.title && product.price}
    <div class="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
        <a href={`/product/${product.id}`}>

          <LazyImg
          class="object-fill w-96 h-96 group-hover:opacity-60 transition duration-500" alt={product.title} src={product.images[0]} />
          {#if product.images[1]}
          <img
          class="object-fill w-96 h-96 absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-500" alt={product.title} src={product.images[1]}  />

          {/if}
        </a>
                <div class="absolute inset-x-0 bottom-0 flex items-center justify-center flex-col space-y-2">
                    <div>
                        <p class="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">{product.title}</p>
                    </div>
                    <div>
                        <p class="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white">{formatPrice(price)} <span> &#8363;</span></p>
                    </div>
                </div>
               
                <div class="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                    <button on:click={() =>  addToCart(product.id,totalPrice,price)}>
                        <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg1.svg" alt="add">
                        <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg1dark.svg

" alt="add">
                    </button>
                    <a href="/product/{product.id}" class="m-0 p-0"><button>
                        <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg2.svg" alt="view">
                        <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg2dark.svg" alt="view">
                    </button>
                </a>
                    <button>
                        <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg3.svg" alt="like">
                        <img class="hidden dark:block" src="
https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg3dark.svg" alt="like" />
                    </button>
                </div>
            </div>
            {/if}
