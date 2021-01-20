const template = document.createElement('template');
template.innerHTML = `

<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="/">老翰的儲藏室</a>
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
              <a class="nav-link" href="/cheatsheet.html">CheatSheets</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/old-entries.html">舊記事</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/about.html">關於老翰</a>
            </li>
            
          </ul>
          <ul class="navbar-nav">
          </ul>
        </div>
      </div>
    </nav>

`

document.body.appendChild(template.content);