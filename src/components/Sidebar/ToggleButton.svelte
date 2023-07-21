<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { sidebarOpen } from '../../stores/ui/sidebar';
	import { ChevronLeft } from 'lucide-svelte';

	function toggleSidebar() {
		sidebarOpen.update((value) => !value);
	}
</script>

<button
	class={twMerge(
		'absolute right-4 top-4 cursor-pointer',
		!$sidebarOpen && 'right-0 w-full flex justify-center'
	)}
	on:click={toggleSidebar}
>
	<ChevronLeft
		class={twMerge(
			'transition-transform',
			$sidebarOpen && 'rotate-0',
			!$sidebarOpen && 'rotate-180'
		)}
		font-weight="bold"
	/>
</button>
