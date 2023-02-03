/*
import { PortfolioItem } from "./modules/PortfolioItems";

const portfolioDisplay: HTMLElement =
  document.createElement("section");

portfolioDisplay.classList.add("portfolioDisplay");

function createHTML(portfolioItems: PortfolioItem[]) {
  portfolioDisplay.innerHTML = "";

  for (let i = 0; i < portfolioItems.length; i++) {
    let portfolioContainer: HTMLDivElement =
      document.createElement("div");
    let portfolioImage: HTMLImageElement =
      document.createElement("img");

    portfolioContainer.classList.add("portfolio");
    portfolioImage.classList.add("portfolio__image");

    portfolioImage.src = portfolioItems[i].image;
    portfolioImage.alt = portfolioItems[i].name;

    portfolioImage.appendChild(portfolioImage);
    portfolioDisplay.appendChild(portfolioContainer);

    (document.querySelector("main") as HTMLElement).appendChild(
      portfolioDisplay
    );

    portfolioImage.addEventListener("click", () => {
      createHTML(portfolioItems[i]);
    });
  }
}
createHTML();
*/
