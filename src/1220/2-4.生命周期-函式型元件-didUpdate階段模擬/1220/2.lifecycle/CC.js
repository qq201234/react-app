import React, { Component } from 'react'

class CC extends Component {
  constructor(props) {
    super()
    this.state = {
      total: 0,
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('didMount')
  }

  // 此方法中可以得到前一個props與state，
  // 可用於判斷或比較目前(新的)props或state之用
  componentDidUpdate(prevProps, prevState) {
    console.log(
      'didUpdate',
      '更新前的 total=',
      prevState.total,
      '更新後(目前的) total=',
      this.state.total
    )
  }

  // cleaner/ cleanup function
  componentWillUnmount() {
    console.log('willUnmount')
  }

  render() {
    console.log('render')

    return (
      <>
        <h1>類別型元件</h1>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default CC
