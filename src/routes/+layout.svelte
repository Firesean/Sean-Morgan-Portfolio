<script>
	import "../app.css";
	import "../light-mode.css";
	import "../dark-mode.css";
    import SunIcon from "$lib/components/icons/sun-icon.svelte";
    import MoonIcon from "$lib/components/icons/moon-icon.svelte";

	let modes = ["dark", "light"];
	let selectedMode = 0;

	function cycleMode() {
		selectedMode = (selectedMode + 1) % modes.length;
	}
</script>

<header>
	<title>Portfolio Page</title>
</header>

<div class="flex flex-wrap justify-center m-auto h-full w-full min-w-[400px] {modes[selectedMode]}">
	<slot />
	<button class="text-red-600 fixed bottom-16 right-16" on:click={cycleMode}>
		<div class="fixed">
			<span class="fixed {modes[selectedMode] == "dark" ? 'opacity-100' : "opacity-0"}"><MoonIcon stroke="#FFF" size=40 /></span>
			<span class="fixed {modes[selectedMode] == "light" ? 'opacity-100' : "opacity-0"}"><SunIcon stroke="#000" size=40 /></span>
		</div>
	  </button>
</div>