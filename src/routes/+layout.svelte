<script>
	import "../app.css";

	let options = [
		"Skills",
		"Experience",
		"About",
		"Contact"
	];
</script>



<style lang="postcss">

</style>

<header>
	<title>Flame Development</title>
</header>


<nav class="flex flex-nowrap gap-[4vw] bg-white opacity-60 h-[5vh] justify-center items-center p-4 fixed w-full z-10">
	
		{#each options as option}
			<a href="./{option.toLowerCase()}">
				<div class="px-[2vw] text-lg font-semibold">
					{option}
				</div>
			</a>
		{/each}
</nav>
<div class="flex flex-wrap justify-center m-auto bg-gray-800 h-full w-full p-8 min-w-[400px]">
	<slot />
</div>
