import { useState } from 'react'

function HTML5Form() {
  const [inputText, setInputText] = useState('')
  const [textareaText, setTextareaText] = useState('')

  return (
    <>
      <h1>表單元素範例</h1>
      <section id="input-text">
        <h2>文字輸入框(input-text)</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section id="textarea">
        <h2>文字輸入區域(textarea)</h2>
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value)
          }}
        />
      </section>
    </>
  )
}

export default HTML5Form
