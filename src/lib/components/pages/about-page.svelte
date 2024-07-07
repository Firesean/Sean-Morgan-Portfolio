<script>
    import AttachedBar from "$lib/components/utility/attached-bar.svelte";

    let infoBarHeight = "350px";
    let sections = ["Introduction", "Education", "Professional Summary", "Interests", "Self Development"];
</script>


<div class="w-full flex flex-col gap-16">
    <AttachedBar infoBarHeight={infoBarHeight} title="Introduction">
        <div class="flex flex-col w-full gap-4 text-2xl justify-center">
            <span class="self-center">Welcome to my portfolio page!</span>
            <li>
                I have been introduced to technology in 2004.
                My programming journey started in 2010 with <span class="highlight">Roblox (Lua)</span> and <span class="highlight">Minecraft (Java)</span>
            </li>
            <li>
                In 2017, I began studying at the <span class="highlight">College of Southern Nevada</span> while working an assortment of jobs
            </li>
            <li>
                In 2021, I completed my <span class="highlight">Dual Associates in Computing and Information Technology in Programming & Databases</span>.
                I started my career at <span class="highlight">Influential Network</span> as a <span class="highlight">Quality Assurance Analyst</span>, learning software development and testing
            </li>
            <li>
                After <span class="highlight">Influential</span>, I joined <span class="highlight">Preflect Ads</span> to work as a <span class="highlight">Software Engineer</span> and enchancing small businesses
            </li>
        </div>
    </AttachedBar>

    <AttachedBar infoBarHeight={infoBarHeight} title="Education" attachedSide="right">
        <div class="flex flex-col w-full gap-4 text-2xl indent-4 justify-center">
        </div>
    </AttachedBar>

    <AttachedBar infoBarHeight={infoBarHeight} title="Professional Summary" attachedSide="left">
        <div class="flex flex-col w-full gap-4 text-2xl indent-4 justify-center">
        </div>
    </AttachedBar>
</div>
