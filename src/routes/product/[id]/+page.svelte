
<script lang="ts">
  import Carousel from 'svelte-carousel'
import { browser } from '$app/environment';
import { get } from "svelte/store";
import {cartItems,addToCart,removeFromCart} from "../../../cart";
	import HightLight from '../../../components/HightLight/HightLight.svelte';
/** @type {import('./$types').PageData} */
export let data: any;
const productAll : Product[] = data.products;
const product: Product = data.product;
const formatted: string = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const formattedPrice: string = `${formatted} `;
let cart = get(cartItems); // [ { id: "1", quantity: 6 }, { id: "2", quantity: 3 } ]
// id: "1"
let cartItemIndex = cart.findIndex((item) => {
return item.id === product.id;
});
let cartProduct = cart[cartItemIndex]  || {
id: product.id,
quantity: 1,
price:0,
totalPrice:0
};

let price=product.price;
let totalPrice: number = cartProduct ? cartProduct.quantity * product.price : 0;
cartItems.subscribe((newCartValue) => {
cart = newCartValue;
cartItemIndex = cart.findIndex((item) => {
  return item.id === product.id;
});
cartProduct = cart[cartItemIndex]  || {
id: product.id,
quantity: 1,
price:0,
totalPrice:0
};
totalPrice = cartProduct ? cartProduct.quantity * product.price : 0;
});

import { onMount } from 'svelte';
	import RelatedProducts from '../../../components/ProductsBanner/RelatedProducts.svelte';
	import LazyImg from '$lib/Lazy/lazyImg.svelte';
	import Seo from '$lib/Seo.svelte';

  let description = product.description;
  let description2 =product.description2;
  let showFullDescription = false;

  onMount(() => {
   
      showFullDescription = false;
   
  });
  function toggleDescription() {
    showFullDescription = !showFullDescription;
  }
</script>

<div class="pb-5">
<div class="p-6 m-auto grid grid-cols-1 md:grid-cols-2 max-w-7xl">
{#if browser}
<Carousel
autoplay
autoplayDuration={4000}
arrows={false}
autoplayProgressVisible
pauseOnFocus
>
{#if Array.isArray(product.images)}
  {#each product.images as image}
   
    <LazyImg
    src={image} alt={product.title} class="h-auto m-auto rounded-lg" />
                    
  {/each}
{:else}
  <LazyImg
  src={product.images} alt={product.title} class="h-auto m-auto rounded-lg" />
{/if}

</Carousel>
{/if}


<div class="mx-6 my-2">
    <h1 class="lg:text-4xl text-xl font-semibold pb-4">{product.title}</h1>
    <div class="lg:space-x-8">
      <div class="badge bg-blue-700 text-lg border-0 p-4">{product.categoryVN}</div>
      <div class="badge badge-secondary text-lg p-4">{formattedPrice} <span>&#8363;</span></div>
    </div>
    

    <div class="py-4">
      <p class="">{product.summary}</p>
    </div>

<div class="">
  <HightLight/>
</div>

   
   <div class="flex  my-6  ">
    <div class="  flex ">
    <div class="flex space-x-2 rounded-xl bg-gray-200 p-2 w-32 lg:w-40  justify-center">
        <button class="w-4 p-2" on:click={() =>  removeFromCart(product.id)}>-</button>
        <span class="w-4 p-2">
              {cartProduct.quantity}
        </span>
        <button class="w-4 p-2" on:click={() =>  addToCart(product.id,totalPrice,price)}>+</button>
    </div>
    
   
    <div class="  hidden md:block ">
      <a href="/checkout" class="">
        <button class="p-4 w-40 ml-10 bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-lg hover:scale-110 border-0" on:click={() => addToCart(product.id,totalPrice,price)}>
          Mua Ngay
        </button>
      </a>
    </div>
    <div class="flex justify-center ml-2 w-32 lg:hidden">
      <a href="/checkout" class="">
        <button class="p-4  bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-lg hover:scale-110 border-0" on:click={() => addToCart(product.id,totalPrice,price)}>
          Mua Ngay
        </button>
      </a>
    </div>
    </div>  
  </div>
 
 
  

        <!-- svelte-ignore a11y-no-noninteractive-tabindex 
        
        
        -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->

        <!-- ADD TO FAVIOUS FEATURE
        <a href="/product/{product.id}" data-sveltekit-reload>
            <label tabindex="0" class="btn btn-ghost btn-circle py-2 px-4 my-4" on:click={addFavourite}>
                <div class="indicator">
                    {#if isFavourite == true}
                        <svg fill="#880808" version="1.1" width="25" height="25" id="favourite" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve" stroke="#000000" stroke-width="0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_25_" d="M316.554,108.336c4.553,6.922,2.629,16.223-4.296,20.774c-3.44,2.261-6.677,4.928-9.621,7.929 c-2.938,2.995-6.825,4.497-10.715,4.497c-3.791,0-7.585-1.427-10.506-4.291c-5.917-5.801-6.009-15.298-0.207-21.212 c4.439-4.524,9.338-8.559,14.562-11.992C302.698,99.491,312.002,101.414,316.554,108.336z M447.022,285.869 c-1.506,1.536-148.839,151.704-148.839,151.704C283.994,452.035,265.106,460,245,460s-38.994-7.965-53.183-22.427L42.978,285.869 c-57.304-58.406-57.304-153.441,0-211.847C70.83,45.634,107.882,30,147.31,30c36.369,0,70.72,13.304,97.69,37.648 C271.971,43.304,306.32,30,342.689,30c39.428,0,76.481,15.634,104.332,44.021C504.326,132.428,504.326,227.463,447.022,285.869z M425.596,95.028C403.434,72.44,373.991,60,342.69,60c-31.301,0-60.745,12.439-82.906,35.027c-1.122,1.144-2.129,2.533-3.538,3.777 c-7.536,6.654-16.372,6.32-22.491,0c-1.308-1.352-2.416-2.633-3.538-3.777C208.055,72.44,178.612,60,147.31,60 c-31.301,0-60.744,12.439-82.906,35.027c-45.94,46.824-45.94,123.012,0,169.836c1.367,1.393,148.839,151.704,148.839,151.704 C221.742,425.229,233.02,430,245,430c11.98,0,23.258-4.771,31.757-13.433l148.839-151.703l0,0 C471.535,218.04,471.535,141.852,425.596,95.028z M404.169,116.034c-8.975-9.148-19.475-16.045-31.208-20.499 c-7.746-2.939-16.413,0.953-19.355,8.698c-2.942,7.744,0.953,16.407,8.701,19.348c7.645,2.902,14.521,7.431,20.436,13.459 c23.211,23.658,23.211,62.153,0,85.811l-52.648,53.661c-5.803,5.915-5.711,15.412,0.206,21.212 c2.921,2.863,6.714,4.291,10.506,4.291c3.889,0,7.776-1.502,10.714-4.497l52.648-53.661 C438.744,208.616,438.744,151.275,404.169,116.034z"></path> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g></svg>
                    {:else}
                        <svg fill="#000000" version="1.1" width="25" height="25" id="favourite" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve" stroke="#000000" stroke-width="0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_25_" d="M316.554,108.336c4.553,6.922,2.629,16.223-4.296,20.774c-3.44,2.261-6.677,4.928-9.621,7.929 c-2.938,2.995-6.825,4.497-10.715,4.497c-3.791,0-7.585-1.427-10.506-4.291c-5.917-5.801-6.009-15.298-0.207-21.212 c4.439-4.524,9.338-8.559,14.562-11.992C302.698,99.491,312.002,101.414,316.554,108.336z M447.022,285.869 c-1.506,1.536-148.839,151.704-148.839,151.704C283.994,452.035,265.106,460,245,460s-38.994-7.965-53.183-22.427L42.978,285.869 c-57.304-58.406-57.304-153.441,0-211.847C70.83,45.634,107.882,30,147.31,30c36.369,0,70.72,13.304,97.69,37.648 C271.971,43.304,306.32,30,342.689,30c39.428,0,76.481,15.634,104.332,44.021C504.326,132.428,504.326,227.463,447.022,285.869z M425.596,95.028C403.434,72.44,373.991,60,342.69,60c-31.301,0-60.745,12.439-82.906,35.027c-1.122,1.144-2.129,2.533-3.538,3.777 c-7.536,6.654-16.372,6.32-22.491,0c-1.308-1.352-2.416-2.633-3.538-3.777C208.055,72.44,178.612,60,147.31,60 c-31.301,0-60.744,12.439-82.906,35.027c-45.94,46.824-45.94,123.012,0,169.836c1.367,1.393,148.839,151.704,148.839,151.704 C221.742,425.229,233.02,430,245,430c11.98,0,23.258-4.771,31.757-13.433l148.839-151.703l0,0 C471.535,218.04,471.535,141.852,425.596,95.028z M404.169,116.034c-8.975-9.148-19.475-16.045-31.208-20.499 c-7.746-2.939-16.413,0.953-19.355,8.698c-2.942,7.744,0.953,16.407,8.701,19.348c7.645,2.902,14.521,7.431,20.436,13.459 c23.211,23.658,23.211,62.153,0,85.811l-52.648,53.661c-5.803,5.915-5.711,15.412,0.206,21.212 c2.921,2.863,6.714,4.291,10.506,4.291c3.889,0,7.776-1.502,10.714-4.497l52.648-53.661 C438.744,208.616,438.744,151.275,404.169,116.034z"></path> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g></svg>
                    {/if}
                </div>
            </label>
        </a>
      -->
   
</div>

</div>
<h2 class="px-12 text-2xl font-semibold text-blue-800">Thông tin </h2>
<div class=" space-x-2 rounded-xl py-4 px-12 m-auto">
  {#if showFullDescription}
  <p class="m-0">{description}</p>
  <p class=" ml-0 pl-0 mt-2 lg:mt-4">{description2}</p>
{:else}
  <p>{description.slice(0, 500)}...</p>

{/if}
<div class="flex justify-end">
{#if !showFullDescription}
  <button on:click={toggleDescription}><strong class="m-0 p-0  bg-gray-100 px-2 py-1 text-sm font-bold ">View More</strong></button>
{:else}
  <button on:click={toggleDescription}><strong class="m-0 p-0  bg-gray-100 px-2 py-1 text-sm font-bold">View Less</strong></button>
{/if}
</div>
</div>
</div>
<h2 class="px-12 text-2xl font-semibold text-blue-800">Sản phẩm bán chạy khác</h2>
<div class="flex flex-wrap">
  {#each productAll.slice(0, 4).sort(() => Math.random() - 0.5) as product}
    <div class="w-full lg:w-1/4 p-4 hidden md:block">
      <RelatedProducts {product} />
    </div>
  {/each}
  
  {#each productAll.slice(0, 4).sort(() => Math.random() - 0.5) as product}
    <div class="w-full md:w-1/2 lg:hidden p-4">
      <RelatedProducts {product} />
    </div>
  {/each}
</div>
<Seo  title="ANDO - nơi tinh túy nước hoa hội tụ" description="Chào mừng đến với ANDO - nơi tinh túy nước hoa hội tụ!

ANDO là một thương hiệu nước hoa danh tiếng, tạo dựng từ niềm đam mê và sự sáng tạo không ngừng. Chúng tôi tự hào là địa chỉ tin cậy cho những người yêu thích nước hoa, nơi mang đến cho bạn những trải nghiệm thú vị và tinh tế trong thế giới nước hoa." type="WebPage"/>

