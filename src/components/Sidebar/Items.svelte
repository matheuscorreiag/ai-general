<script lang="ts">
	import { Home, Star, Sun } from 'lucide-svelte';
	import { twMerge } from 'tailwind-merge';
	import { sidebarOpen } from '../../stores/ui/sidebar';
</script>

<div class="flex flex-row items-center py-4 px-2 space-x-8 cursor-pointer hover:bg-zinc-700">
	<Home />
	<h1 class={twMerge('hidden', $sidebarOpen && 'block')}>Home</h1>
</div>
<div class="flex flex-row py-4 px-2 space-x-8 cursor-pointer hover:bg-zinc-700">
	<Sun />
	<h1 class={twMerge('hidden', $sidebarOpen && 'block')}>Sun</h1>
</div>
<div class="flex flex-row py-4 px-2 space-x-8 cursor-pointer hover:bg-zinc-700">
	<Star />
	<h1 class={twMerge('hidden', $sidebarOpen && 'block')}>Star</h1>
</div>
