import { useState } from 'react'

function BirthSelect() {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')

  return (
    <>
      <h1>生日下拉選單+驗証18歲</h1>
      西元
      <select
        value={year}
        onChange={(e) => {
          setYear(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        <option value="1920">1920</option>
        <option value="1921">1921</option>
      </select>
      年
      <select
        value={month}
        onChange={(e) => {
          setMonth(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      月
      <select
        value={day}
        onChange={(e) => {
          setDay(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        <option value="20">20</option>
        <option value="21">21</option>
      </select>
      日<button>檢查是否滿18歲</button>
      <hr />
      <p>檢查結果:</p>
    </>
  )
}

export default BirthSelect
