import { projects } from "./modules/projectList";
import { Projects } from "./modules/Projects";
import { contact } from "./modules/pages/contact";

let mainWrapper = document.getElementById("mainWrapper") as HTMLDivElement;

const projectOnDisplay: HTMLElement = document.createElement("section");

projectOnDisplay.classList.add("projectOnDisplay");

let projectsOpen = false;

export function work(projectItems: Projects[]) {
  projectsOpen = true;
  document.getElementById("portfolioIcon")?.classList.add("open");
  projectOnDisplay.innerHTML = "";

  let projectContainer: HTMLDivElement = document.getElementById(
    "workWrapper"
  ) as HTMLDivElement;

  for (let i = 0; i < projectItems.length; i++) {
    let container: HTMLDivElement = document.createElement("div");
    let projectImage: HTMLImageElement = document.createElement("img");
    let projectName: HTMLHeadingElement = document.createElement("h3");
    let projectDescription: HTMLParagraphElement = document.createElement("p");
    let websiteLink: HTMLAnchorElement = document.createElement("a");
    let githubLink: HTMLAnchorElement = document.createElement("a");

    container.classList.add("project");
    projectImage.classList.add("project__image");
    projectName.classList.add("project__name");
    projectDescription.classList.add("project__description");
    websiteLink.className = "project__websidelink";
    githubLink.className = "project__link";

    projectImage.src = projectItems[i].image;
    projectImage.alt = projectItems[i].name;
    projectName.innerHTML = projectItems[i].name;
    projectDescription.innerHTML = projectItems[i].describtion;
    websiteLink.href = projectItems[i].link;
    githubLink.href = projectItems[i].githublink;

    websiteLink.innerHTML = " testa sidan! ";
    githubLink.innerHTML = "<i class='bi bi-github'></i>";

    container.appendChild(projectName);
    container.appendChild(projectImage);
    container.appendChild(projectDescription);
    container.appendChild(websiteLink);
    container.appendChild(githubLink);

    projectContainer.appendChild(container);
  }
}
let projectClick = document.getElementById("projectClick") as HTMLDivElement;

projectClick.addEventListener("click", () => {
  if (!projectsOpen) {
    work(projects);
  } else {
    let projectContainer: HTMLDivElement = document.getElementById(
      "workWrapper"
    ) as HTMLDivElement;
    projectContainer.innerHTML = "";
    projectsOpen = false;
    document.getElementById("portfolioIcon")?.classList.remove("open");
  }
});

/**
 **************************** ABOUT*********************************
 */

const aboutOnDisplay: HTMLElement = document.createElement("section");

aboutOnDisplay.classList.add("aboutOnDisplay");

let aboutOpen = false;

function about() {
  let aboutContainer: HTMLDivElement = document.getElementById(
    "aboutWrapper"
  ) as HTMLDivElement;
  let imgContainer: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  aboutOpen = true;
  document.getElementById("aboutIcon")?.classList.add("open");
  aboutOnDisplay.innerHTML = "";

  let aboutDescription: HTMLParagraphElement = document.createElement("p");
  let aboutImage: HTMLImageElement = document.createElement("img");
  aboutImage.classList.add("about__img");
  aboutDescription.classList.add("about__description");
  aboutContainer.classList.add("aboutWrapper");
  imgContainer.classList.add("imgWrapper");

  aboutImage.classList.add("about__img");
  aboutImage.src =
    "https://github.com/JunitaBerglin/PORTFOLIO_JUNITA/main/5dee6bdfe4d308dcb31b05370f3fd3717019671a/src/attributes/IMG_5730_VSCO%20(1).jpg";
  aboutImage.alt = "picture of me!";

  aboutDescription.innerHTML =
    "Hi, I'm Junita! I'm about to complete my front-end developer studies at Medieinstitutet in Stockholm, and I'm thrilled to be starting my search for my first job in this field. With a rich background in mental health care as an occupational therapist for eight years, I bring a wealth of life experience and a knack for creative solutions. At 33, I've honed my social skills and am eager to apply my innovative outlook to the tech world. I'm looking forward to contributing to a team where I can further develop my front-end skills. If you're interested in a chat, please don't hesitate to reach out!";

  aboutContainer.appendChild(aboutDescription);
  imgContainer.appendChild(aboutImage);
  aboutDescription.appendChild(imgContainer);
}

let aboutClick = document.getElementById("aboutClick") as HTMLDivElement;

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

/*************************CONTACT ************************* */

let contactClick = document.getElementById("contactClick") as HTMLDivElement;

contactClick.addEventListener("click", () => {
  contact();
});
