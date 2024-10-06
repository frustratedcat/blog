function header() {
  const headerContainer = document.querySelector(".header-container");
  let html = `
    <header>
      <h1><a href="./index.html">Frustrated Cat</a></h1>
      <nav>
        <ul>
          <li><a href="">Stories</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Photography</a></li>
          <li><a href="">Reading List</a></li>
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
