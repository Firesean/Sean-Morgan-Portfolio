<script>
	import "../app.css";
	import "../light-mode.css";
	import "../dark-mode.css";
	let mode = "dark";
</script>

<style lang="postcss">

</style>

<header>
	<title>Portfolio Page</title>
</header>

<div class="flex flex-wrap justify-center m-auto h-full w-full min-w-[400px] {mode == "dark" ? "dark" : "light"}">
	<slot />
	<button class="text-red-600 fixed bottom-12 right-12" on:click={() => {mode == "dark" ? mode = "light" : mode = "dark"}}>Change Mode</button>
</div>