<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { sidebarOpen } from '../../stores/ui/sidebar';
	import { ChevronLeft } from 'lucide-svelte';

	function toggleSidebar() {
		sidebarOpen.update((value) => !value);
	}
</script>

<button on:click={toggleSidebar}>
	<div
		class={twMerge(
			'absolute right-4 top-4',
			!$sidebarOpen && 'sm:right-0 sm:flex sm:w-full sm:items-center sm:justify-center'
		)}
	>
		<ChevronLeft
			font-weight="bold"
			class={twMerge(
				'-rotate-90 text-center duration-200 ease-in-out sm:-rotate-180',
				$sidebarOpen && 'rotate-90 sm:-rotate-0'
			)}
		/>
	</div>
</button>
