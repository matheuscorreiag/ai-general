<script lang="ts">
	import { Computer, User } from 'lucide-svelte';
	import { twMerge } from 'tailwind-merge';

	export let userType: 'function' | 'user' | 'assistant' | 'system';
	export let message: string;
</script>

{#if userType === 'user'}
	<div
		class={twMerge('flex justify-end border-t border-t-zinc-900 pt-10', 'first-of-type:border-t-0')}
	>
		<div class="flex flex-row rounded-full p-2">
			<p>
				{message}
			</p>
		</div>
		<div class="mr-6">
			<div class="rounded-full bg-zinc-900 p-2">
				<User />
			</div>
		</div>
	</div>
{:else}
	<div class="flex flex-row border-t border-t-zinc-900 pt-10">
		<div class="mr-6">
			<div class=" rounded-full bg-zinc-900 p-2">
				<Computer />
			</div>
		</div>

		<p>
			{message}
		</p>
	</div>
{/if}
