<script>
	import "../app.css";

	let options = [
		"Skills",
		"Experience",
		"About"
	];
</script>



<style lang="postcss">

</style>

<header>
	<title>Flame Development</title>
</header>


<nav class="flex flex-nowrap gap-32 bg-white opacity-60 h-[5vh] justify-center items-center p-4 fixed w-full z-10">
	
		{#each options as option}
			<div>
				{option}
			</div>
		{/each}
</nav>
<div class="flex flex-wrap justify-center m-auto bg-gray-800 h-full w-full p-8 min-w-[400px]">
	<slot />
</div>
