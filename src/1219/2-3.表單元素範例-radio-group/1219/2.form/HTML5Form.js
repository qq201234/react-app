import { useState } from 'react'

function HTML5Form() {
  const [inputText, setInputText] = useState('')
  const [textareaText, setTextareaText] = useState('')

  // radio group
  // 男, 女, 不提供
  const [gender, setGender] = useState('女')
  const genderOptions = ['男', '女', '不提供']

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
      <section id="radio-button">
        <h2>選項按鈕(input-radio)</h2>
        {genderOptions.map((v, i) => {
          return (
            <div
              // 選項在應用程式執行過程中完全不會更動，可用i(索引當key)
              key={i}
            >
              <input
                type="radio"
                checked={gender === v}
                value={v}
                onChange={(e) => {
                  setGender(e.target.value)
                }}
              />
              <label>{v}</label>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default HTML5Form
