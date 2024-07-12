<script>
    import SkillsContainer from "$lib/components/skills-container.svelte";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    
    const screenType = writable("unknown");
    let inColumn;
    const screenOptions = {
      "desktop": 4,
      "tablet": 3,
      "mobile": 1,
      "unknown": 1,
    };
  
    $: inColumn = screenOptions[$screenType];
  
    function adjustScreen() {
      if (typeof window !== "undefined") {
        const updateScreenType = () => {
          if (window.matchMedia("(max-width: 600px)").matches) {
            screenType.set("mobile");
          } else if (window.matchMedia("(max-width: 1200px)").matches) {
            screenType.set("tablet");
          } else {
            screenType.set("desktop");
          }
        };
  
        updateScreenType();
        window.addEventListener("resize", updateScreenType);
  
        return () => {
          window.removeEventListener("resize", updateScreenType);
        };
      }
    }
  
    onMount(() => {
      const cleanup = adjustScreen();
      return cleanup;
    });
  </script>
  
  <div class="h-full">
    <div class="flex flex-row flex-wrap justify-center mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 mt-[400px]">
        {#each Array(8) as item, i}
          <SkillsContainer index={i} bind:inColumn />
        {/each}
      </div>
    </div>
  </div>
  