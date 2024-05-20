<script>
    import InfluentialLogo from "$lib/components/influential-logo.svelte";
    import CompanyDropdown from "$lib/components/company-dropdown.svelte";
    import FlameDevLogo from "$lib/components/flame-dev-logo.svelte";
    import PreflectLogo from "$lib/components/preflect-logo.svelte";
    import DesignHedgeLogo from "$lib/components/design-hedge-logo.svelte";
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
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CompanyDropdown> 
            <InfluentialLogo size="300"/>
        </CompanyDropdown>

        <CompanyDropdown> 
            <PreflectLogo size="300"/>
        </CompanyDropdown>

        <CompanyDropdown> 
            <FlameDevLogo size="300"/>
        </CompanyDropdown>

        <CompanyDropdown> 
            <DesignHedgeLogo size="300"/>
        </CompanyDropdown>
    </div>
</div>