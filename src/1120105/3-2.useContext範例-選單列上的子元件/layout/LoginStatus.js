import { useAuth } from '../hooks/useAuth'

function LoginStatus() {
  const { auth, setAuth } = useAuth()

  return (
    <>
      <div>
        {auth ? 'XXX會員，你好' : '遊客，你好'}{' '}
        <button
          onClick={() => {
            setAuth(!auth)
          }}
        >
          {auth ? '登出' : '登入'}
        </button>
      </div>
    </>
  )
}

export default LoginStatus
