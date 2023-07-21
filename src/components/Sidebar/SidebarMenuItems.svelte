<script lang="ts">
	import { Home, Sun, Star } from 'lucide-svelte';

	const menuOptions = [
		{ label: 'ConversationAI', icon: Home },
		{ label: 'ImageAI', icon: Sun },
		{ label: 'SongAI', icon: Star }
	];
</script>

{#each menuOptions as option}
	<div
		class="flex flex-row py-4 pl-2 items-center cursor-pointer hover:bg-zinc-700 overflow-hidden"
	>
		<div class="mr-4">
			<svelte:component this={option.icon} />
		</div>
		<div class="line-clamp-1">
			<h1 class="w-fit">{option.label}</h1>
		</div>
	</div>
{/each}
