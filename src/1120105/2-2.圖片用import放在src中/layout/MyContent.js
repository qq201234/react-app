function MyContent(props) {
  return (
    <main role="main">
      <div className="container h-500">{props.children}</div>
    </main>
  )
}

export default MyContent
