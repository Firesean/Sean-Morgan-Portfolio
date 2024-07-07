<script>
    import SkillsContainer from "$lib/components/skills-container.svelte";

</script>

<div class="h-full">
    <div class="flex flex-row flex-wrap justify-center mx-auto">
        <div class="flex flex-row flex-wrap gap-16 justify-center -mt-[50px]">
            {#each Array(8) as item, i}
                <SkillsContainer index={i}/>
            {/each}
        </div>
    </div>
</div>
