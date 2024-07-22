<script>
    import ViewSelector from "$lib/components/view-selector.svelte";
    import ExperiencePage from "$lib/components/pages/experience-page.svelte";
    import NetworkPage from "$lib/components/pages/network-page.svelte";
    import AboutPage from "$lib/components/pages/about-page.svelte";
    import SkillsPage from "$lib/components/pages/skills-page.svelte";


    import ProfileImage from "$lib/assets/images/sean-morgan.jpg";

    let views = [
		"Skills",
		"Experience",
		"About",
		"Network"
	];

	let selectedView = 3;
    let showOptions = false;
  
    function toggleOn() {
        showOptions = true;
    }

    function toggleOff() {
        showOptions = false;
    }
</script>

<ViewSelector bind:views bind:selectedView />

<div class="flex flex-col justify-center w-full h-full">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="p-20 profile" on:mouseenter={toggleOn} on:mouseleave={toggleOff}>
        <div class="rounded-full p-2 m-auto !bg-opacity-20 h-[24vh] w-[24vh] relative aspect-square" >
          <!-- svelte-ignore a11y-missing-attribute -->
          <img src={ProfileImage}
          class="h-full w-full rounded-full select-none" draggable="false" alt="Sean Morgan"
          />
          <!-- <CircleSelector showOptions={showOptions} options={options}/> -->
        </div>
        <h1 class="text-center">
          Sean Morgan
        </h1>
    </div>

    {#if views[selectedView].toLowerCase() == "experience"}
        <ExperiencePage />
    <!-- {:else if views[selectedView].toLowerCase() == "network"}
        <NetworkPage /> -->
    {:else if views[selectedView].toLowerCase() == "about"}
        <AboutPage />
    {:else if views[selectedView].toLowerCase() == "skills"}
        <SkillsPage />
    {:else}
        <h3 class="self-center">Nothing here yet</h3>
    {/if}
</div>