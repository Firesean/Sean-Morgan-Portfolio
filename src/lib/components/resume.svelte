<script>
    let resume = {
        "Work Experience": [
            {
                title: "Full Stack Engineer",
                companyInfo: "Design Hedge, Las Vegas NV",
                employmentDetails: "May 2024 - PRESENT, Self-Employed",
                details: [
                    "Platform Creation using Svelte, Node.js, Vercel, Supabase, D3",
                    "Connected APIs with Stripe, Supabase, Google, Sendgrid",
                    "Assisted team management",
                    "Solo/Small Team for SaaS Product Creation",
                ],
            },
            {
                title: "Software Engineer",
                companyInfo: "Preflect, Las Vegas NV",
                employmentDetails: "JULY 2023 - MAY 2024 (11 months), Full-time",
                details: [
                    "Front-end solutions with Node.js, Svelte, TailwindCSS, PostCSS",
                    "Facebook, ChatGPT, Outside APIs",
                    "Continuous learning for company challenges",
                    "UI / UX Design Principles",
                ],
            },
            {
                title: "Quality Assurance Analyst",
                companyInfo: "The Influential Network, Las Vegas NV",
                employmentDetails: "DECEMBER 2020 - JULY 2023 (2 years 8 months), Full-time",
                details: [
                    "Selenium, Mocha & Chai in Node.js",
                    "Data entry, Data scraping",
                    "Back-end testing with Kubernetes Pods",
                ],
            },
            {
                title: "General Clerk II",
                companyInfo: "Opportunity Village, Nellis AFB NV",
                employmentDetails: "SEPTEMBER 2018 - NOVEMBER 2020 (2 Years 3 months), Full-time",
                details: [
                    "Transitioned from Food Service Sanitation to a General Clerk II",
                    "Distributed mail across base",
                    "Secret Government Security Clearance",
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
                degree: "Computing and Information Science - Programming",
                institution: "College of Southern Nevada, Las Vegas NV",
                duration: "JANUARY 2017 - AUGUST 2021",
            },
            {
                degree: "Computing and Information Science - Databases",
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
                <caption>{education.duration}</caption>
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