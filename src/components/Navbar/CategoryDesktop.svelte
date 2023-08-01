<script lang="ts">
	import LazyImg from "$lib/Lazy/lazyImg.svelte";

  export let productMens : Product[]
	export let productWommens  : Product[]
	export let productUnisexs: Product[]
  function limited(title:string, maxLength:number) {
    if (title.length > maxLength) {
      return `${title.slice(0, maxLength)}...`;
    }
    return title;
  }
</script>

<li class="hoverable hover:bg-gradient-to-r from-red-300 to-red-700 hover:text-white">
  <a href="/products" class="p-0"> <div class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base hover:bg-gradient-to-r from-red-300 to-red-700 hover:text-white">
      Sản phẩm
    </div></a>
    <div class="p-6 mega-menu mb-16 mt-16 sm:mb-0 shadow-xl bg-gradient-to-r from-red-300 to-red-700">
      <div class="grid grid-cols-5 m-auto">
        <LazyImg src="https://res.cloudinary.com/binkk/image/upload/v1685267800/aando_oog3iu.png" alt="nav mens img" class="rounded-full w-48 h-48" />
        <div>
          <h2 class="font-bold text-4xl flex pb-4">Category sản phẩm</h2>
          <p class="font-base text-xl w-52">Ando-Tinh tế trên từng note hương...</p>
        </div>
        <div class="grid grid-cols-1 p-2">
          <div class="font-semibold text-4xl flex">
            <svg fill="#000000" class="h-8 mb-3 mr-3 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepoEditor"> <path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path> </g></svg>
            <a href="/category/men" data-sveltekit-reload>Nam</a>
          </div> 
           {#each productMens.slice(0, 3) as productMen}
          <a class="font-base  text-xl"  href="/product/{productMen.id}" data-sveltekit-reload> {limited(productMen.title, 20)} </a>
          {/each}
        </div>
        <div class="grid grid-cols-1 p-2">
          <div class="font-semibold text-4xl flex">
            <svg class="h-8 mb-3 mr-3 fill-current text-white" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepoEditor"> <path d="M12.09,21.925a9.846,9.846,0,0,1-3.838-.747A9.673,9.673,0,0,1,3.005,15.93,10.034,10.034,0,0,1,2.244,12a10.425,10.425,0,0,1,.695-3.8,9.606,9.606,0,0,1,2-3.169A9.269,9.269,0,0,1,8.1,2.862a10.605,10.605,0,0,1,4.175-.787,10.516,10.516,0,0,1,4.334.827A8.437,8.437,0,0,1,19.64,5.119a8.622,8.622,0,0,1,1.707,3.1,9.263,9.263,0,0,1,.377,3.487,5.809,5.809,0,0,1-1.3,3.6A3.6,3.6,0,0,1,17.7,16.473a3.628,3.628,0,0,1-2.162-.609,2.82,2.82,0,0,1-1.119-1.694l.5.106a2.582,2.582,0,0,1-1.3,1.3A4.37,4.37,0,0,1,11.746,16,3.681,3.681,0,0,1,9.88,15.54a3.2,3.2,0,0,1-1.237-1.271A3.843,3.843,0,0,1,8.2,12.4a3.88,3.88,0,0,1,.456-1.926A3.191,3.191,0,0,1,9.919,9.214a3.792,3.792,0,0,1,1.853-.443,4.716,4.716,0,0,1,1.767.364,2.622,2.622,0,0,1,1.383,1.3l-.5.5V9.461a.4.4,0,0,1,.4-.4h.232a.4.4,0,0,1,.4.4v3.518a2.723,2.723,0,0,0,.529,1.674,2.173,2.173,0,0,0,1.853.708,2.281,2.281,0,0,0,1.323-.41,2.938,2.938,0,0,0,.967-1.178,4.947,4.947,0,0,0,.437-1.852,9.439,9.439,0,0,0-.417-3.574A7.285,7.285,0,0,0,18.5,5.588a7.424,7.424,0,0,0-2.679-1.78,9.605,9.605,0,0,0-3.547-.622,9.041,9.041,0,0,0-3.758.741,8.252,8.252,0,0,0-2.773,2,8.8,8.8,0,0,0-1.72,2.838,9.27,9.27,0,0,0-.589,3.262,8.568,8.568,0,0,0,.682,3.408A8.951,8.951,0,0,0,6,18.24a8.707,8.707,0,0,0,2.785,1.892,8.515,8.515,0,0,0,3.389.682,9.851,9.851,0,0,0,2.679-.378,8.451,8.451,0,0,0,2-.831.4.4,0,0,1,.553.158l.1.192a.4.4,0,0,1-.141.526,9.832,9.832,0,0,1-2.391,1.04A10.5,10.5,0,0,1,12.09,21.925ZM11.8,14.859a2.469,2.469,0,0,0,1.786-.649,2.427,2.427,0,0,0,.675-1.839,2.414,2.414,0,0,0-.7-1.886A2.532,2.532,0,0,0,11.8,9.856a2.482,2.482,0,0,0-1.839.649,2.523,2.523,0,0,0-.65,1.866,2.4,2.4,0,0,0,.682,1.865A2.574,2.574,0,0,0,11.8,14.859Z"></path> </g></svg>
            <a href="/category/wommen" data-sveltekit-reload>Nữ</a>
          </div>
          {#each productWommens.slice(0, 3) as productWommen}
          <a class="font-base  text-xl"  href="/product/{productWommen.id}" data-sveltekit-reload> {limited(productWommen.title, 20)} </a>
          {/each}
        </div>
        <div class="grid grid-cols-1 p-2">
          <div class="font-semibold text-4xl flex">
            <svg fill="#000000" class="h-8 mb-3 mr-3 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepoEditor" data-name="Box List"> <path d="M6.562,8.062h-2a1.5,1.5,0,0,1-1.5-1.5v-2a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,8.062Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5Z"></path> <path d="M6.562,20.938h-2a1.5,1.5,0,0,1-1.5-1.5v-2a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,20.938Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5Z"></path> <path d="M6.562,14.5h-2a1.5,1.5,0,0,1-1.5-1.5V11a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,14.5Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5V11a.5.5,0,0,0-.5-.5Z"></path> <path d="M20.438,6.062h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"></path> <path d="M20.438,12.5h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"></path> <path d="M20.438,18.935h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z"></path> </g></svg>
            <a href="/category/unisex" data-sveltekit-reload>Unisex</a>
          </div>
          {#each productUnisexs.slice(0, 3) as productUnisex}
          <a class="font-base  text-xl"  href="/product/{productUnisex.id}" data-sveltekit-reload> {limited(productUnisex.title, 20)} </a>
          {/each}
        </div>
      </div>
    </div>
  </li>
  <style>
    	 .hoverable:hover .mega-menu {
    display: block;
  }
  .hoverable {
    position: static;
  }
  .mega-menu {
    display: none;
    left: 0;
    position: absolute;
    text-align: left;
    width: 100%;
  }

  </style>