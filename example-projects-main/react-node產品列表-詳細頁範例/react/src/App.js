import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// 導入所有頁面
import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User'
import Product from './pages/Product/Product'

import NotFoundPage from './pages/NotFoundPage'
import Login from './pages/Login'
// import ProductMen from './pages/ProductMen'
// import ProductWomen from './pages/ProductWomen'
import ProductClothingList from './pages/ProductClothing/ProductClothingList'
import ProductClothingDetail from './pages/ProductClothing/ProductClothingDetail'

import Product3CDetail from './pages/Product3C/Product3CDetail'
import Product3CList from './pages/Product3C/Product3CList'

import List from './pages/Product3CNode/List'
import Detail from './pages/Product3CNode/Detail'

function App() {
  // 會員登入用的狀態 auth=true代表登入
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      {/* 以下是選單連結 */}
      {/* <h1>使用a連結</h1>
      <a href="/login">登入</a>
      <br />
      <a href="/user">會員頁</a>
      <hr /> */}
      <h1>使用Link元件</h1>
      <Link to="/login">登入</Link>
      <br />
      <Link to="/user">會員頁</Link>
      <br />
      <Link to="/product-clothing-list">產品-衣服</Link>
      <br />
      <Link to="/product-3c-list">產品-3C</Link>
      <br />
      <Link to="/product-3c-node-list">產品-3C(Node)</Link>
      <br />
      <Link to="/product">產品頁</Link>
      <br />
      <Link to="/product/men">產品頁(men)</Link>
      <hr />
      {/* 以下為路由對照表 */}
      <Switch>
        <Route path="/login">
          <Login setAuth={setAuth} auth={auth} />
        </Route>
        <Route path="/user">
          <User auth={auth} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        {/* TIP: 路徑長的要往上寫，尤其是有其中有包含同名稱時，
            例如 `/product/men` 中有 `/product`
         */}
        {/* <Route path="/product/men">
          <ProductMen />
        </Route>
        <Route path="/product/women">
          <ProductWomen />
        </Route> */}
        <Route path="/product-3c-node-list">
          <List />
        </Route>
        <Route path="/product-3c-node-detail/:productId">
          <Detail />
        </Route>
        <Route path="/product-3c-list">
          <Product3CList />
        </Route>
        <Route path="/product-3c-detail">
          <Product3CDetail />
        </Route>
        <Route path="/product-clothing-list">
          <ProductClothingList />
        </Route>
        <Route path="/product-clothing-detail/:productId">
          <ProductClothingDetail />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        {/* TIP: 必要時要加exact，即要完全匹配path字串才會呈現該頁面元件 */}
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
