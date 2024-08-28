<script>
    let summary = "Personal projects to school projects and now professional experience, I am growing as a Software Developer! " +
    "I have experiemented with program languages, frameworks, tools, and etc. " +
    "Throughout my journey, I learned Python, C++, C, C#, Java, and Javascript. " +
    "Branching from Graphical User Interfaces, Web Development, Web Crawling, and even Pen Testing. " +
    "Always seeking the next opportunity to grow and develop my skills as an individual. " +
    "I want to grow as a person, and most importantly grow with a company. ";
    let resume = {
        "Work Experience": [
            // {
            //     title: "Full Stack Engineer",
            //     companyInfo: "Design Hedge, Las Vegas NV",
            //     employmentDetails: "May 2024 - PRESENT, Freelance",
            //     details: [
            //         "Led the creation of a SaaS product, handling both front-end and back-end development.",
            //         "Developed a comprehensive platform using the Svelte web framework from scratch.",
            //         "Created internal tools for business needs, ranging from Data Analytics Tools, Kanban Board, etc.",
            //         "Assisted in managing a small team to ensure project milestones were met",
            //         "Tied APIs such as Stripe, Supabase, Sales Force, and Google to our analytics, databases, and internal toolings.",
            //     ],
            // },
            {
                title: "Software Engineer",
                companyInfo: "Preflect, Las Vegas NV",
                employmentDetails: "JULY 2023 - MAY 2024 (11 months), Full-time",
                details: [
                    "Preflect Ads, a start up that is funded by Mark Cuban in helping small companies market themselves online.",
                    "Created frontend solutions with Svelte for a Drag & Drop Ad Image Pairing, Booking Widget, Cancellation Widget.",
                    "Helped with backend code for various APIs including Facebook (Meta) and ChatGPT to enhance users marketing.",
                    "Engaged in ongoing learning and adaptation from Web Development and UX/UI Design.",
                    "Managed the site through details, layouts, and bugs fixes.",
                ],
            },
            {
                title: "Quality Assurance Analyst",
                companyInfo: "The Influential Network, Las Vegas NV",
                employmentDetails: "DECEMBER 2020 - JULY 2023 (2 years 8 months), Full-time",
                details: [
                    "Influential, the #1 Influencer marketing company in the world. (Acquired by Publicis Groupe)",
                    "Utilized Selenium, Mocha, and Chai in Node.js to create an automation system of hundreds of test cases.",
                    "Conducted data entry and data scraping tasks to support various projects.",
                    "Performed back-end testing with Kubernetes Pods to ensure system reliability.",
                ],
            },
            {
                title: "Postal Clerk",
                companyInfo: "Opportunity Village, Nellis AFB NV",
                employmentDetails: "SEPTEMBER 2018 - NOVEMBER 2020 (2 Years 3 months), Full-time",
                details: [
                    "Successfully transitioned from Food Service Sanitation to Postal Clerk.",
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
        <p>Github : <a href="https://github.com/Firesean">https://github.com/Firesean</a></p>
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
                    <!-- <caption class="text-left">{@html education.duration}</caption> -->
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