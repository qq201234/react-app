import { useAuth } from 'utils/useAuth'

function Home() {
  const { auth } = useAuth()
  return (
    <>
      <h1>Home</h1>
      <h2>{auth.isAuth ? '會員已登入' : '未登入'}</h2>
    </>
  )
}

export default Home
