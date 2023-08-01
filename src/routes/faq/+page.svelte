<script lang="ts">
	import Question from '$lib/utils/Question.svelte';
    import data from '$lib/utils/data.json';
    import womanImageMobile from '$lib/assets/illustration-woman-online-mobile.svg';
	import womanImageDesktop from '$lib/assets/illustration-woman-online-desktop.svg';
	import boxImageDesktop from '$lib/assets/illustration-box-desktop.svg';
	import bgPatternMobile from '$lib/assets/bg-pattern-mobile.svg';
	import bgPatternDesktop from '$lib/assets/bg-pattern-desktop.svg';
	import Seo from '$lib/Seo.svelte';
</script>
<div class="p-5">
<div class="relative">
	<div class="bg-white rounded px-6 py-12 lg:px-24 lg:py-[60px] lg:overflow-hidden shadow">
		<div class="relative pb-[80px] lg:hidden">
			<img
				src={womanImageMobile}
				alt="an animated person operating a desktop computer with touch gesture"
				class="absolute -top-[157px] mx-auto inset-0 w-[240px] z-10"
			/>
			<img src={bgPatternMobile} alt="" class="absolute mx-auto inset-0 -top-[48px] w-[240px]" />
		</div>

		<div class="hidden lg:block relative">
			<img
				src={womanImageDesktop}
				alt="an animated person operating a desktop computer with touch gesture"
				class="absolute w-[470px] -left-[175px] z-10"
			/>
			<img src={bgPatternDesktop} alt="" class="absolute max-w-none -left-[670px] -top-[375px]" />
		</div>

		<section class="lg:w-1/2 ml-auto mr-0">
			<h1
				class="text-very-dark-desaturated-blue text-xl uppercase font-bold text-center lg:text-left"
			>
				faq
			</h1>
			{#each data as { question, answer }, index}
				<Question {question} {answer} id={index.toString()} />
			{/each}
		</section>
	</div>
	<img
		src={boxImageDesktop}
		alt=""
		class="hidden lg:block absolute -left-[93px] top-[200px] z-20"
	/>
</div>
</div>
<Seo  title="ANDO - Câu hỏi thường gặp" description="Chào mừng đến với ANDO - nơi tinh túy nước hoa hội tụ!

ANDO là một thương hiệu nước hoa danh tiếng, tạo dựng từ niềm đam mê và sự sáng tạo không ngừng. Chúng tôi tự hào là địa chỉ tin cậy cho những người yêu thích nước hoa, nơi mang đến cho bạn những trải nghiệm thú vị và tinh tế trong thế giới nước hoa." type="WebPage"/>