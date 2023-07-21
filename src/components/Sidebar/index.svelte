<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { sidebarOpen } from '../../stores/ui/sidebar';
	import ToggleButton from './ToggleButton.svelte';
	import SidebarMenuItems from './SidebarMenuItems.svelte';
</script>

<div
	class={twMerge(
		'relative h-screen border-r border-r-zinc-600 duration-500 ease-in-out',
		$sidebarOpen && 'w-72',
		!$sidebarOpen && 'w-10'
	)}
>
	<ToggleButton />

	<div class="flex h-full flex-col py-12">
		<SidebarMenuItems />
	</div>
</div>
