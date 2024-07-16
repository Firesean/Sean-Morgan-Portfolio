<script>
    import AttachedBar from "$lib/components/utility/attached-bar.svelte";

    let infoBarHeight = "350px";

    let sections = {
        "Introduction" : [
            // "You have a problem, a have a solution",
            // "Web Application, Automation, Scraping, IOT, I tinker in it all",
            // "Enjoy learning and exploring new terrian",
            // "I seek growth in developing my skills"
        ],
        "Education" : [
            // "Dual Associates in Computing and Information Science",
            // "College of Southern Nevada",
            // "Bachelors Degree in Computer Science (Incomplete)",
            // "Western Governors University"
        ],
        "Professional Summary" : [
            // "Problem Solver: Analytical and observate, reaching point A to point B",
            // "Team Player: Everyone has a spot they belong",
            // "Always Learning: New tech advancements and skill improvement",
            // "Full Stack: Front-end and Back-end creations",
        ],
        "Interests" : [
            // "Actitivies: Hockey / Tennis / Wrestling / Biking",
            // "Video Games:  Dead By Daylight / CSGO / Rainbow 6 Siege / Yugioh / Pokemon",
            // "Dancing: Break Dance / Hip-Hop / Line Dancing / (West Coast / Country) Swing",
            // "Music: Rock / Metal / Country / Rap"
        ]
    }

</script>

<div class="w-full flex flex-col gap-16">
    {#each Object.keys(sections) as title, i}
        <AttachedBar bind:infoBarHeight={infoBarHeight} title={title} attachedSide={i % 2 == 0 ? "left" : "right"}>
            {#each sections[title] as detail, j}
                <li class:highlight={j % 2 != 0}>
                    {detail}
                </li>
            {/each}
        </AttachedBar>
    {/each}
</div>
