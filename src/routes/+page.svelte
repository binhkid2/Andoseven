<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: any;
	const products: Product[] = data.products;
	import Seo from '$lib/Seo.svelte';
	import Banner from '../components/Banner/Banner.svelte';
	import Carousel from '../components/Carousel/Carousel.svelte';
	import Collection from '../components/Collections/Collection.svelte';
	import Footer from '../components/Footer/Footer.svelte';
	import Hero from '../components/Hero/Hero.svelte';
	import Social from '../components/Social/Social.svelte';
</script>
<div><Hero /></div>
<div><Carousel /></div>
<div><Collection /></div>
<div><Banner /></div>
<div><Social /></div>
<Seo  title="ANDO - nơi tinh túy nước hoa hội tụ" description="Chào mừng đến với ANDO - nơi tinh túy nước hoa hội tụ!

ANDO là một thương hiệu nước hoa danh tiếng, tạo dựng từ niềm đam mê và sự sáng tạo không ngừng. Chúng tôi tự hào là địa chỉ tin cậy cho những người yêu thích nước hoa, nơi mang đến cho bạn những trải nghiệm thú vị và tinh tế trong thế giới nước hoa." type="WebPage"/>
<style>
</style>
