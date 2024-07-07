<script>
    import SkillsContainer from "$lib/components/skills-container.svelte";

</script>

<div class="h-full pb-[72em]">
    <div class="flex flex-row flex-wrap justify-center mt-[-100px] mx-auto">
        <div class="flex flex-row flex-wrap gap-16">
            {#each Array(8) as item, i}
                <SkillsContainer index={i}/>
            {/each}
        </div>
    </div>
</div>
