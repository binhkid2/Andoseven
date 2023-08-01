<script lang="ts">
import { get } from 'svelte/store';
import { onMount } from "svelte";
  /** @type {import('./$types').PageData} */
  export let data: any;
  const products: Product[] = data.products;
  let cart = get(cartItems);
  let  grossPrice = cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  
  let grossQuantity = cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    let formattedPrice: string = formatPrice(grossPrice);
  cartItems.subscribe((newCartValue) => {
    cart = newCartValue;
      grossPrice = cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  
   grossQuantity = cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    formattedPrice = formatPrice(grossPrice);
  });
  function formatPrice(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

onMount(() => {
  formattedPrice = formatPrice(grossPrice);
});
    let showModal = false;
import { createEventDispatcher } from 'svelte';
	import CartsTest from '../../Carts/CartsTest.svelte';
	import cartItems from '../../../cart';
	import LazyImg from '$lib/Lazy/lazyImg.svelte';

const dispatch = createEventDispatcher();
function toggleModal() {
  showModal = !showModal;
}
 function back(): void {
    showModal = false;
    dispatch('close');
  }
  const handle_keydown = (event:any)=>{
    if (event.key == 'Escape'){
      showModal=false;
    }
  }
  
    
</script>
<svelte:window on:keydown={handle_keydown} />
{#if showModal}
<!-- svelte-ignore a11y-click-events-have-key-events -->

<div  class=" w-full h-full bg-black dark:bg-gray-900 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
  <div class="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
      <div class="flex items-end lg:flex-row flex-col justify-end" id="cart">
          <div class="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto" id="scroll">
              <button on:click={back} class="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer" >
                  
                <LazyImg class="dark:hidden lg:w-3 w-2" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/shopping-cart-1-svg1.svg" alt="previous"/>
                   <LazyImg class="dark:block w-2 lg:w-3 hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/shopping-cart-1-svg1dark.svg" alt="previous"/>
                  <p class="text-base lg:text-xl font-bold m-2 lg:m-4 pl-2 leading-none dark:hover:text-gray-200">Back</p>
              </button>
              {#each products as product}
             <CartsTest {product}/>
              {/each}
          </div>
          
          <div class="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
              <div class="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                  <div>
                      <p class="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">Tổng cộng</p>
                      <div class="flex items-center justify-between pt-16">
                        <p class="text-xl leading-none text-gray-800 dark:text-white">Đơn giá</p>
                        <p class="text-xl  leading-none text-gray-800 dark:text-white">{formattedPrice}<span> &#8363;</span></p>
                       
                      </div>
                      <div class="flex items-center justify-between pt-5">
                          <p class="text-base leading-none text-gray-800 dark:text-white">Phí ship</p>
                          <p class="text-base leading-none text-gray-800 dark:text-white"> Free</p>
                      </div>
                      <div class="flex items-center justify-between pt-5">
                          <p class="text-base leading-none text-gray-800 dark:text-white">Ghi chú</p>
                          <p class="text-base leading-none text-gray-800 dark:text-white">...</p>
                      </div>
                  </div>
                  <div>
                      <div class="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                          <p class="text-2xl leading-normal text-gray-800 dark:text-white">Thành tiền</p>
                          <p class="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">{formattedPrice}<span> &#8363;</span></p>
                      </div>
                     <a href="/checkout">
                         <button on:click={back} class="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700">Trang thanh toán</button>
                  </a>
                        </div>
              </div>
          </div>
      </div>
  </div>
  </div>
  {:else}
  <button  on:click={toggleModal} tabindex="0"   class="btn btn-ghost btn-circle mr-4">
    <div class="indicator">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        class="bi bi-cart"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
      </svg>
      {#if cart.length != 0}  <span class="badge badge-sm bg-red-700 indicator-item rounded-lg">{cart.length}</span> {/if}
    </div>
  </button>

  {/if}


<style>
  /* width */
  #scroll::-webkit-scrollbar {
      width: 1px;
  }

  /* Track */
  #scroll::-webkit-scrollbar-track {
      background: #f1f1f1;
  }

  /* Handle */
  #scroll::-webkit-scrollbar-thumb {
      background: rgb(133, 132, 132);
  }
  div#scroll {
  overflow-y: scroll;
}

</style>