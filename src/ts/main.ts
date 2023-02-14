// import { contact } from "./modules/pages/contact";
// import { startpage } from "./modules/pages/startpage";

import { projects } from "./modules/projectList";
import { Projects } from "./modules/Projects";

const projectOnDisplay: HTMLElement =
  document.createElement("section");

projectOnDisplay.classList.add("projectOnDisplay");

function work(projectItems: Projects[]) {
  projectOnDisplay.innerHTML = "";

  for (let i = 0; i < projectItems.length; i++) {
    let projectContainer: HTMLDivElement = document.getElementById(
      "workWrapper"
    ) as HTMLDivElement;
    let projectImage: HTMLImageElement =
      document.createElement("img");
    let projectName: HTMLHeadingElement =
      document.createElement("h3");
    let projectDescription: HTMLParagraphElement =
      document.createElement("p");
    // let link = document.createElement("a");
    let projectButton: HTMLButtonElement =
      document.createElement("button");

    projectContainer.classList.add("project");
    projectImage.classList.add("project__image");
    projectName.classList.add("project__name");
    projectDescription.classList.add("project__description");
    projectButton.classList.add("project__button");

    projectImage.src = projectItems[i].image;
    projectImage.alt = projectItems[i].name;
    projectName.innerHTML = projectItems[i].name;
    projectDescription.innerHTML = projectItems[i].describtion;
    projectButton.innerHTML = "Testa sidan!";

    // link.setAttribute("target", "new");
    // link.appendChild(projectImage);

    projectImage.addEventListener("click", () => {
      document.location.href = "https://junitaberglin.se/todo/";
    });

    projectContainer.appendChild(projectName);
    projectContainer.appendChild(projectImage);
    projectContainer.appendChild(projectDescription);
    projectContainer.appendChild(projectButton);
    projectOnDisplay.appendChild(projectContainer);

    document.body.appendChild(projectContainer);
  }
}
let projectClick = document.getElementById(
  "projectClick"
) as HTMLDivElement;

projectClick.addEventListener("click", () => {
  work(projects);
});
