<script>
	import "../app.css";
	import "../light-mode.css";
	import "../dark-mode.css";
    import SunIcon from "$lib/components/icons/sun-icon.svelte";
    import MoonIcon from "$lib/components/icons/moon-icon.svelte";
	import ResumeIcon from "$lib/components/icons/resume-icon.svelte";
    import Resume from "$lib/components/resume.svelte";

	import { onMount } from "svelte";

	let modes = ["dark", "light"];
	let selectedMode = 0;

	function cycleMode() {
        selectedMode = (selectedMode + 1) % modes.length;
        if (typeof document !== 'undefined') {
            document.documentElement.className = modes[selectedMode];
        }
    }

    onMount(() => {
        document.documentElement.className = modes[selectedMode];
	})
</script>

<header>
	<title>Portfolio Page</title>
</header>

<div class="flex flex-wrap justify-center m-auto h-full w-full min-w-[400px] {modes[selectedMode]} print:hidden">
	<slot />
	<button class="fixed bottom-32 right-16" on:click={() => {window.print(); return false;}}>
		<span class="fixed {modes[selectedMode] == "dark" ? 'opacity-100' : "opacity-0"}"><ResumeIcon fill={modes[selectedMode] == "dark" ? "#FFF" : "#000"} size=40 /></span>
	</button>
	<button class="text-red-600 fixed bottom-16 right-16" on:click={cycleMode}>
		<div class="fixed">
			<span class="fixed {modes[selectedMode] == "dark" ? 'opacity-100' : "opacity-0"}"><MoonIcon stroke="#FFF" size=40 /></span>
			<span class="fixed {modes[selectedMode] == "light" ? 'opacity-100' : "opacity-0"}"><SunIcon stroke="#000" size=40 /></span>
		</div>
	</button>
</div>

<Resume />
