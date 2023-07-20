<script>
	import { Home, Star, Sun } from 'lucide-svelte';
	import Sidebar from '../components/Sidebar/index.svelte';
	import Items from '../components/Sidebar/Items.svelte';
</script>

<div class="bg-zinc-900 w-screen h-screen text-white">
	<Sidebar>
		<Items/>
	</Sidebar>
</div>
