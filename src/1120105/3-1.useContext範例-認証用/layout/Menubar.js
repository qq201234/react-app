import { Link } from 'react-router-dom'

function Menubar(props) {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-primary bg-gradient">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand">
            react
          </Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">
                  首頁
                </Link>
              </li>
              <li class="nav-item">
                <Link to="user/login" class="nav-link">
                  登入
                </Link>
              </li>
              <li class="nav-item">
                <Link to="user/logout" class="nav-link">
                  登出
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Menubar
