<script>
	import Input from './Input.svelte';
	import Message from './Message.svelte';
	import Title from './Title.svelte';
</script>

<div class="h-full">
	<Title />
	<Input />

	<div class="mt-10 h-4/6 flex-col space-y-12 overflow-y-scroll rounded-lg bg-zinc-800 p-10">
		<Message userType="AI" />
		<Message userType="USER" />
		<Message userType="AI" />
		<Message userType="USER" />
		<Message userType="AI" />
		<Message userType="USER" />
		<Message userType="AI" />
		<Message userType="USER" />
	</div>
</div>
