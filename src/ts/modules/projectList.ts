import { Projects } from "./Projects";

// public name: string,
// public image: string,
// public describtion: string,
// public id: number,
// public link: string,
// public githublink: string

export let projects: Projects[] = [
  new Projects(
    "Julkul",
    "https://github.com/JunitaBerglin/PORTFOLIO_JUNITA/blob/main/src/attributes/bild1.1.png?raw=true",
    "As the last part of the course 'Introduction to Javascript' we got the challange (as a group assignment) to build our first checkut",
    1,
    "https://junitaberglin-webshop.netlify.app",
    "https://github.com/JunitaBerglin/sheckout-group-project"
  ),
  new Projects(
    "Todo",
    "https://github.com/JunitaBerglin/javascript-grundkurs/blob/main/src/assets/todoProject.png?raw=true",
    "This project was an assignment in the course 'Introduction to JavaScript'. Creating a To-do list that allows the user to add new tasks to their lists",
    2,
    "https://junitaberglin-todo.netlify.app",
    "https://github.com/JunitaBerglin/javascript-grundkurs"
  ),
  new Projects(
    "Movie search",
    "https://github.com/JunitaBerglin/practice_axios_omdb/blob/main/src/assets/movie_pic.png?raw=true",
    "As a part of the course 'Introduction to JavaScript' we learned to get data from APIs using Fetch and Axios. This movie database made for movies, displays data from OmdbAPI.com.",
    3,
    "https://junitaberglin-moviesearch.netlify.app",
    "https://github.com/JunitaBerglin/practice_axios_omdb"
  ),
  /*  new Projects(
    "Memory",
    "https://github.com/JunitaBerglin/icecream_memory/blob/main/src/assets/Sk%C3%A4rmavbild%202023-02-10%20kl.%2009.46.50.png?raw=true",
    "This is a game I builted on my spare time",
    4
  ),*/
];
