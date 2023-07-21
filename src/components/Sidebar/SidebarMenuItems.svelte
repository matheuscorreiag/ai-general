<script lang="ts">
	import { Home, Sun, Star } from 'lucide-svelte';
	import { ChatType, chatType } from '../../stores/ui/chatType';

	export const menuOptions = [
		{ label: 'ConversationAI', icon: Home, type: ChatType.Conversation },
		{ label: 'ImageAI', icon: Sun, type: ChatType.Image },
		{ label: 'SongAI', icon: Star, type: ChatType.Song }
	];

	function selectChatType(type: ChatType) {
		chatType.update(() => type);
	}
</script>

{#each menuOptions as option}
	<button
		class="flex flex-row py-4 pl-2 items-center cursor-pointer hover:bg-zinc-700 overflow-hidden"
		on:click={() => selectChatType(option.type)}
	>
		<div class="mr-4">
			<svelte:component this={option.icon} />
		</div>
		<div class="line-clamp-1">
			<h1 class="w-fit">{option.label}</h1>
		</div>
	</button>
{/each}
