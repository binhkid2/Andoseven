<script lang="ts">
	import CategoryDesktop from './CategoryDesktop.svelte';
	import Cart from './SVG/Cart.svelte';
	import Favorite from './SVG/Favorite.svelte';
	import Hamburger from './SVG/Hamburger.svelte';
	import StoreName from './SVG/StoreName.svelte';
	let isMenuOpen = false;
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
	export let data :any;
	
	export let productMens = [] as Product[];
	export let productWommens = [] as Product[];
	export let productUnisexs = [] as Product[];
	function limited(title:string, maxLength:number) {
    if (title.length > maxLength) {
      return `${title.slice(0, maxLength)}...`;
    }
    return title;
  }
</script>

<div class="navbar pl-0 pr-0 bg-base-100 sticky shadow-xl top-0 z-50">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="m-0 p-0" on:click={toggleMenu}><Hamburger  /></div>
			{#if isMenuOpen}
				
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-96">

	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<li tabindex="0" class="grid grid-cols-3 py-2">
	  <a href="/category/men" class="font-bold text-lg  col-span-3 text-fuchsia-950" data-sveltekit-reload>Men</a>
	  {#each productMens.slice(0, 3) as productMen}
	  <a class="font-base text-red-500/75 text-md" href="/product/{productMen.id}" data-sveltekit-reload>{limited(productMen.title, 10)}</a>
	  {/each}
	</li>
	<li tabindex="0" class="grid grid-cols-3 py-2">
	  <a href="/category/wommen" class="font-bold text-lg col-span-3 text-fuchsia-950" data-sveltekit-reload>Wommen</a>   
	   {#each productWommens.slice(0, 3) as productWommen}
	  <a class="font-base text-red-500/75 text-md" href="/product/{productWommen.id}" data-sveltekit-reload> {limited(productWommen.title, 20)}</a>
	 {/each}
	  
	</li>
	<li tabindex="0" class="grid grid-cols-3 py-2">
		<a href="/category/unisex" class="font-bold text-lg col-span-3 text-fuchsia-950" data-sveltekit-reload>Unisex</a>   
	 {#each productUnisexs.slice(0, 3) as productUnisex }
	 <a class="font-base text-red-500/75 text-md" href="/product/{productUnisex.id}" data-sveltekit-reload>{limited(productUnisex.title, 20)}</a>
	 {/each}
	</li>
	<li tabindex="0" class="grid grid-cols-1 py-2">
	  <a class="font-semibold text-lg justify-between text-fuchsia-950" href="/about">
		About
	  </a>
	</li>
	<li tabindex="0" class="grid grid-cols-1 py-2">
	  <a class="font-semibold text-lg justify-between text-fuchsia-950" href="/contact">
		Contact
	  </a>
	</li>
  </ul>
			{/if}
		</div>
		<div class="lg:pl-5 lg:pb-2"><StoreName /></div>
	</div>
	<div class="navbar-center hidden lg:flex">
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<ul class="menu menu-horizontal" tabindex="0">
			<CategoryDesktop {productMens} {productUnisexs} {productWommens}/>
			<li><a href="/about">Về chúng tôi</a></li>
			<li><a href="/contact">Liên hệ</a></li>
			<li><a href="/faq">FAQs</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<Favorite />
		<Cart {data} />
	</div>
</div>

<style>
</style>
