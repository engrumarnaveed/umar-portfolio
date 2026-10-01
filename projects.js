const projects = [
    {
        title: "Fashion E-Commerce Website",
        description: "A modern fashion e-commerce frontend with a responsive layout, product sections and clean user interface.",
        technologies: ["HTML", "CSS"],
        liveLink: "https://engrumarnaveed.github.io/FIRST-project/",
        githubLink: ""
    },

    {
        title: "JavaScript Calculator",
        description: "A responsive calculator built using HTML, CSS and JavaScript with a clean interface and arithmetic functionality.",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://engrumarnaveed.github.io/javascript-calculator/",
        githubLink: "https://github.com/engrumarnaveed/javascript-calculator"
    },

    {
        title: "Modern Web Design",
        description: "A clean and modern responsive frontend website created using HTML and CSS.",
        technologies: ["HTML", "CSS"],
        liveLink: "https://engrumarnaveed.github.io/Modern-Web-Design-/",
        githubLink: ""
    },

    {
        title: "Responsive Login Form",
        description: "A clean and responsive login interface designed using HTML and CSS.",
        technologies: ["HTML", "CSS"],
        liveLink: "https://engrumarnaveed.github.io/login-form-in-html-css/",
        githubLink: ""
    }
];


/* =========================
   DISPLAY PROJECTS
========================= */

const projectsGrid = document.getElementById("projects-grid");

projects.forEach((project) => {

    const projectCard = document.createElement("div");

    projectCard.classList.add("project-card");


    const technologiesHTML = project.technologies
        .map((technology) => `<span>${technology}</span>`)
        .join("");


    projectCard.innerHTML = `

        <div class="project-preview">

            <div class="project-number">
                &lt;/&gt;
            </div>

        </div>


        <div class="project-content">

            <h3>
                ${project.title}
            </h3>

            <p>
                ${project.description}
            </p>


            <div class="project-tech">
                ${technologiesHTML}
            </div>


            <div class="project-links">

                ${
                    project.liveLink
                        ? `<a href="${project.liveLink}" target="_blank" class="project-btn">
                            Live Demo
                           </a>`
                        : ""
                }

                ${
                    project.githubLink
                        ? `<a href="${project.githubLink}" target="_blank" class="project-btn github-btn">
                            GitHub
                           </a>`
                        : ""
                }

            </div>

        </div>
    `;

    projectsGrid.appendChild(projectCard);

});