<script lang="ts">
	import { Home } from 'lucide-svelte';

	export let userType: 'AI' | 'USER' = 'USER';
</script>

{#if userType === 'USER'}
	<div class="flex items-end justify-end">
		<div class="flex w-fit flex-row rounded-full p-2">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum at cupiditate ullam aperiam
				iste quas vitae atque eveniet facere? Blanditiis, sit illo eius vitae inventore ex veniam
				numquam libero tempore?
			</p>
			<div class="mr-6 flex w-fit rounded-full">
				<Home />
			</div>
		</div>
	</div>
{:else}
	<div class="flex flex-row">
		<div class="mr-6 flex w-fit rounded-full">
			<Home />
		</div>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum at cupiditate ullam aperiam
			iste quas vitae atque eveniet facere? Blanditiis, sit illo eius vitae inventore ex veniam
			numquam libero tempore?
		</p>
	</div>
{/if}
