function header() {
  const headerContainer = document.querySelector(".header-container");
  let html = `
    <header>
      <nav>
        <ul class="navigation">
          <li class="nav-to-home"><a href="${
            document.title === "Frustrated Cat"
              ? "./index.html"
              : "../../index.html"
          }">Frustrated Cat</a></li>
          <li class="li-gap"><a href="${
            document.title === "Frustrated Cat"
              ? "./pages/fiction/fiction.html"
              : "../../pages/fiction/fiction.html"
          }">Fiction</a></li>
          <li class="li-gap"><a href="${
            document.title === "Frustrated Cat"
              ? "./pages/articles/articles.html"
              : "../../pages/articles/articles.html"
          }">Articles</a></li>
          <li class="li-gap"><a href="${
            document.title === "Frustrated Cat"
              ? "./pages/photography/photography.html"
              : "../../pages/photography/photography.html"
          }">Photography</a></li>
          <li class="li-gap"><a href="${
            document.title === "Frustrated Cat"
              ? "./pages/reading-list/reading-list.html"
              : "../../pages/reading-list/reading-list.html"
          }">Reading List</a></li>
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
