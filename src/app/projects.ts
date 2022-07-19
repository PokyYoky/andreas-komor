export interface Project {
    category: string;
    title: string;
    url: string;
    description: string;
    image: string;
}

export const projects = [
    {
        category: "JavaScript",
        title: "El Pollo Loco",
        url: "https://andreas-komor.developerakademie.net/Projekte/ElPolloLoco/index.html",
        description: "A crazy jump & run game in the desert of Mexico...",
        image: "./assets/img/elpolloloco_640.jpg"
    },
    {
        category: "",
        title: "Ring of Fire",
        url: "",
        description: "",
        image: ""
    },
    {
        category: "JavaScript",
        title: "Join",
        url: "",
        description: "A kanban board to support SCRUM",
        image: "./assets/img/join_640.jpg"
    }
];