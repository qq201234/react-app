function Menubar(props) {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            react路由網站
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  首頁
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  產品
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  會員
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ">關於我們</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Menubar
