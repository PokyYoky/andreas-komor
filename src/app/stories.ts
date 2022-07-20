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
        desc: "",
        alt: "beginning",
        src: "./assets/img/walk-line.png"
    },
    {
        category: "about me",
        title: "what I am excited about",
        desc: "",
        alt: "hobbies",
        src: "./assets/img/heart-line.png"
    },
    {
        category: "about me",
        title: "what I am looking for",
        desc: "",
        alt: "quest",
        src: "./assets/img/search-line.png"
    },
    {
        category: "about me",
        title: "what I want to achieve",
        desc: "",
        alt: "objectives",
        src: "./assets/img/flight-takeoff-line.png"
    }
];