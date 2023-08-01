<script>

	import LazyImg from "$lib/Lazy/lazyImg.svelte";

</script>
<div class="2xl:container 2xl:mx-auto ">
    <div class="bg-gray-50 dark:bg-gray-800 grid lg:grid-cols-4 grid-cols-2   gap-8 ">
        <!-- Delivery grid Card -->
        <div class="">
            <div class="h-20">
            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg1.svg" alt="delivery">
            <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg1dark.svg" alt="delivery">
            <h3 class="text-xl leading-5 dark:text-white font-semibold text-gray-800  mt-4">Giao hàng nhanh</h3>
            </div>
           <div class=""> <p class="text-base hidden md:block leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">Cam kết sản phẩm đến tay khách hàng sau 1-3 ngày </p></div>
        </div>

        <!-- customer Grid Card -->

        <div class="">
           <div class="h-20"> 
            <LazyImg class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg2.svg" alt="Customer Care"/>
            <LazyImg class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg2dark.svg" alt="Customer Care"/>
            <h3 class="text-xl leading-5 dark:text-white font-semibold text-gray-800 mt-4">Hỗ trợ 24/7</h3>
            </div>
           <div class=""> <p class="text-base hidden md:block leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">Hỗ trợ quý khách 24/7 qua chat và email</p></div>
        </div>

        <!-- Recycle Grid Card -->

        <div class="">
            <div class="h-20">
                 <LazyImg class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg3.svg" alt="Recycle"/>
                <LazyImg class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg3dark.svg" alt="Recycle"/>
                <h3 class="mt-4 text-xl leading-5 dark:text-white font-semibold text-gray-800  ">Uy tín</h3>
            </div>
            <div class=""> 
                 <p class="text-base hidden md:block leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 ">Sản phẩm của chúng tôi đều qua xét nghiệm của Bộ y tế,có giấy tờ chứng thực</p>
              </div>         
        </div>

        <!-- Secure Payment Card -->

        <div class="">
          <div class="h-20"> 
            <LazyImg class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg4.svg" alt="Secure Payment"/>
            <LazyImg class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg4dark.svg" alt="Secure Payment"/>
            <h3 class="text-xl leading-5 dark:text-white font-semibold text-gray-800 mt-4">Bảo đảm</h3>
            </div>
           <div class=""><p class="text-base hidden md:block leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">Thanh toán bảo đảm nhanh gọn,uy tín </p></div>
        </div>
    </div>
</div>
