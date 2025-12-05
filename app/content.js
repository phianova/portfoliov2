import { icons } from "./icons";
export const myStack = [
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "TypeScript",
    "SQL",
    "+ more!"
]

export const workProjects = [
    {
        name: "NX10",
        description: "React Native app, Serverless AWS backend, Next.js dashboard",
        mainimage: "/work/project1image.png",
        secondaryImage: "",
        techstack: ["React Native", "Swift", "Xcode", "AWS", "Serverless", "Next.js", "TailwindCSS", "TypeScript"],
        story: "A complex project involving a React Native app, multiple custom iOS extensions in Swift, a Serverless AWS backend with Kinesis streams for real time data ingestion and complex analysis, and a Next.js data dashboard.",
        link: "https:nx10.me",
        id: "project1"
    },
    {
        name: "SOPHIA",
        description: "AI Assistant for SOP-generating administrative tool",
        mainimage: "/work/project2image.png",
        secondaryImage: "/work/project2image2.png",
        techstack: ["React", "Next.js", "TailwindCSS", "OpenAI", "C#", "Azure"],
        story: "I built an AI Assistant frontend for an administrative tool, and contributed to backend logic and prompts using the gpt-4o API.",
        link: "",
        id: "project2"
    },
    {
        name: "Success at School",
        description: "Forum and refreshed UI for a school community platform",
        mainimage: "/work/project3image.png",
        secondaryImage: "/work/project3image2.png",
        techstack: ["React", "Next.js", "TailwindCSS", "PostgreSQL", "PHP", "GitHub"],
        story: "I built the frontend for a new forum for this community platform in React; contributing to backend updates in PHP.",
        link: "",
        id: "project3"
    },
]

export const personalProjects = [
    {
        name: "KettleOn",
        description: "Next.js & TypeScript - team-building app for remote workers",
        mainimage: "/personal/project1image.png",
        techstack: ["Node.js", "MongoDB", "tRPC", "TypeScript", "Kinde", "Next.js", "TailwindCSS", "GitHub"],
        story: `I built this Next.js full-stack app as part of a team, focusing on the backend and authentication.
          I used Kinde and tRPC, connecting to a MongoDB noSQL database. 
          KettleOn contains a range of scored team-building activities.
          Managers can register their team and add members using a form I built to interact with the Kinde API.`,
        link: "https://kettle-on.vercel.app",
        repo: "https://github.com/phianova/KettleOn",
        id: "project1"
    },
    {
        name: "Stargazer",
        description: "Next.js app using OpenWeather API",
        mainimage: "/personal/project2image.png",
        techstack: ["React", "Next.js", "TailwindCSS", "OpenWeather API", "GitHub"],
        story: "I built this app to monitor weather conditions for stargazing, connecting a Next.js frontend to the OpenWeather API.",
        link: "https://stargazer-puce.vercel.app",
        repo: "https://github.com/phianova/stargazer",
        id: "project3"
    },
    {
        name: "Ninian James Frenguelli",
        description: "Next.js & TailwindCSS - online CV/portfolio for academic",
        mainimage: "/personal/project3image.png",
        techstack: ["React", "Next.js", "TailwindCSS", "GitHub"],
        story: `I built this Next.js app for an academic who needed an online CV to showcase his research contributions and recent findings. I used Next.js components to create a responsive container for some very large SVG graphs he wanted to display.`,
        link: "https://ninianjames.github.io",
        repo: "https://github.com/phianova/njf",
        id: "project4"
    },
]

export const skills = [
    {
        name: "React & Next.js",
        isAccordion: true,
        accordionId: "react",
        icon: icons["React"],
        description: "2 years' experience building frontends in React and Next.js",
        sources: [
            { name: "NX10", href: "/?id=project1" },
            { name: "SOPHIA", href: "/?id=project2" },
            { name: "Success at School", href: "/?id=project3" },
            { name: "KettleOn", href: "/?id=project1" },
            { name: "Stargazer", href: "/?id=project3" },
            { name: "NJF", href: "/?id=project4" }
        ],
    },
    {
        name: "Node.js",
        isAccordion: true,
        accordionId: "node",
        icon: icons["Node.js"],
        description: "2 years' experience building backends in Node.js",
        sources: [
            { name: "NX10", href: "/?id=project1" },
            { name: "KettleOn", href: "/?id=project1" },
        ],
    },
    {
        name: "TypeScript",
        isAccordion: true,
        accordionId: "typescript",
        icon: icons["TypeScript"],
        description: "2 years' experience building full-stack applications in TypeScript",
        sources: [
            { name: "NX10", href: "/?id=project1" },
            { name: "SOPHIA", href: "/?id=project2" },
            { name: "Success at School", href: "/?id=project3" },
            { name: "KettleOn", href: "/?id=project1" },
        ],
    },
    {
        name: "JavaScript",
        isAccordion: true,
        accordionId: "javascript",
        icon: icons["JavaScript"],
        description: "2 years' experience building full-stack applications in JavaScript",
        sources: [
            { name: "NX10", href: "/?id=project1" },
            { name: "SOPHIA", href: "/?id=project2" },
            { name: "Success at School", href: "/?id=project3" },
            { name: "KettleOn", href: "/?id=project1" },
            { name: "Stargazer", href: "/?id=project3" },
            { name: "NJF", href: "/?id=project4" }
        ],
    },
    {
        name: "HTML/CSS & TailwindCSS",
        isAccordion: true,
        accordionId: "html",
        icon: icons["HTML/CSS"],
        description: "2 years'experience building Next.js sites and HTML pages using TailwindCSS and other libraries",
        sources: [
            { name: "NX10", href: "/?id=project1" },
            { name: "KettleOn", href: "/?id=project1" },
            { name: "SOPHIA", href: "/?id=project2" },
            { name: "Success at School", href: "/?id=project3" },
            { name: "Stargazer", href: "/?id=project3" },
            { name: "NJF", href: "/?id=project4" }
        ],
    },
    {
        name: "SQL & PostgreSQL",
        isAccordion: true,
        accordionId: "sql",
        icon: icons["SQL"],
        description: "3 years' experience using PostgreSQL to analyse large administrative datasets and MySQL to maintain databases.",
        sources: [
            { name: "CV", href: "/SophiaWarrenCV.pdf" },
        ],
    },
    {
        name: "AWS",
        isAccordion: true,
        accordionId: "aws",
        icon: icons["AWS"],
        description: "2 years' experience using AWS to deploy and manage applications. Certified Cloud Practitioner. I've used Lambda, S3, DynamoDB, CloudWatch, Kinesis and more.",
        sources: [
            { name: "NX10", href: "/?id=project1" },
            { name: "LinkedIn", href: "https://www.linkedin.com/in/sophia-warren-48207913b/" },
        ],
    },
    {
        name: "Git & GitHub",
        isAccordion: true,
        accordionId: "git",
        icon: icons["GitHub"],
        description: "4 years' experience using Git and GitHub version control in a professional context",
        sources: [
            { name: "NX10", href: "/?id=project1" },
            { name: "Success at School", href: "/?id=project3" },
            { name: "KettleOn", href: "/?id=project1" },
            { name: "Stargazer", href: "/?id=project3" },
            { name: "NJF", href: "/?id=project4" }
        ],
    },
    {
        name: "MongoDB & Express",
        isAccordion: true,
        accordionId: "mongodb",
        icon: icons["MongoDB"],
        description: "6 months' experience building full-stack MERN stack applications",
        sources: [
            { name: "KettleOn", href: "/?id=project1" },
        ],
    },
    {
        name: "Stata",
        isAccordion: true,
        accordionId: "stata",
        icon: icons["Stata"],
        description: "3 years' experience using Stata to analyse large administrative datasets",
        sources: [
            { name: "CV", href: "/SophiaWarrenCV.pdf" },
        ],
    },
]

export const softSkills = [
    {
        name: "Technical writing",
        isAccordion: true,
        accordionId: "writing",
        icon: icons["Technical writing"],
        description: "3 years' experience explaining complex welfare policy details and software development updates to a range of audiences both external and internal",
        sources: [
            { name: "CV", href: "/SophiaWarrenCV.pdf" },
        ],
    },
    {
        name: "Communication",
        isAccordion: true,
        accordionId: "communication",
        icon: icons["Communication"],
        description: "3 years' experience in the advice sector, followed by 3 years' experience running training sessions, producing publishable written work, and presenting technical findings to a range of audiences",
        sources: [
            { name: "CV", href: "/SophiaWarrenCV.pdf" },
        ],
    },
    {
        name: "Software testing",
        isAccordion: true,
        accordionId: "testing",
        icon: icons["Software testing"],
        description: "3 years' experience manually testing software and contributing to integration testing of rules engine",
        sources: [
            { name: "CV", href: "/SophiaWarrenCV.pdf" },
        ],
    },
]

export const someKnowledge = [
    {
        name: "R",
        icon: icons["R"],
    },
    {
        name: "Tableau",
        icon: icons["Tableau"],
    },
    {
        name: "Python",
        icon: icons["Python"],
    },
]
