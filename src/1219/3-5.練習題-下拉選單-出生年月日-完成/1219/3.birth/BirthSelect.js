import { useState } from 'react'

function BirthSelect() {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')

  const [text, setText] = useState('')

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
          // 重選年時要清空日期選項，以免產生操作邏輯上的bug
          setDay('')
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
          // 重選年時要清空日期選項，以免產生操作邏輯上的bug
          setDay('')
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
        {year !== '' &&
          month !== '' &&
          makeOptions(
            1,
            new Date(Number(year), Number(month), 0).getDate()
          ).map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
      </select>
      日
      <button
        onClick={() => {
          // 檢查是否年、月、日都有選
          if (year === '' || month === '' || day === '') {
            alert('請先完成年、月、日選擇')
            return
          }

          //18年的微秒值
          const ms18years = 568036800000

          // 使用者選了年月日後的微秒值
          const msBirth = Number(new Date(`${year}/${month}/${day}`))

          // 目前(現在)的微秒值
          const msNow = Number(new Date())

          if (msNow - msBirth >= ms18years) {
            setText('滿18歲')
          } else {
            setText('未滿18歲')
          }
        }}
      >
        檢查是否滿18歲
      </button>
      <hr />
      <p>檢查結果:{text}</p>
    </>
  )
}

export default BirthSelect
