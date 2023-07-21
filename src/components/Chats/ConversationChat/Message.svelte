<script lang="ts">
	import { Computer, Home, User } from 'lucide-svelte';

	export let userType: 'function' | 'user' | 'assistant' | 'system';
	export let message: string;
</script>

{#if userType === 'user'}
	<div class="flex items-end justify-end">
		<div class="flex flex-row rounded-full p-2">
			<p>
				{message}
			</p>
			<div class="ml-6 flex items-center justify-center rounded-full bg-zinc-900 p-2">
				<User />
			</div>
		</div>
	</div>
{:else}
	<div class="flex flex-row">
		<div class="mr-6 flex items-center justify-center rounded-full bg-zinc-900">
			<Computer />
		</div>

		<p>
			{message}
		</p>
	</div>
{/if}
