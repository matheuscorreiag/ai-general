<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { sidebarOpen } from '../../stores/ui/sidebar';
	import ToggleButton from './ToggleButton.svelte';
	import SidebarMenuItems from './SidebarMenuItems.svelte';
</script>

<div
	class={twMerge(
		'relative mb-10 ml-4 rounded-md bg-zinc-800 shadow-lg duration-500 ease-in-out',
		$sidebarOpen && 'w-60',
		!$sidebarOpen && 'w-20'
	)}
>
	<div
		class={twMerge(
			'pb-4 pl-7 pt-4 text-lg opacity-100 transition-opacity duration-100 ease-in-out',
			!$sidebarOpen && 'opacity-0'
		)}
	>
		<h1>AI.General</h1>
	</div>

	<div class="h-[2px] bg-zinc-900" />

	<ToggleButton />

	<div class="flex h-full flex-col pt-4">
		<SidebarMenuItems />
	</div>
</div>
