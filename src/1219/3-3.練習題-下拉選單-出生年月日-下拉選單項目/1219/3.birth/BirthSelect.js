import { useState } from 'react'

function BirthSelect() {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')

  // 產生數字陣列的函式
  // ex. (1,4) => [1,2,3,4]
  const makeOptions = (min, max) => {
    const options = []

    for (let i = min; i < max + 1; i++) {
      options.push(i)
    }

    return options
  }

  return (
    <>
      <h1>生日下拉選單+驗証18歲</h1>
      {/* 另一種遞增選項產生語法 */}
      {/* {Array(12)
          .fill(1)
          .map((v, i) => {
            return (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            )
          })} */}
      西元
      <select
        value={year}
        onChange={(e) => {
          setYear(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        {makeOptions(1920, 2010).map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })}
      </select>
      年
      <select
        value={month}
        onChange={(e) => {
          setMonth(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        {makeOptions(1, 12).map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })}
      </select>
      月
      <select
        value={day}
        onChange={(e) => {
          setDay(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        {makeOptions(1, 31).map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })}
      </select>
      日<button>檢查是否滿18歲</button>
      <hr />
      <p>檢查結果:</p>
    </>
  )
}

export default BirthSelect
