<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
 const products = data.products
 const  productMens  = data.productMens;
	const  productWommens  = data.productWommens;
	const  productUnisexs = data.productUnisexs;
    import "../app.css";
	import Footer from "../components/Footer/Footer.svelte";
	import NavBar from "../components/Navbar/Navbar.svelte";
	import Seo from '$lib/Seo.svelte';
  </script>
  <NavBar {data}  {productMens} {productUnisexs} {productWommens}/>

  <slot />
  <Footer/>