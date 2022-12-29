import { useState } from 'react'

function HTML5Form() {
  const [inputText, setInputText] = useState('')
  const [textareaText, setTextareaText] = useState('')

  // radio group
  // 男, 女, 不提供
  const [gender, setGender] = useState('')
  const genderOptions = ['男', '女', '不提供']

  // select
  const [pet, setPet] = useState('')
  const petOptions = ['狗', '貓', '金魚']

  // 單一checkbox
  const [agree, setAgree] = useState(false)

  // checkbox group
  const [likeList, setLikeList] = useState(['芒果', '香蕉'])
  const fruitOptions = ['芒果', '蘋果', '香蕉']

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
      <section id="select">
        <h2>下拉選單(select)</h2>
        <select
          value={pet}
          onChange={(e) => {
            setPet(e.target.value)
          }}
        >
          <option value="">-請選擇-</option>
          {petOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
      </section>
      <section id="single-checkbox">
        <h2>單一核取方塊(checkbox)</h2>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked)
          }}
        />
        <label>我同意會員註冊條款</label>
      </section>
      <section id="checkbox-group">
        <h2>核取方塊群組(checkbox-group)</h2>
        {fruitOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                checked={likeList.includes(v)}
                value={v}
                onChange={(e) => {
                  // 先判斷目前的v值是否在state陣列中
                  const value = e.target.value

                  // if在state陣列中 -> 移出state陣列(從state陣列中刪除)
                  if (likeList.includes(value)) {
                    const newLikeList = likeList.filter((v2, i2) => {
                      return v2 !== value
                    })

                    setLikeList(newLikeList)
                  } else {
                    // else -> 加入state陣列
                    const newLikeList = [...likeList, value]
                    setLikeList(newLikeList)
                  }
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
