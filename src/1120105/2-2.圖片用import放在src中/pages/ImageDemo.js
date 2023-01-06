import LogoImage from '../images/logo.svg'

function ImageDemo() {
  return (
    <>
      <h2>圖片使用示範</h2>
      <hr />
      <p>1. 直接用`import`語法，圖片放在`src`目錄中</p>
      <img src={LogoImage} alt="" width={100} />
    </>
  )
}

export default ImageDemo
