<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { sidebarOpen } from '../../stores/ui/sidebar';
	import ToggleButton from './ToggleButton.svelte';
	import SidebarMenuItems from './SidebarMenuItems.svelte';
</script>

<div
	class={twMerge(
		'relative h-screen border-r border-r-zinc-600 duration-500 ease-in-out',
		$sidebarOpen && 'w-60',
		!$sidebarOpen && 'w-10'
	)}
>
	<div
		class={twMerge(
			'pb-4 pl-12 pt-4 text-lg opacity-100 transition-opacity duration-100 ease-in-out',
			!$sidebarOpen && 'opacity-0	'
		)}
	>
		<h1>AI.General</h1>
	</div>

	<div class="h-[1px] w-full border-b-zinc-300 bg-zinc-500" />
	<ToggleButton />

	<div class="flex h-full flex-col pt-4">
		<SidebarMenuItems />
	</div>
</div>
