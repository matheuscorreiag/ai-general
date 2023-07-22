<script lang="ts">
	import { Home, Sun, Star } from 'lucide-svelte';
	import { ChatType, chatType } from '../../stores/ui/chatType';
	import { sidebarOpen } from '../../stores/ui/sidebar';

	export const menuOptions = [
		{ label: 'ConversationAI', icon: Home, type: ChatType.Conversation },
		{ label: 'ImageAI', icon: Sun, type: ChatType.Image },
		{ label: 'SongAI', icon: Star, type: ChatType.Song }
	];

	function selectChatType(type: ChatType) {
		if (type !== $chatType) {
			sidebarOpen.update(() => false);
		}

		chatType.update(() => type);
	}
</script>

{#each menuOptions as option}
	<button
		class="flex cursor-pointer flex-row items-center overflow-hidden rounded-md px-6 py-5 hover:bg-zinc-700"
		on:click={() => selectChatType(option.type)}
	>
		<div class="mr-4">
			<svelte:component this={option.icon} />
		</div>
		<div class="line-clamp-1 text-sm">
			<h1 class="w-fit">{option.label}</h1>
		</div>
	</button>
{/each}
