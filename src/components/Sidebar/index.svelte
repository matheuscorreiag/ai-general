<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { sidebarOpen } from '../../stores/ui/sidebar';
	import ToggleButton from './ToggleButton.svelte';
	import SidebarMenuItems from './SidebarMenuItems.svelte';
</script>

<div
	class={twMerge(
		'border-r border-r-zinc-600 h-screen relative ease-in-out duration-500',
		$sidebarOpen && 'w-72',
		!$sidebarOpen && 'w-10'
	)}
>
	<ToggleButton />

	<div class="h-full flex flex-col py-12">
		<SidebarMenuItems />
	</div>
</div>
