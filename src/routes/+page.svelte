<script lang="ts">
	import Sidebar from '../components/Sidebar/index.svelte';
	import ConversationChat from '../components/Chats/ConversationChat/index.svelte';
	import ImageChat from '../components/Chats/ImageChat/index.svelte';
	import SongChat from '../components/Chats/SongChat/index.svelte';

	import { chatType, ChatType } from '../stores/ui/chatType';
</script>

<div class="flex h-screen w-screen flex-col bg-zinc-900 pb-10 pt-12 text-white sm:flex-row">
	<Sidebar />

	{#if $chatType === null}
		<div class="flex h-full w-full items-center justify-center text-center text-3xl">
			This is your AI Centered tool. <br />
			Please select the type of AI you want to use.
		</div>
	{:else}
		<div class="flex w-full flex-col px-6 sm:px-12">
			{#if $chatType === ChatType.Conversation}
				<ConversationChat />
			{/if}
			{#if $chatType === ChatType.Image}
				<ImageChat />
			{/if}
			{#if $chatType === ChatType.Song}
				<SongChat />
			{/if}
		</div>
	{/if}
</div>
