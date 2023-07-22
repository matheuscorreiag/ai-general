<script>
	import { useChat } from 'ai/svelte';
	import Message from './Message.svelte';
	import Title from './Title.svelte';

	const { input, handleSubmit, messages } = useChat();

	import { Send } from 'lucide-svelte';
</script>

<div class="h-full">
	<Title />

	<div class="relative">
		<form on:submit|preventDefault={handleSubmit}>
			<input
				class="h-12 w-full rounded-lg bg-zinc-800 px-4 outline-none transition-all duration-300 focus:ring-2"
				bind:value={$input}
			/>

			<button class="group absolute right-5 top-4 cursor-pointer" type="submit">
				<Send size={18} class="transition-opacity duration-200 group-hover:opacity-60" />
			</button>
		</form>
	</div>

	<div
		class="scrollbar-thumb-rounded mt-10 h-4/6 flex-col space-y-12 overflow-y-scroll rounded-lg bg-zinc-800 p-10 scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-900"
	>
		{#each $messages as message}
			<Message message={message.content} userType={message.role} />
		{/each}
	</div>
</div>
