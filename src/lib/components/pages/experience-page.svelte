<script>
    import InfluentialLogo from "$lib/components/influential-logo.svelte";
    import CompanyDropdown from "$lib/components/company-dropdown.svelte";
    import FlameDevLogo from "$lib/components/flame-dev-logo.svelte";
    import PreflectLogo from "$lib/components/preflect-logo.svelte";
    import DesignHedgeLogo from "$lib/components/design-hedge-logo.svelte";
    import OpportunityVillageLogo from "$lib/components/opportunity-village-logo.svelte";
    import MiniGranPrixLogo from "$lib/components/mini-gran-prix-logo.svelte";
    import GSALogo from "$lib/components/gsa-logo.svelte";
    import GoldenKnightsLogo from "$lib/components/golden-knights-logo.svelte";


    let companies = {  
        "Global Surveillance Associates" : {
            "title": "Technician",
            "length": "Oct 2024 - Present",
            "descriptions": [
                "Networks",
                "Cabling",
                "Traveling",
                "Installations",
                "Troubleshooting",
                "Maintenance",
            ]
        },
        "Design Hedge" : {
            "title": "Principal Software Engineer",
            "length": "May 2024 - Sept 2024",
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
                "MySQL" // Databases
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
                "Adaptability",
            ]
        },
        "Flame Development" : {
            "title": "Founder",
            "length": "Aug 2018 - Present",
            "descriptions": [
                "Python", // Hacking, Scraping, Automation, Application Creations
                "Node.js", // Application Creations, Automation, Scraping, Svelte, APIs, Mocha & Chai
                "C++", // Win32Api, Memory Handling
                "TailwindCSS", // CSS, Styling, Responsive Design
                "Vercel", // Web hosting, DNS Records
                "APIs",
                "UI/UX Design", // Figma, A/B Testing, Quality Assurance
                "Databases",
                "Github", // Code Management, Source Control
                "DNS Records",
                "Networking",
            ]
        },
        "City National Arena" : {
            "title": "Scorekeeper",
            "length": "June 2019 - Present",
            "descriptions": [
                "Hockey",
                "Tournament Handling",
                "Game Tracking",
                "Situation Awareness",
                "Professionalism",
            ]
        },
        "Mini Gran Prix" : {
            "title": "Ride Attendant",
            "length": "Sept 2017 - Mar 2018",
            "descriptions": [
                "Customer Service",
                "Adaptability",
                "Ride Maintenance",
                "Situational Awareness",
                "Safety",
            ]
        },
    };
</script>
<div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 self-center pb-[12em] overflow-hidden">
    {#each Object.entries(companies) as details}
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
                <DesignHedgeLogo size="280"/>
            {:else if details[0] == "Mini Gran Prix"}
                <MiniGranPrixLogo size="350" />
            {:else if details[0] == "Global Surveillance Associates"}
                <GSALogo size="600"/>
            {:else if details[0] == "City National Arena"}
                <GoldenKnightsLogo size="325"/>
            {/if}
        </CompanyDropdown>
    {/each}
</div>