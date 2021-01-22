const template = document.createElement('template');
template.innerHTML = `

<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container">
        老翰的儲藏室
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
              <a class="nav-link" href="/cheatsheet.html">小抄</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/old-entries.html">庫存</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/about.html">關於</a>
            </li>
            
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="https://github.com/jchans">
                Repo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

`

document.body.appendChild(template.content);