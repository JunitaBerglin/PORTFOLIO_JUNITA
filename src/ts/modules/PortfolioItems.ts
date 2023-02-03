export { PortfolioItem, portfolioItems };

class PortfolioItem {
  constructor(
    public name: string,
    public image: string,
    public describtion: string,
    public id: number
  ) {}
}

// klassen som portfolio items skapas utifrån

let PortfolioItem1 = new PortfolioItem(
  "Julkul",
  "../../attributes/bild1.1.png",
  "Skolarbete 2022",
  1
);
let PortfolioItem2 = new PortfolioItem(
  "todo",
  "../../attributes/bild2.1.png",
  "Skolarbete 2022",
  2
);
let PortfolioItem3 = new PortfolioItem(
  "Julkul",
  "../../attributes/bild3.1.png",
  "Skolarbete 2022",
  3
);

let portfolioItems = [PortfolioItem1, PortfolioItem2, PortfolioItem3];
