<script lang="ts">
	import { ChevronLeft } from 'lucide-svelte';
	import { twMerge } from 'tailwind-merge';
	import { sidebarOpen } from '../../stores/ui/sidebar';

	function toggleSidebar() {
		sidebarOpen.update((value) => !value);
	}
</script>

<div
	class={twMerge(
		'border-r border-r-zinc-600 h-screen relative ease-in-out duration-500',
		$sidebarOpen && 'w-72',
		!$sidebarOpen && 'w-10'
	)}
>
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

	<div class={twMerge('h-full flex flex-col py-12', !$sidebarOpen && 'items-center')}>
		<slot />
	</div>
</div>
