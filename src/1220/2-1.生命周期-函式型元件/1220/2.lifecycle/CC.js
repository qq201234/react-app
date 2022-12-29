import React, { Component } from 'react'

class CC extends Component {
  constructor(props) {
    super()
    this.state = {
      total: 0,
    }
  }

  render() {
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
