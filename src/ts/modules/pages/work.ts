import { projects } from "../projectList";

export function work() {
  const workPageContainer: HTMLDivElement =
    document.createElement("div");
  const workPageTitle: HTMLParagraphElement =
    document.createElement("p");
  workPageContainer.setAttribute("id", "work");
  workPageContainer.classList.add("work");
  workPageTitle.classList.add("work__title");
  workPageTitle.innerHTML = "#work";
  workPageContainer.appendChild(workPageTitle);
  document.body.appendChild(workPageContainer);

  projects.forEach((project) => {
    const projectContainer: HTMLDivElement =
      document.createElement("div");
    const projectTitle: HTMLParagraphElement =
      document.createElement("p");
    const projectImageDiv: HTMLDivElement =
      document.createElement("div");
    const projectMobileImage: HTMLImageElement =
      document.createElement("img");
    const projectDesktopImage: HTMLImageElement =
      document.createElement("img");
    const projectDescription: HTMLSpanElement =
      document.createElement("span");

    projectContainer.classList.add("project");
    projectTitle.classList.add("project__title");
    projectImageDiv.classList.add("project__imgcontainer");
    projectMobileImage.classList.add("project__img--mobile");
    projectDesktopImage.classList.add("project__img--desktop");
    projectDescription.classList.add("project__describe");

    projectTitle.innerHTML = project.name;
    projectMobileImage.alt = project.image + " mobile";
    projectDescription.innerHTML = project.describtion;

    projectContainer.appendChild(projectTitle);
    projectImageDiv.appendChild(projectDesktopImage);
    projectImageDiv.appendChild(projectMobileImage);
    projectContainer.appendChild(projectImageDiv);
    projectContainer.appendChild(projectDescription);

    workPageContainer.appendChild(projectContainer);
  });

  document.body.appendChild(workPageContainer);
}
