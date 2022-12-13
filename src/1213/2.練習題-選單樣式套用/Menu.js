import './Menu.css'

function Menu() {
  return (
    <>
      <ul>
        <li>
          <a>首頁</a>
        </li>
        <li>
          <a className="active">關於我們</a>
        </li>
        <li>
          <a>產品</a>
        </li>
      </ul>
    </>
  )
}

export default Menu
