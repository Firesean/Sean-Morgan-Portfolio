<script>
    import AttachedBar from "$lib/components/utility/attached-bar.svelte";

    let infoBarHeight = "350px";
    let sections = ["Introduction", "Education", "Professional Summary", "Interests", "Self Development"];


    let aboutData = {
        "Introduction" : [
            "Introduced to programming in 2010.",
            "Dual Associates from College of Southern Nevada in Computer and Information Technology [Science]",
            "In 2020, hired as a Quality Assurance Analyst at Influential Network",
            "In 2023, joined Preflect Ads as a Software Engineer"
        ],
        "Education" : [
            "Dual Associates in Computing and Information Science",
            "College of Southern Nevada",
            "Bachelors Degree in Computer Science (Incomplete)",
            "Western Governors University"
        ],
        "Professional Summary" : [
            "Problem Solver: Good at solving technical issues and improving software",
            "Team Player: Works well with teams and delivers quality software on time",
            "Always Learning: Keeps up with new tech trends and improves skills",
            "Full Stack: Experienced in front-end and back-end development for software performance",
        ]
    }

</script>

<div class="w-full flex flex-col gap-16">
    {#each Object.keys(aboutData) as title, i}
        <AttachedBar bind:infoBarHeight={infoBarHeight} title={title} class="attached-bar" attachedSide={i % 2 == 0 ? "left" : "right"}>
            {#each aboutData[title] as detail, j}
                <li class:highlight={j % 2 != 0}>
                    {detail}
                </li>
            {/each}
        </AttachedBar>
    {/each}
</div>
