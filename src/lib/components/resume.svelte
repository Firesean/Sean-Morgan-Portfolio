<script>
    let keywords = [
        "Software Quality Assurance (SQA)",
        "Test Engineer",
        "Quality Assurance (QA)",
        "Test Cases",
        "Defect Management",
        "Automation Testing",
        "Regression Testing",
        "Root Cause Analysis",
        "GUI Testing",
        "Back-End Testing",
        "Interface Testing",
        "Batch Testing",
        "Performance Testing",
        "Test Data",
        "Traceability Matrix",
        "Test Strategy",
        "Test Execution",
        "Defect Tracking",
        "SQL Server",
        "Oracle",
        "TOAD",
        "Database Testing",
        "ETL Process",
        "Unix Commands",
        "SharePoint",
        "Webex",
        "Skype",
        "Microsoft Office",
        "Microsoft Word",
        "Excel",
        "Visio",
        "Jira",
        "Selenium",
        "Mocha",
        "Chai",
        "Automation Frameworks",
        "Defect Management Tools",
        "SQL",
        "PL/SQL",
        "Database Queries",
        "Agile",
        "Scrum",
        "Continuous Integration (CI)",
        "Continuous Deployment (CD)",
        "Requirements Traceability",
        "Test Deliverables",
        "Health Industry",
        "Healthcare Solutions",
        "Health Outcomes",
        "Problem-Solving",
        "Team Collaboration",
        "Customer Support",
        "Operational Excellence",
        "Business Knowledge",
        "Customer Business Requirements",
        "Training Requirements",
        "Functional Requirements",
        "Technical Requirements",
        "Client Upgrades",
        "Regression Testing",
        "Remediation",
        "Production Support",
        "Troubleshooting",
        "Support Requests",
        "DevOps",
        "Security",
        "Infrastructure Teams",
        "Compliance",
        "Documentation",
        "Business-Level Documentation",
        "Technical Documentation",
        "Vue 2",
        "Vue 3",
        "PHP",
        "Data Model Design",
        "Git-based Source Control",
        "Model-View-Controller (MVC)",
        "Totara Development",
        "Moodle Development",
        "Drupal Development",
        "WordPress Development",
        "Atlassian Tools",
        "Jira",
        "Confluence",
        "BeHat Testing Framework",
        "AWS Services",
        "AWS Code Family",
        "AWS Lambda",
        "AWS IAM",
        "AWS ACM",
        "React",
        "Angular",
        "Svelte",
        "Type Script",
        "G Script",
        "Networking",
        "Programming",
        "Frameworks",
        "APIs",
        "UX/UI",
        "Hooks",
        "Mongo",
        "Atlas",
        "NoSQL",
        "Jenkins",
        "CI/CD",
        "SDET",
        "VueJS",
        "Cisco",
        "Comptia",
        "Android",
        "IoS",
        "Linux",
        "Windows",
        "Apple",
        "OS",
        "MAC",
        "VM",
        "Virtual Machine",
        "Salesforce",
        "MBA",
        "BA",
        "BS",
        "Bachelors",
        "Masters",
        "Doctorates",
        "Capstone",
        "SRS",
        "Compliance",
        "Analyst",
        "Data Scraping",
        "Web Scraping",
        "Web Automation",
        "Web Testing",
    ];

    let resume = {
        "Work Experience": [
            {
                title: "Full Stack Engineer",
                companyInfo: "Design Hedge, Las Vegas NV",
                employmentDetails: "May 2024 - Sept 2024 (5 months), Freelance",
                details: [
                    "Led the creation of a SaaS product, handling both front-end and back-end development.",
                    "Developed a comprehensive platform using the Svelte web framework from scratch.",
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
                    "Preflect Ads, a start up that is funded by Mark Cuban in helping small companies market themselves online.",
                    "Created frontend solutions with Svelte for a Drag & Drop Ad Image Pairing, Booking Widget, Cancellation Widget.",
                    "Helped with backend code for various APIs including Facebook (Meta) and ChatGPT to enhance users marketing.",
                    "Engaged in ongoing learning and adaptation from Web Development and UX/UI Design.",
                    "Managed the site through details, layouts, and bug fixes.",
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
                courses : ["Scripting and Programming Foundations", "Software Engineering", "Software Design and Quality Assurance", "User Experience Design"],
            },
            {
                degree: "Associate in Applied Sciences, Computing and Information Technology - Programming",
                institution: "College of Southern Nevada, Las Vegas NV",
                duration: "JANUARY 2017 - AUGUST 2021",
                courses : ["College Mathematics", "Technical Physics", "Network+", "Web Development", "Project Management", "Advanced C++", "Advanced Java"],
            },
            {
                degree: "Associate in Applied Sciences, Computing and Information Technology - Databases",
                institution: "College of Southern Nevada, Las Vegas NV",
                duration: "JANUARY 2017 - AUGUST 2021",
                courses : ["Database Concepts and SQL", "Database Administration", "Oracle PL/SQL Programming I"],
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
                <div class="flex text-nowrap gap-2">
                    {#each education.courses as course, i}
                        <caption>{@html course}</caption>{i < education.courses.length - 1 ? "|" : ""}
                    {/each}
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
    <div class="fixed top-0 left-0 -z-50 select-none opacity-[.01]">
        {#each keywords as keyword}
            {keyword}&nbsp;
        {/each}
    </div>
</div>