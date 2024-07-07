<script>
    import ViewSelector from "$lib/components/view-selector.svelte";
    import ExperiencePage from "$lib/components/pages/experience-page.svelte";
    import NetworkPage from "$lib/components/pages/network-page.svelte";
    import AboutPage from "$lib/components/pages/about-page.svelte";
    import SkillsPage from "$lib/components/pages/skills-page.svelte";


    let views = [
		"Skills",
		"Experience",
		"About",
		"Network"
	];

	let selectedView = 1;
    let showOptions = false;
  
    function toggleOn() {
        showOptions = true;
    }

    function toggleOff() {
        showOptions = false;
    }

</script>

<ViewSelector bind:views bind:selectedView />

<div class="flex flex-col justify-center w-full">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="p-20" on:mouseenter={toggleOn} on:mouseleave={toggleOff}>
        <div class="bg-white rounded-full p-2 m-auto bg-opacity-20 h-[24vh] w-[24vh] relative aspect-square" >
          <!-- svelte-ignore a11y-missing-attribute -->
          <img src="https://media.licdn.com/dms/image/D5603AQHMYlxZ9e0mKw/profile-displayphoto-shrink_200_200/0/1716951794354?e=1722470400&v=beta&t=TLaIEA6PpQ_4kzuQKe4QsDlzxpdIrCEwHeSDOodbl8w" 
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
    {:else if views[selectedView].toLowerCase() == "network"}
        <NetworkPage />
    {:else if views[selectedView].toLowerCase() == "about"}
        <AboutPage />
    {:else if views[selectedView].toLowerCase() == "skills"}
        <SkillsPage />
    {:else}
        <h3 class="self-center">Nothing here yet</h3>
    {/if}
</div>