function ChildA(props) {
  return (
    <>
      <h1>Child A</h1>
      <p>來自子女B元件的資料: {props.dataFromChild}</p>
    </>
  )
}

export default ChildA
