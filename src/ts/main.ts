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
    let projectContainer: HTMLDivElement =
      document.createElement("div");
    let projectImage: HTMLImageElement =
      document.createElement("img");

    projectContainer.classList.add("project");
    projectImage.classList.add("project__image");

    projectImage.src = projectItems[i].image;
    projectImage.alt = projectItems[i].name;

    projectContainer.appendChild(projectImage);
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
