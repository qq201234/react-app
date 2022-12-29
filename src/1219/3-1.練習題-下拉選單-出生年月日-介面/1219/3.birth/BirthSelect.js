import React from 'react'

function BirthSelect(props) {
  return (
    <>
      <h1>生日下拉選單+驗証18歲</h1>
      西元
      <select>
        <option value="1920">1920</option>
      </select>
      年
      <select>
        <option value="1">1</option>
      </select>
      月
      <select>
        <option value="20">20</option>
      </select>
      日<button>檢查是否滿18歲</button>
      <hr />
      <p>檢查結果:</p>
    </>
  )
}

export default BirthSelect
