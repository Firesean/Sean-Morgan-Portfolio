<script>
    import InfluentialLogo from "$lib/components/influential-logo.svelte";
    import CompanyDropdown from "$lib/components/company-dropdown.svelte";
    import FlameDevLogo from "$lib/components/flame-dev-logo.svelte";
    import PreflectLogo from "$lib/components/preflect-logo.svelte";
    import DesignHedgeLogo from "$lib/components/design-hedge-logo.svelte";
    import CircleSelector from "$lib/components/circle-selector.svelte";
    import OpportunityVillageLogo from "$lib/components/opportunity-village-logo.svelte";
    import MiniGranPrixLogo from "../lib/components/mini-gran-prix-logo.svelte";


    let options = {
        "Github" : "https://github.com/Firesean", 
        "LinkedIn" : "https://www.linkedin.com/in/firesean/", 
        "Flame-Dev" : "https://flame-dev.com/", 
        "Skills" : "skills", 
        "Experience" : "experience"
    }

    let companies = {
        "Mini Gran Prix" : {
            "title": "Ride Attendant",
            "length": "Sept 2017 - Mar 2018",
            "descriptions": [
                "Customer Service",
                "Adapability",
                "Ride Maintenance",
                "Situational Awareness",
                "Safety",
            ]
        },
        "Opportunity Village" : {
            "title": "General Clerk II",
            "length": "Sept 2018 - Nov 2020",
            "descriptions": [
                "Customer Service",
                "Secret Clearance",
                "Attention to Details",
                "Data Entry",
                "Adapability",
            ]
        },
        "Flame Development" : {
            "title": "Founder",
            "length": "Aug 2018 - Present",
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
        "Influential Network" : {
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
        "Preflect Ads" : {
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
        "Design Hedge" : {
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
        },
    };

    let showOptions = false;
  
    function toggleOn() {
        showOptions = true;
    }

    function toggleOff() {
        showOptions = false;
    }
</script>

<div class="flex flex-col justify-center">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="p-12 relative" on:mouseenter={toggleOn} on:mouseleave={toggleOff}>
        <div class="bg-white rounded-full p-2 m-auto bg-opacity-20 h-[32vh] w-[32vh] relative" >
          <!-- svelte-ignore a11y-missing-attribute -->
          <img src="https://media.licdn.com/dms/image/D5603AQHMYlxZ9e0mKw/profile-displayphoto-shrink_200_200/0/1716951794354?e=1722470400&v=beta&t=TLaIEA6PpQ_4kzuQKe4QsDlzxpdIrCEwHeSDOodbl8w" class="h-full w-full rounded-full"/>
          <!-- <CircleSelector showOptions={showOptions} options={options}/> -->
        </div>
        <h1 class="text-center text-6xl text-white font-bold">
          Sean Morgan
        </h1>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 self-center pb-[15em]">
        {#each Object.entries(companies) as details, index}
            <CompanyDropdown company={details[0]} title={details[1].title} length={details[1].length} descriptions={details[1].descriptions}>
                {#if details[0] == "Flame Development"}
                    <FlameDevLogo size="450"/>
                {:else if details[0] == "Opportunity Village"}
                    <OpportunityVillageLogo size="300"/>
                {:else if details[0] == "Influential Network"}
                    <InfluentialLogo size="300"/>
                {:else if details[0] == "Preflect Ads"}
                    <PreflectLogo size="300"/>
                {:else if details[0] == "Design Hedge"}
                    <DesignHedgeLogo size="300"/>
                {:else if details[0] == "Mini Gran Prix"}
                    <MiniGranPrixLogo size="350" />
                {/if}
            </CompanyDropdown>
        {/each}
    </div>
</div>