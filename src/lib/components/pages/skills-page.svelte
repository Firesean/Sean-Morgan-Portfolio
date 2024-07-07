<script>
    import SkillsContainer from "$lib/components/skills-container.svelte";

</script>

<div class="flex flex-row flex-wrap justify-center mt-[-100px] mx-auto">
    <div class="flex flex-row flex-wrap gap-16">
        {#each Array(4) as item, i}
            <SkillsContainer index={i}/>
        {/each}
    </div>

    <div class="flex flex-row flex-wrap gap-16 mt-[200px]">
        {#each Array(4) as item, i}
            <SkillsContainer index={i}/>
        {/each}
    </div>
</div>
