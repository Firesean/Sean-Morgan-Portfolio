<script>
    let summary = "I am a dedicated to growing as a Developer! " +
    "My expertise spans across various technologies and frameworks, ranging from Python, Javascript, C++, etc. " +
    "I have proved in my past endeavors I am capable of learning the skill required for the job at hand. " +
    "I started my journey through experimentation with the Python language, spanning from GUI Development, Automation Scripts, and Hacking tools. " +
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
                    "Developed a comprehensive platform using Svelte from scratch.",
                    "Created internal tools for business needs, ranging from Data Analytics Tools, Kanban Board, etc.",
                    "Assisted in managing a small team to ensure project milestones were met",
                    "Tied APIs such as Stripe, Supabase, Sales Force, and Google to our analytics, databases, and internal toolings.",
                ],
            },
            {
                title: "Software Engineer",
                companyInfo: "Preflect, Las Vegas NV",
                employmentDetails: "JULY 2023 - MAY 2024 (11 months), Full-time",
                details: [
                    "Created robust front-end solutions using the Svelte webframework, such as a Drag and Drop Ad Image Pairing.",
                    "Integrated various APIs including Facebook (Meta) and ChatGPT to enhance platform capabilities.",
                    "Engaged in ongoing learning and adaptation to tackle company-specific challenges.",
                    "Applied UI/UX design principles to improve user experience.",
                ],
            },
            {
                title: "Quality Assurance Analyst",
                companyInfo: "The Influential Network, Las Vegas NV",
                employmentDetails: "DECEMBER 2020 - JULY 2023 (2 years 8 months), Full-time",
                details: [
                    "Utilized Selenium, Mocha, and Chai in Node.js to create an automation system of hundreds of test cases.",
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
                    "Maintained a Secret Government Security Clearance.",
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
        ]
    }
</script>

<div class="resume w-full mx-auto px-16 py-4 hidden print:block">
    <div class="border-b-4 border-neutral-900 mb-4">
        <p>Github : <a href="https://github.com/Firesean">https://github.com/Firesean</a></p>
        <p>LinkedIn : <a href="https://www.linkedin.com/in/firesean/">https://www.linkedin.com/in/firesean/</a></p>
        <p>Phone : 702-469-0667</p>
        <p>Email : <a href="mailto:Firesean98@gmail.com">Firesean98@gmail.com</a></p>
        <h1>Sean Morgan</h1>
    </div>
    <div>
        <h2>Professional Summary</h2>
        <p class="text-left text-wrap whitespace-break-spaces summary indent-4 mb-3">
            {summary}
        </p>
        <h2>Work Experience</h2>
        {#each resume["Work Experience"] as job}
            <div class="mb-3">
                    <h3>{job.title}</h3>
                    <div class="flex justify-between">
                        <i>{job.companyInfo}</i>
                        <caption>{job.employmentDetails}</caption>
                    </div>
                <div class="indent-4">
                    {#each job.details as detail}
                        <li>{detail}</li>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
    <div>
        <h2>Education</h2>
        {#each resume.Education as education}
            <div class="mb-3">
                <h3>{education.degree}</h3>
                <div class="flex justify-between">
                    <i>{education.institution}</i>
                    <caption class="text-left">{education.duration}</caption>
                </div>
            </div>
        {/each}
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