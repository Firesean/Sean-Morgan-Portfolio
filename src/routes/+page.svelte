<script>
    import InfluentialLogo from "$lib/components/influential-logo.svelte";
    import CompanyDropdown from "$lib/components/company-dropdown.svelte";
    import FlameDevLogo from "$lib/components/flame-dev-logo.svelte";
    import PreflectLogo from "$lib/components/preflect-logo.svelte";
    import DesignHedgeLogo from "$lib/components/design-hedge-logo.svelte";


    let companies = [
    {
        "company": "Flame Development",
        "title": "Founder",
        "length": "2018 - Present",
        "descriptions": [
        "Automation",
        "Python",
        "ADB",
        "Node.js",
        "Svelte",
        "C++",
        "TailwindCSS",
        "Vercel",
        "APIs",
        "UI/UX Design",
        "Databases",
        "Github"
        ]
    },
    {
        "company": "The Influential Network",
        "title": "Quality Assurance Analyst",
        "length": "Dec 2020 - July 2023",
        "descriptions": [
        "Web Automation",
        "Python",
        "Node.js",
        "Mocha & Chai",
        "Github",
        "Jenkins",
        "Kubernetes",
        "MySQL"
        ]
    },
    {
        "company": "Preflect Ads",
        "title": "Software Engineer",
        "length": "July 2023 - May 2024",
        "descriptions": [
        "Web Development",
        "AWS",
        "Back-End APIs",
        "Ngrok",
        "Svelte",
        "Vercel",
        "TailwindCSS",
        "Node.js",
        "UI/UX Design",
        "A/B Testing",
        "Github"
        ]
    },
    {
        "company": "Design Hedge",
        "title": "Full Stack Developer",
        "length": "May 2024 - Present",
        "descriptions": [
        "Web Development",
        "Svelte",
        "Vercel",
        "TailwindCSS",
        "Node.js",
        "Figma Recreation",
        "Github",
        "UI/UX Design",
        ]
    }
    ];

    let showOptions = false;
  
    function toggleOn() {
        showOptions = true;
    }

    function toggleOff() {
        showOptions = false;
    }
</script>
  
<style>
    .option {
      @apply bg-white bg-opacity-80 py-2 px-4 rounded-lg text-gray-800 cursor-pointer absolute;
    }
  
    .option:hover {
      @apply bg-opacity-100;
    }
</style>

<div class="flex flex-col justify-center">
    <div class="p-12 relative" on:mouseenter={toggleOn} on:mouseleave={toggleOff}>
        <div class="bg-white rounded-full p-4 m-auto bg-opacity-20 h-[32vh] w-[32vh] relative" >
          <img src="src/lib/images/sean_morgan.jpg" class="h-full w-full rounded-full"/>
          {#if showOptions}
            <div class="absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%);">
              {#each Array(5) as _, index}
                <div class="option opacity-70 text-opacity-100" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate({index * 225 / 5 - 90}deg) translateY(-14rem);">Option {index + 1}</div>
              {/each}
            </div>
          {/if}
        </div>
        <h1 class="text-center text-6xl text-white font-bold">
          Sean Morgan
        </h1>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <CompanyDropdown company={companies[0].company} title={companies[0].title} length={companies[0].length} descriptions={companies[0].descriptions}> 
            <FlameDevLogo size="450"/>
        </CompanyDropdown>

        <CompanyDropdown company={companies[1].company} title={companies[1].title} length={companies[1].length} descriptions={companies[1].descriptions}>  
            <InfluentialLogo size="300"/>
        </CompanyDropdown>

        <CompanyDropdown company={companies[2].company} title={companies[2].title} length={companies[2].length} descriptions={companies[2].descriptions}> 
            <PreflectLogo size="300"/>
        </CompanyDropdown>

        <CompanyDropdown company={companies[3].company} title={companies[3].title} length={companies[3].length} descriptions={companies[3].descriptions}> 
            <DesignHedgeLogo size="300"/>
        </CompanyDropdown>
    </div>
</div>