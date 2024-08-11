<script>
    let summary = "I am a dedicated to growing as a Developer! " +
    "My expertise spans across various technologies and frameworks, ranging from <strong>Python, Javascript, C++, etc.</strong> " +
    "I have proved in my past endeavors I am capable of learning the skill required for the job at hand. " +
    "I started my journey through experimentation with the Python language, spanning from <strong>GUI Development, Automation Scripts, and Hacking tools.</strong> " +
    "Growing from my experiences I have branched into learning and understanding more into my own capabilities. " +
    "I continue to grow and learn to develop and enchance previously created tools.";
    let resume = {
        "Work Experience": [
            {
                title: "Full Stack Engineer",
                companyInfo: "Design Hedge, Las Vegas NV",
                employmentDetails: "May 2024 - PRESENT, Freelance",
                details: [
                    "Led the creation of a SaaS product, handling both front-end and back-end development.",
                    "Developed a comprehensive platform using the <strong>Svelte webframework</strong> from scratch.",
                    "Created internal tools for business needs, ranging from <strong>Data Analytics Tools, Kanban Board, etc.</strong>",
                    "Assisted in managing a small team to ensure project milestones were met",
                    "Tied APIs such as <strong>Stripe, Supabase, Sales Force, and Google</strong> to our analytics, databases, and internal toolings.",
                ],
            },
            {
                title: "Software Engineer",
                companyInfo: "Preflect, Las Vegas NV",
                employmentDetails: "JULY 2023 - MAY 2024 (11 months), Full-time",
                details: [
                    "Created robust front-end solutions using the <strong>Svelte webframework</strong>, such as a Drag and Drop Ad Image Pairing.",
                    "Integrated various APIs including <strong>Facebook (Meta) and ChatGPT</strong> to enhance platform capabilities.",
                    "Engaged in ongoing learning and adaptation to tackle company-specific challenges.",
                    "Applied <strong>UI/UX design principles</strong> to improve user experience.",
                ],
            },
            {
                title: "Quality Assurance Analyst",
                companyInfo: "The Influential Network, Las Vegas NV",
                employmentDetails: "DECEMBER 2020 - JULY 2023 (2 years 8 months), Full-time",
                details: [
                    "Utilized <strong>Selenium, Mocha, and Chai in Node.js</strong> to create an automation system of hundreds of test cases.",
                    "Conducted data entry and data scraping tasks to support various projects.",
                    "Performed back-end testing with Kubernetes Pods to ensure system reliability.",
                ],
            },
            {
                title: "General Clerk II",
                companyInfo: "Opportunity Village, Nellis AFB NV",
                employmentDetails: "SEPTEMBER 2018 - NOVEMBER 2020 (2 Years 3 months), Full-time",
                details: [
                    "Successfully transitioned from Food Service Sanitation to General Clerk II.",
                    "Managed and distributed mail across the base to thousands of Air Force Personnel and Squadrons.",
                    "Maintained a <strong>Secret Government Security Clearance.</strong>",
                ],
            }
        ],
        "Education": [
            {
                degree: "Bachelors in Computer Science (Incomplete)",
                institution: "Western Governors University, Salt Lake City UT",
                duration: "JANUARY 2022 - MARCH 2023",
            },
            {
                degree: "Associate in Applied Sciences, Computing and Information Technology - Programming",
                institution: "College of Southern Nevada, Las Vegas NV",
                duration: "JANUARY 2017 - AUGUST 2021",
            },
            {
                degree: "Associate in Applied Sciences, Computing and Information Technology - Databases",
                institution: "College of Southern Nevada, Las Vegas NV",
                duration: "JANUARY 2017 - AUGUST 2021",
            }
        ],
        "References": [
            {
                name: "Jeff Gobel, Senior Software Developer at YNAB",
                phone: "209-914-0581",
                email: "jeff@youneedabudget.com",
                since: "Since 2018"
            },
            {
                name: "Elijah Ratner, Senior Software Developer at Preflect Ads",
                phone: "702-265-1176",
                email: "elijah@preflect.com",
                since: "Since 2019"
            },
            {
                name: "Ian McCue, Founder at Preflect Ads",
                phone: "725-529-4030",
                email: "ian@preflect.com",
                since: "Since 2023"
            },
            {
                name: "Anton Bogatirev, Full Stack Web Developer & SEO Expert at Credit One Bank",
                phone: "702-808-1740",
                email: "antonbogatirev1@gmail.com",
                since: "Since 2023"
            }
        ],
        "Certifications" : [
            {
                received : "July 2024",
                institution : "Google",
                course : "Google AI Essentials",
                border : true,
            },
            {
                received : "June 2024",
                institution : "HackerRank",
                course : "Software Engineer",
                border : true,
            },
            {
                received : "Nov 2023",
                institution : "Udacity",
                course : "User Experience - Nanodegree",
                border : true,
            },
            {
                received : "Mar 2017",
                institution : "Certiport",
                course : "IC3 Digital Literacy Certification",
                border : false,
            },
            {
                received : "Apr 2022",
                institution : "LinkedIn",
                course : "Programming Foundation: Software Testing/QA",
                border : false,
            },
        ]
    }
</script>

<div class="resume w-full mx-auto px-16 py-4 hidden print:block">
    <div class="border-b-4 border-neutral-900 mb-3">
        <p>Github : <strong><a href="https://github.com/Firesean">https://github.com/Firesean</a></strong></p>
        <p>LinkedIn : <a href="https://www.linkedin.com/in/firesean/">https://www.linkedin.com/in/firesean/</a></p>
        <p>Phone : 702-469-0667</p>
        <p>Email : <a href="mailto:sean@flame-dev.com">sean@flame-dev.com</a></p>
        <h1>Sean Morgan</h1>
    </div>
    <div>
        <h2>Professional Summary</h2>
        <p class="text-left text-wrap whitespace-break-spaces summary indent-4 mb-3">
            {@html summary}
        </p>
        <h2>Work Experience</h2>
        {#each resume["Work Experience"] as job}
            <div class="mb-2">
                    <h3>{@html job.title}</h3>
                    <div class="flex justify-between">
                        <i>{@html job.companyInfo}</i>
                        <caption>{@html job.employmentDetails}</caption>
                    </div>
                <div class="indent-4">
                    {#each job.details as detail}
                        <li>{@html detail}</li>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
    <div>
        <h2>Education</h2>
        {#each resume.Education as education}
            <div class="mb-3">
                <h3>{@html education.degree}</h3>
                <div class="flex justify-between">
                    <i>{@html education.institution}</i>
                    <caption class="text-left">{@html education.duration}</caption>
                </div>
            </div>
        {/each}
    </div>
    <div>
        <h2>Certifications</h2>
        <div class='flex flex-wrap gap-2 justify-start'>
            {#each resume.Certifications as certification}
                <div class="mb-3 {certification.border ? "border-neutral-900 border-r-[.25rem] pr-2 border-opacity-30" : ''}">
                    <h3>{@html certification.institution}</h3>
                    <div class="flex justify-start gap-4">
                        <i>{@html certification.course}</i>
                        <!-- <caption>{@html certification.received}</caption> -->
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <!-- <div>
        <h2>References</h2>
        {#each resume.References as reference}
            <div class="mb-4">
                <h3>{reference.name}</h3>
                <div class="flex text-nowrap gap-2 items-center">
                    <p>{reference.phone}</p>
                    <span>|</span>
                    <p><a href="mailto:{reference.email}?subject=Regarding Sean Morgan&body=I would like to say Sean Morgan has used yourself as a reference. I am looking to gather information to see how he would potentially fit our role that is available.">{reference.email}</a></p>
                    <span>|</span>
                    <caption>{reference.since}</caption>
                </div>
            </div>
        {/each}
    </div> -->
</div>