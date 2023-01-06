import LogoImage from '../images/logo.svg'

const demo = ['111.jpg', '222.png']

function ImageDemo() {
  return (
    <>
      <h2>圖片使用示範</h2>
      <hr />
      <p>1. 直接用`import`語法，圖片放在`src`目錄中</p>
      <img src={LogoImage} alt="" width={100} />
      <p>
        2. 用絕對網址，圖片放在`public`目錄中(注意要先設定專案根目錄的`.env`檔)
      </p>
      <img
        src={`${process.env.REACT_APP_IMAGE_URL}/logo192.png`}
        alt=""
        width={100}
      />
      <p>3. 用絕對網址，圖片放在node(伺服器端)`public`目錄中</p>
      {demo.map((v, i) => {
        return (
          <img
            key={i}
            src={`${process.env.REACT_APP_NODE_URL}/uploads/${v}`}
            alt=""
            width={100}
          />
        )
      })}
    </>
  )
}

export default ImageDemo
