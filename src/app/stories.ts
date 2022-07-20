export interface Story {
    category: string;
    title: string;
    desc: string;
    alt: string;
    src: string;
}

export const stories = [
    {
        category: "about me",
        title: "how it began",
        desc: "I started my work in banking in the branch business. I later moved to Bank IT.",
        alt: "beginning",
        src: "./assets/img/walk-line.png"
    },
    {
        category: "about me",
        title: "what I am excited about",
        desc: "I am passionate about programming and really enjoy developing programs that help people do their jobs more efficiently.",
        alt: "hobbies",
        src: "./assets/img/heart-line.png"
    },
    {
        category: "about me",
        title: "what I am looking for",
        desc: "My job in IT was a mixture of infrastructure engineering and programming. I realized early on that I enjoy development more. I found a suitable training course for front- and backend developers at the Developer Akademie.",
        alt: "quest",
        src: "./assets/img/search-line.png"
    },
    {
        category: "about me",
        title: "what I want to achieve",
        desc: "I want to be part of one of the most expansive and widespread software technologies like WEB and to make the world better and better for the user every day.",
        alt: "objectives",
        src: "./assets/img/flight-takeoff-line.png"
        // Ich möchte teilhaben an einer der expansivsten und  weitverbreitesten Software Technologien wie das Web und jeden Tag die Welt für den Nutzer besser und besser zu machen.
    }
];