<script>
	import Sidebar from '../components/Sidebar/index.svelte';
	import { chatType, ChatType } from '../stores/ui/chatType';
</script>

<div class="flex h-screen w-screen flex-row bg-zinc-900 text-white">
	<Sidebar />

	<div class="flex w-full flex-col px-12">
		{#if $chatType === null}
			<div class="flex w-full items-center justify-center text-center text-3xl">
				This is your AI Centered tool. <br />
				Please select the type of AI you want to use.
			</div>
		{/if}

		{#if $chatType === ChatType.Conversation}
			<div class=" w-full py-6">
				<h1 class="text-4xl">ConversationAI</h1>
				<h2 class="text-md text-zinc-400">Talk to me about anything!</h2>
			</div>
			<input
				class="h-12 w-full rounded-lg bg-white text-black transition-all duration-300 focus:bg-black"
			/>
		{/if}
	</div>
</div>
