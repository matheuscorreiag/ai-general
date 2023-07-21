<script lang="ts">
	import { Send } from 'lucide-svelte';
	import Title from '../ImageChat/Title.svelte';

	let isLoading = false;
	let inputValue = '';
	let images: { url: string }[] = [];

	async function submit() {
		isLoading = true;
		const response = await fetch('https://api.openai.com/v1/images/generations', {
			method: 'POST',
			headers: {
				Authorization: `Bearer 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`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				prompt: inputValue,
				n: 3,
				size: '1024x1024'
			})
		}).then((response) => response.json());

		isLoading = false;

		images = response.data;
	}
</script>

<Title />

<div class="relative">
	<input
		class="h-12 w-full rounded-lg bg-zinc-800 px-4 outline-none transition-all duration-300 focus:ring-2"
		bind:value={inputValue}
	/>

	<button class="group absolute right-5 top-4 cursor-pointer" type="submit" on:click={submit}>
		<Send size={18} class="transition-opacity duration-200 group-hover:opacity-60" />
	</button>
</div>

{#if isLoading}
	<div class="mt-12 flex w-full animate-pulse items-center justify-center">
		Generating images...
	</div>
{:else}
	<div class="mt-12 grid grid-cols-3 gap-x-4">
		{#each images as image}
			<img src={image.url} alt="an image" />
		{/each}
	</div>
{/if}
