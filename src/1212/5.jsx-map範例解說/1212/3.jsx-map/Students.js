const data = [
  {
    id: 107001,
    name: '張小草',
  },
  {
    id: 107002,
    name: '陳小花',
  },
]

function Students() {
  const a1 = [1, 2, 3, 4]

  // a2= [<div>1</div>, <div>2</div>, <div>3</div>, <div>4</div>]
  const a2 = a1.map((v, i) => {
    return <div>{v}</div>
  })

  const a3 = [<div>1</div>, <div>2</div>, <div>3</div>, <div>4</div>]

  return (
    <>
      <h1>學生資料範例(map)</h1>
      <hr />

      {a2}
      {a3}

      <ul>
        {/* key值的選擇
            1. 資料來自資料庫，優先使用資料庫中的key(主鍵/外鍵)當key值
            2. 資料並非來自資料庫，可在資料初始化時使用uuid或nanoid等函式庫產生key值，注意*不要*寫在元件的return(即render)中
            3. 資料為靜態資料(意指在應用程式執行中完全不會更動)時，才能使用索引值當key值
         */}
        {/* {data.map((v, i) => {
          return (
            <li key={v.id}>
              {v.id} / {v.name}
            </li>
          )
        })} */}
      </ul>
    </>
  )
}

export default Students
