const template = document.createElement('template');
template.innerHTML = `

<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">老翰的儲藏室</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">首頁</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/old-entries.html">舊記事</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/cheatsheet.html">CheatSheet</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/about.html">關於老翰</a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="https://github.com/jchans"
                ><i class="fab fa-github-square"></i
              ></a>
            </li>
            <li class="nav-item d-flex active">
              <a
                class="nav-link fa-lg mx-2"
                href="https://www.linkedin.com/in/hans-chiang-8b890913b/"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                class="nav-link fa-lg mx-2"
                href="https://www.facebook.com/hanschiang86/"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

`

document.body.appendChild(template.content);