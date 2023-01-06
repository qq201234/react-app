import { useAuth } from '../../hooks/useAuth'

function Logout() {
  const { auth, setAuth } = useAuth()

  return (
    <>
      <h2>登出</h2>
      <p>會員目前是: {auth ? '登入中' : '未登入'} 狀態</p>
      <button
        onClick={() => {
          setAuth(false)
        }}
      >
        登出
      </button>
    </>
  )
}

export default Logout
