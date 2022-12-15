function Child({ text = '', color = 'black', price = 0 }) {
  // const { text, color, price } = props
  // console.log(props)

  return (
    <>
      <h1>Child</h1>
      <p>{text}</p>
      <p>{color}</p>
      <p>{price}</p>
    </>
  )
}

export default Child
