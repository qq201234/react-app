import { useAuth } from '../hooks/useAuth'

function Home() {
  const { auth } = useAuth()

  return (
    <>
      <h2>首頁</h2>
      <p>會員目前是: {auth ? '登入中' : '未登入'} 狀態</p>
    </>
  )
}

export default Home
