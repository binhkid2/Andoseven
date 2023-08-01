<script>
	import LazyImg from '$lib/Lazy/lazyImg.svelte';
	import Seo from '$lib/Seo.svelte';
    import { onMount } from 'svelte';



    onMount(() => {
      // Clear local storage
      localStorage.clear();
      
    });
   

  </script>
  
  
  <!-- component -->
<div class="bg-gray-100 ">
  <div class="p-6  md:mx-auto">
    <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
        <path fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
        </path>
    </svg>
    <div class="text-center">
        <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
        <p class="text-gray-600 my-2">Cảm ơn đã đặt hàng.Chúng tôi có thể sẽ liên lạc lại nếu cần.</p>
         <p> Đơn hàng sẽ được gửi sau 1-3 ngày</p>
        <p> Xin cảm ơn rất nhiều!  </p>
        <div class="py-10 text-center">
            <a href="/" data-sveltekit-reload class="px-12 bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-lg hover:scale-110 border-0 py-3">
                Về trang chủ 
           </a>
        </div>
        <div class="grid grid-cols-3 gap-2 px-6 pb-7 lg:px-20 ">
          <LazyImg
            src="https://res.cloudinary.com/binkk/image/upload/v1685344320/ando/ando16_g50yez.jpg"
            alt="banner"
            class="h-full w-full object-contain object-center"
          />
          <LazyImg
            src="https://res.cloudinary.com/binkk/image/upload/v1685344318/ando/ando14_fezchr.jpg"
            alt="banner"
            class="h-full w-full object-contain object-center"
          />
          <LazyImg
            src="https://res.cloudinary.com/binkk/image/upload/v1685344312/ando/ando13_qe3fea.jpg"
            alt="banner"
            class="h-full w-full object-contain object-center"
          />
        </div>
    </div>
</div>
</div>

<Seo  title="ANDO - Thank you for shopping with us" description="Chào mừng đến với ANDO - nơi tinh túy nước hoa hội tụ!

ANDO là một thương hiệu nước hoa danh tiếng, tạo dựng từ niềm đam mê và sự sáng tạo không ngừng. Chúng tôi tự hào là địa chỉ tin cậy cho những người yêu thích nước hoa, nơi mang đến cho bạn những trải nghiệm thú vị và tinh tế trong thế giới nước hoa." type="WebPage"/>