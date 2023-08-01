<script lang="ts">
	import iconArrow from '$lib/utils/icon-arrow-down.svg';
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import { onMount } from 'svelte/internal';

	export let question: string;
	export let answer: string;
	export let id: string;

	let button: HTMLButtonElement;
	let showAnswer = false;

	onMount(() => {
		if ($page.url.hash.substring(1) === id) {
			handleShowAnswer();
			button.focus();
		}
	});

	function handleShowAnswer() {
		showAnswer = !showAnswer;
		button.setAttribute('aria-expanded', showAnswer.toString());
		history.pushState(null, '', `#${id}`);
	}
</script>

<div class="border-b border-light-grayish-blue">
	<h2 {id} class="text-base text-very-dark-grayish-blue hover:text-soft-red">
		<button
			aria-expanded="false"
			bind:this={button}
			on:click={handleShowAnswer}
			class="w-full flex justify-between items-center group pt-[18px] pb-4 lg:pr-4
      aria-expanded:font-bold aria-expanded:text-very-dark-desaturated-blue"
			>{question}
			<img
				src={iconArrow}
				alt=""
				class="group-aria-expanded:rotate-180 transition-transform duration-500"
			/>
		</button>
	</h2>
	{#if showAnswer}
		<div transition:slide class="pb-4">
			<p class="text-sm text-dark-grayish-blue">{answer}</p>
		</div>
	{/if}
</div>