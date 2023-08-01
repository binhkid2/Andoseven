<script>
	import LazyImg from '$lib/Lazy/lazyImg.svelte';

	import Seo from '$lib/Seo.svelte';
</script>

<div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
	<div class="lg:w-10/12 w-full">
		<p
			class="font-normal text-sm leading-3 text-indigo-700 dark:text-indigo-500 hover:text-indigo-800 cursor-pointer"
		>
			Về chúng tôi
		</p>
		<h2
			class="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 dark:text-white lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2"
		>
			Chào mừng đến với ANDO - Nguồn cảm hứng của nước hoa đẳng cấp!
		</h2>
		<p class="font-normal text-base leading-6 text-gray-600 dark:text-white mt-6">
			ANDO là một thương hiệu nước hoa uy tín mang đến cho bạn những trải nghiệm thú vị và mê hoặc
			từ những hương thơm tinh tế. Với sứ mệnh truyền cảm hứng và làm thăng hoa cái đẹp bên trong
			của mỗi người, ANDO xây dựng các tuyệt tác nước hoa độc đáo, phản ánh cái tôi và phong cách cá
			nhân của bạn.
		</p>
	</div>

	<div class="lg:mt-14 sm:mt-10 mt-12">
		<img
			class="lg:block hidden w-full"
			src="https://i.ibb.co/GvwJnvn/Group-736.png"
			alt="Group of people Chilling"
		/>
		<img
			class="lg:hidden sm:block hidden w-full"
			src="https://i.ibb.co/5sZTmHq/Rectangle-116.png"
			alt="Group of people Chilling"
		/>
		<img
			class="sm:hidden block w-full"
			src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png"
			alt="Group of people Chilling"
		/>
	</div>

	<div class="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
		<div class="w-full xl:w-5/12 lg:w-6/12">
			<h2
				class="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white"
			>
				Lời tựa
			</h2>
			<p class="font-normal text-base leading-6 text-gray-600 dark:text-white mt-4">
				Với sự kết hợp tinh tế giữa nghệ thuật và khoa học, ANDO tạo ra những hương nước hoa tuyệt
				đẹp với chất lượng vượt trội. Chúng tôi lựa chọn những nguyên liệu tốt nhất từ khắp nơi trên
				thế giới, từ các loại hoa quý hiếm đến các loại gỗ quý và các thành phần tự nhiên đặc biệt.
				Mỗi chai nước hoa ANDO đều mang trong mình tinh hoa tự nhiên của sự hoàn hảo và sự tinh tế
				trong từng giọt hương.
			</p>
			<p class="font-normal text-base leading-6 text-gray-600 dark:text-white mt-6">
				Với bộ sưu tập đa dạng và phong phú, ANDO có thể đáp ứng sở thích của mọi người. Cho dù bạn
				đang tìm kiếm một hương thơm nhẹ nhàng và tinh tế cho một dịp đặc biệt, hay muốn khám phá
				một mùi hương mạnh mẽ và đầy cá tính, ANDO sẽ mang đến cho bạn sự lựa chọn hoàn hảo.
			</p>
		</div>
		<div class="lg:flex items-center w-full lg:w-1/2">
			<!-- svelte-ignore a11y-media-has-caption -->
			<video controls>
				<source
					src="https://res.cloudinary.com/binkk/video/upload/v1685344345/ando/ando-video_muudcv.mov"
					type="video/webm"
				/>
			</video>
		</div>
	</div>
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
<Seo
	title="ANDO - Về chúng tôi"
	description="Chào mừng đến với ANDO - nơi tinh túy nước hoa hội tụ!

ANDO là một thương hiệu nước hoa danh tiếng, tạo dựng từ niềm đam mê và sự sáng tạo không ngừng. Chúng tôi tự hào là địa chỉ tin cậy cho những người yêu thích nước hoa, nơi mang đến cho bạn những trải nghiệm thú vị và tinh tế trong thế giới nước hoa."
	type="WebPage"
/>
