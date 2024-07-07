<script>
    import SkillsContainer from "$lib/components/skills-container.svelte";

</script>

<div class="h-full pb-[32em]">
    <div class="flex flex-row flex-wrap justify-center mt-[-100px] mx-auto gap-[8em]">
        <div class="flex flex-row flex-wrap gap-16">
            {#each Array(4) as item, i}
                <SkillsContainer index={i}/>
            {/each}
        </div>

        <div class="flex flex-row flex-wrap gap-16">
            {#each Array(4) as item, i}
                <SkillsContainer index={i}/>
            {/each}
        </div>
    </div>
</div>
