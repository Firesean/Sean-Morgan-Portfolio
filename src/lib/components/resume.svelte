<script>
    let resume = {
        "Work Experience": [
            {
                title: "Full Stack Engineer",
                companyInfo: "Design Hedge, Las Vegas NV",
                employmentDetails: "May 2024 - PRESENT, Freelance",
                details: [
                    "Developed a comprehensive platform using Svelte, Node.js, Vercel, Supabase, and D3.js",
                    "Connected and integrated APIs including Stripe for payment processing, Supabase for database and authentication, Google APIs for user authentication, and SendGrid for email communication",
                    "Assisted in managing a small team to ensure project milestones were met",
                    "Led the creation of a SaaS product, handling both front-end and back-end development",
                ],
            },
            {
                title: "Software Engineer",
                companyInfo: "Preflect, Las Vegas NV",
                employmentDetails: "JULY 2023 - MAY 2024 (11 months), Full-time",
                details: [
                    "Created robust front-end solutions using Node.js, Svelte, TailwindCSS, and PostCSS",
                    "Integrated various APIs including Facebook and ChatGPT to enhance platform capabilities",
                    "Engaged in ongoing learning and adaptation to tackle company-specific challenges",
                    "Applied UI/UX design principles to improve user experience and interface design",
                ],
            },
            {
                title: "Quality Assurance Analyst",
                companyInfo: "The Influential Network, Las Vegas NV",
                employmentDetails: "DECEMBER 2020 - JULY 2023 (2 years 8 months), Full-time",
                details: [
                    "Utilized Selenium, Mocha, and Chai in Node.js to automate testing processes",
                    "Conducted data entry and data scraping tasks to support various projects",
                    "Performed back-end testing with Kubernetes Pods to ensure system reliability",
                ],
            },
            {
                title: "General Clerk II",
                companyInfo: "Opportunity Village, Nellis AFB NV",
                employmentDetails: "SEPTEMBER 2018 - NOVEMBER 2020 (2 Years 3 months), Full-time",
                details: [
                    "Successfully transitioned from Food Service Sanitation to General Clerk II",
                    "Managed and distributed mail across the base efficiently",
                    "Maintained a Secret Government Security Clearance",
                ],
            }
        ],
        "Education": [
            {
                degree: "Bachelors in Computer Science (Incomplete)",
                institution: "Western Governors University, Salt Lake City UT",
                duration: "JANUARY 2022 - MARCH 2023",
                courses: ["Introduction to IT", "Scripting and Programming", "Advanced Java", "Software Engineering"]
            },
            {
                degree: "Associate in Applied Sciences for Computing and Information Science - Programming",
                institution: "College of Southern Nevada, Las Vegas NV",
                duration: "JANUARY 2017 - AUGUST 2021",
                courses: ["College Math", "Networking +", "Advanced Java", "Advanced C++", "Web Development", "C Programming"]
            },
            {
                degree: "Associate in Applied Sciences for Computing and Information Science - Databases",
                institution: "College of Southern Nevada, Las Vegas NV",
                duration: "JANUARY 2017 - AUGUST 2021",
                courses: ["Database Concepts and SQL", "Project Management", "Computer Security", "Oracle", "Database Adminstration"],
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
        <h2>Work Experience</h2>
        {#each resume["Work Experience"] as job}
            <div class="mb-3">
                    <h3>{job.title}</h3>
                    <i>{job.companyInfo}</i>
                <h4>{job.employmentDetails}</h4>
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
                <i>{education.institution}</i>
                <caption class="flex flex-nowrap gap-2">
                    {#each education.courses as course, i}
                        {course}{#if i < education.courses.length - 1}<caption class='px-0.5'>|</caption>{/if}
                    {/each}
                </caption>
                <caption class="text-left">{education.duration}</caption>
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