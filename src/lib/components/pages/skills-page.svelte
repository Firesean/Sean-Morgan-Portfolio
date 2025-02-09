<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import SkillsContainer from "$lib/components/utility/skills-container.svelte";
    
    const screenType = writable("unknown");
    let inColumn;
    const screenOptions = {
      "desktop": 3,
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

  <div class="h-full w-[70vw] mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <div class="flex flex-wrap gap-4 h-full">
        <SkillsContainer />
        <SkillsContainer />
      </div>
      <div class="mt-8 flex flex-wrap gap-4 h-full">
        <SkillsContainer />
        <SkillsContainer />
      </div>
      <div class="mt-16 flex flex-wrap gap-4 h-full">
        <SkillsContainer />
        <SkillsContainer />
      </div>
      <div class="mt-24 flex flex-wrap gap-4 h-full">
        <SkillsContainer />
        <SkillsContainer />
      </div>
    </div>
  </div>
  