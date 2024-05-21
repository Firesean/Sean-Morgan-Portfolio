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
        "Full Stack Development",
        "Automation",
        "Python",
        "ADB",
        "Node.js",
        "Svelte",
        "TailwindCSS",
        "Vercel",
        "Web Hosting",
        "APIs",
        "UI/UX Design",
        "Databases",
        "C++",
        "Arduino",
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
        "A/B Testing"
        ]
    }
    ];
</script>
<div class="flex flex-wrap justify-center">
    <!-- <nav class="h-[40px] flex justify-end items-center bg-slate-400">
        test
    </nav>
    <div class="h-screen w-[100%] split-background">
        <div class="bg-white h-[35em] w-[35em] center">
            <FlameDevLogo />

            <InfluentialLogo />
            <PreflectLogo />
        </div>
    </div> -->
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