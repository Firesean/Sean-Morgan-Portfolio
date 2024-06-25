<script>
    export let showOptions = false;
    export let options = {
        "Github" : "https://github.com/Firesean", 
        "LinkedIn" : "https://www.linkedin.com/in/firesean/", 
        "Flame-Dev" : "https://flame-dev.com/", 
        "Skills" : "skills", 
        "Experience" : "experience"
    }
</script>

<style>
    .option {
      @apply bg-white bg-opacity-90 py-1 px-3 h-12 rounded-lg text-gray-900 cursor-pointer absolute text-sm text-nowrap font-semibold text-center;
    }
  
    .option:hover {
      @apply bg-opacity-100;
    }
</style>

{#if showOptions}
    <div class="absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%);">
        {#each Object.keys(options) as option, index}
        <a href={options[option]} target="_blank">
            <div class="option opacity-70 text-opacity-100" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate({index * 225 / 5 - 90}deg) translateY(-12rem); display: flex; justify-content: center; align-items: center;">
                {option}
            </div>
        </a>
        {/each}
    </div>
{/if}