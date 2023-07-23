<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { sidebarOpen } from '../../stores/ui/sidebar';
	import ToggleButton from './ToggleButton.svelte';
	import SidebarMenuItems from './SidebarMenuItems.svelte';
</script>

<div
	class={twMerge(
		'relative mx-4 mb-10 rounded-md bg-zinc-800 shadow-lg duration-500 ease-in-out sm:mb-0',
		$sidebarOpen && 'h-72 sm:h-auto sm:w-60',
		!$sidebarOpen && 'min-h-[60px]  overflow-hidden sm:h-auto sm:w-20'
	)}
>
	<div class="flex w-full flex-col pt-4">
		<div
			class={twMerge(
				'pb-4 pl-7 text-lg opacity-100 transition-opacity duration-200 ease-in-out',
				!$sidebarOpen && 'sm:opacity-0'
			)}
		>
			<h1>AI.General</h1>
		</div>
		<ToggleButton />

		<div class="h-[2px] bg-zinc-900" />
		<SidebarMenuItems />
	</div>
</div>
