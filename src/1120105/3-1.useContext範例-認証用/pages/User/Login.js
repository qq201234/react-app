import { useAuth } from '../../hooks/useAuth'

function Login() {
  const { auth, setAuth } = useAuth()

  return (
    <>
      <h2>登入</h2>
      <p>會員目前是: {auth ? '登入中' : '未登入'} 狀態</p>
      <button
        onClick={() => {
          setAuth(true)
        }}
      >
        登入
      </button>
    </>
  )
}

export default Login
