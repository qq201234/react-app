function IdForm() {
  return (
    <>
      <h1>IdForm</h1>
      <input type="text" id="my-input" />
      <button
        onClick={() => {
          document.getElementById('my-input').focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          document.getElementById('my-input').blur()
        }}
      >
        失焦(blur)
      </button>
      <button
        onClick={() => {
          console.log(document.getElementById('my-input'))
          console.log(document.getElementById('my-input').value)
        }}
      >
        印出值在主控台
      </button>
    </>
  )
}

export default IdForm
