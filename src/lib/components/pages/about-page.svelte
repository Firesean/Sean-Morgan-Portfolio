<script>
    import AttachedBar from "$lib/components/utility/attached-bar.svelte";

    let infoBarHeight = "350px";
    let sections = ["Introduction", "Education", "Interests", "Professional Summary", "Self Development"];
</script>


<div class="w-full flex flex-col gap-16">
    {#each sections as section, i}
        {#if i % 2 == 0}
            <AttachedBar infoBarHeight={infoBarHeight} title={section}/>
        {:else}
            <AttachedBar infoBarHeight={infoBarHeight} title={section} attachedSide="right"/>
        {/if}
    {/each}
</div>
