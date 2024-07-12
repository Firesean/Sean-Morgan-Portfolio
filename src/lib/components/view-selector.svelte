<script>
    import { onMount } from "svelte";
    export let views = [];
    export let selectedView;

    onMount(() => {
        selectedView = selectedView;
    });
</script>

<style>
    .toggle-container {
        @apply fixed w-full flex justify-between p-1 gap-8 opacity-60 z-10 top-0 ;
    }

    .toggle-slider {
        @apply absolute bottom-0 left-0 h-1.5;
        transition: transform 0.3s ease;
    }

    .toggle-option {
        @apply font-bold w-full relative text-center pb-1 flex flex-nowrap justify-center gap-4 self-center;
        cursor: pointer;
    }
</style>

<div class="toggle-container min-w-[400px]">
    <div
        class="toggle-slider"
        style="transform: translateX({selectedView * 100}%); width: calc(100% / {views.length});"
    ></div>
    {#each views as view, i}
        <button class="toggle-option text-md md:text-2xl" on:click={() => {selectedView = i}}>
            {view}
        </button>
    {/each}
</div>

