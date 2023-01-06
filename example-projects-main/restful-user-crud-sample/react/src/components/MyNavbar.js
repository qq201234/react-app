import React from 'react'
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
} from 'react-bootstrap'

import { useAuth } from 'utils/useAuth'

// 要使用能有active css效果的NavLink元件
import { NavLink, Link } from 'react-router-dom'

function MyNavbar(props) {
  const { auth } = useAuth()

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            React-BS5-Router6
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* 利用as屬性來作選單link的整合 */}
              {/* 參考：https://react-bootstrap.github.io/components/navs/#nav-link-props */}
              {!auth.isAuth && (
                <Nav.Link as={NavLink} to="register">
                  註冊
                </Nav.Link>
              )}
              {!auth.isAuth && (
                <Nav.Link as={NavLink} to="login">
                  登入
                </Nav.Link>
              )}
              {auth.isAuth && (
                <Nav.Link as={NavLink} to="login">
                  登出
                </Nav.Link>
              )}
              {auth.isAuth && (
                <Nav.Link as={NavLink} to="profile">
                  個人資料
                </Nav.Link>
              )}
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/product/women">
                More deets
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                as={NavLink}
                to="/product/women"
              >
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar
