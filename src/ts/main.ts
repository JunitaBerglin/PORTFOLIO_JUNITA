import { projects } from "./modules/projectList";
import { Projects } from "./modules/Projects";

let mainWrapper = document.getElementById(
  "mainWrapper"
) as HTMLDivElement;

const projectOnDisplay: HTMLElement =
  document.createElement("section");

projectOnDisplay.classList.add("projectOnDisplay");

let projectsOpen = false;

export function work(projectItems: Projects[]) {
  projectsOpen = true;
  document.getElementById("portfolioIcon")?.classList.add("open");
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
    projectButton.innerHTML = "Github!";

    projectImage.addEventListener("click", () => {
      document.location.href =
        "https://github.com/JunitaBerglin?tab=repositories";
    });

    projectContainer.appendChild(projectName);
    projectContainer.appendChild(projectImage);
    projectContainer.appendChild(projectDescription);
    projectContainer.appendChild(projectButton);
  }
}
let projectClick = document.getElementById(
  "projectClick"
) as HTMLDivElement;

projectClick.addEventListener("click", () => {
  if (!projectsOpen) {
    work(projects);
  } else {
    let projectContainer: HTMLDivElement = document.getElementById(
      "workWrapper"
    ) as HTMLDivElement;
    projectContainer.innerHTML = "";
    projectsOpen = false;
    document
      .getElementById("portfolioIcon")
      ?.classList.remove("open");
  }
});

/**
 **************************** ABOUT***********************************
 */

const aboutOnDisplay: HTMLElement = document.createElement("section");

aboutOnDisplay.classList.add("aboutOnDisplay");

let aboutOpen = false;

function about() {
  let aboutContainer: HTMLDivElement = document.getElementById(
    "aboutWrapper"
  ) as HTMLDivElement;

  aboutOpen = true;
  document.getElementById("aboutIcon")?.classList.add("open");
  aboutOnDisplay.innerHTML = "";

  let aboutDescription: HTMLParagraphElement =
    document.createElement("p");
  let aboutImage: HTMLImageElement = document.createElement("img");

  aboutImage.classList.add("about__img");
  aboutDescription.classList.add("about__description");
  aboutContainer.classList.add("aboutWrapper");

  aboutDescription.innerHTML =
    "Hello, I’m Junita! I am a junior front end developer, currently studying at Medieinstitutet in Stockholm. As a former occupational therapist I always have a creative perspective in mind and I love what innovation can do for people. Next up for me is internship this autumn. I hope to find a place where I can contribute aswell as learn a develop my front end skills.";

  aboutContainer.appendChild(aboutDescription);
}

let aboutClick = document.getElementById(
  "aboutClick"
) as HTMLDivElement;

aboutClick.addEventListener("click", () => {
  if (!aboutOpen) {
    about();
  } else {
    let aboutWrapper: HTMLDivElement = document.getElementById(
      "aboutWrapper"
    ) as HTMLDivElement;
    aboutWrapper.innerHTML = "";
    aboutOpen = false;
    document.getElementById("aboutIcon")?.classList.remove("open");
  }
});
