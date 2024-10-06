function header() {
  const headerContainer = document.querySelector(".header-container");
  let html = `
    <header>
      <a href="${
        document.title === "Frustrated Cat"
          ? "./index.html"
          : "../../index.html"
      }">Frustrated Cat</a>
      <nav>
        <ul>
          <li><a href="${
            document.title === "Frustrated Cat"
              ? "./pages/stories/stories.html"
              : "../../pages/stories/stories.html"
          }">Stories</a></li>
          <li><a href="${
            document.title === "Frustrated Cat"
              ? "./pages/articles/articles.html"
              : "../../pages/articles/articles.html"
          }">Articles</a></li>
          <li><a href="${
            document.title === "Frustrated Cat"
              ? "./pages/photography/photography.html"
              : "../../pages/photography/photography.html"
          }">Photography</a></li>
          <li><a href="${
            document.title === "Frustrated Cat"
              ? "./pages/reading-list/reading-list.html"
              : "../../pages/reading-list/reading-list.html"
          }">Reading List</a></li>
          <li><button><a href="https://www.instagram.com/jaredreadsandruns"><span>Instagram</span></a></button></li>
          <li><button><a href="https://www.github.com/frustratedcat"><span>Github</span></a></button></li>
          <li><button>dark/light</button></li>
        </ul>
      </nav>
    </header>
    `;
  headerContainer.insertAdjacentHTML("beforeend", html);
}

function footer() {
  const footerContainer = document.querySelector(".footer-container");
  const date = new Date();
  let year = date.getFullYear();
  let html = `
    <footer>
      &copy; Frustrated Cat ${year}
    </footer>
    `;
  footerContainer.insertAdjacentHTML("beforeend", html);
}

header();
footer();
