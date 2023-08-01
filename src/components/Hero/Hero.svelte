<script lang="ts">
    import Carousel from 'svelte-carousel'
    import { browser } from '$app/environment';
let carousel; // for calling methods of the carousel instance

    </script>

{#if browser}
<Carousel
  autoplay
  autoplayDuration={4000}
  autoplayProgressVisible
  arrows={false}
  
>
<!-- Hero1 -->
<div class="hero bg-fixed bg-center bg-cover" style='background-image: url("https://images.unsplash.com/photo-1495085461086-ae0ad0a8fd74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"); min-height: 100vh'>
    <div class="hero-content grid grid-cols-1 md:grid-cols-2 lg:flex-row-reverse">
        <div class="p-10 ml-2 rounded-3xl bg-opacity-100 relative">
            <h1 class="mb-5 text-5xl font-bold">Welcome to  <em class="font-extrabold text-transparent text-7xl md:text-9xl bg-clip-text bg-gradient-to-r from-red-300 to-red-700">ANDO</em></h1>
            <p class="mb-5 text-3xl">Top nhà bán lẻ nước hoa hàng đầu 2023</p>
            <a class="btn bg-gradient-to-r from-red-300 to-red-700 border-0 rounded-lg hover:scale-110" href="/products">Tất cả sản phẩm</a>
            
        </div>
        <div />
    </div>
</div>
<!-- Hero2 -->
<div class="hero bg-fixed bg-center bg-cover" style='background-image: url("https://images.unsplash.com/photo-1495085461086-ae0ad0a8fd74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"); min-height: 100vh'>
    <div class="hero-content grid grid-cols-1 md:grid-cols-2 lg:flex-row-reverse">
        <div class="p-10 ml-2 rounded-3xl bg-opacity-100 relative">
            <h1 class="mb-5 text-5xl font-bold">  Welcome to     <em class="font-extrabold text-transparent text-7xl md:text-9xl bg-clip-text bg-gradient-to-r from-red-300 to-red-700">Ando</em></h1>
            <p class="mb-5 text-3xl">Sản phẩm dành riêng cho phái mạnh</p>
            <a class="btn bg-gradient-to-r from-red-300 to-red-700 border-0 rounded-lg hover:scale-110" href="/category/men">Sản phẩm Nam</a>
            
        </div>
        <div />
    </div>
</div>
<!-- Hero3 -->
<div class="hero bg-fixed bg-center bg-cover" style='background-image: url("https://images.unsplash.com/photo-1596713907713-e2595427fd3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"); min-height: 100vh'>
    <div class="hero-content grid grid-cols-1 md:grid-cols-2 lg:flex-row-reverse">
        <div class="p-10 ml-2 rounded-3xl bg-opacity-100 relative">
            <h1 class="mb-5 text-5xl font-bold">Welcome to <em class="font-extrabold text-transparent text-7xl md:text-9xl bg-clip-text bg-gradient-to-r from-red-300 to-red-700">ANDO</em></h1>
            <p class="mb-5 text-3xl">Sản phẩm dành cho phái nữ</p>
            <a class="btn bg-gradient-to-r from-red-300 to-red-700 border-0 rounded-lg hover:scale-110" href="/category/wommen">Sản phẩm Nữ</a>
            
        </div>
        <div />
    </div>
</div>
<!-- Hero 4-->
<div class="hero bg-fixed bg-center bg-cover" style='background-image: url("https://images.unsplash.com/photo-1580215045854-a9ef1eac4e81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"); min-height: 100vh'>
    <div class="hero-content grid grid-cols-1 md:grid-cols-2 lg:flex-row-reverse">
        <div class="p-10 ml-2 rounded-3xl bg-opacity-100 relative">
            <h1 class="mb-5 text-5xl font-bold">Welcome to <em class="font-extrabold text-transparent text-7xl md:text-9xl bg-clip-text bg-gradient-to-r from-red-300 to-red-700">ANDO</em></h1>
            <p class="mb-5 text-3xl">Sản phẩm không phân biệt giới tính</p>
            <a class="btn bg-gradient-to-r from-red-300 to-red-700 border-0 rounded-lg hover:scale-110" href="/category/unisex">Sản phẩm Unisex</a>
            
        </div>
        <div />
    </div>
</div>
</Carousel>
{/if}
