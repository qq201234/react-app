import React from 'react';
class Sid extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
        <br />
        我的學號:{this.props.snumber}
      </div>
    );
  }
}
export default Sid;
