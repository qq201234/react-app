import { Outlet } from 'react-router-dom'

function MemberLayout() {
  return (
    <>
      <div className="page1">
        <h1>會員專區</h1>
        <hr />
        {/* Outlet相當於子頁區域呈現內容 */}
        <Outlet />
      </div>
    </>
  )
}
export default MemberLayout
