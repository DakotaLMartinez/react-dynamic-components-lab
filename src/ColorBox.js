import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const newOpacityValue = this.props.opacity - 0.03;
    console.log(newOpacityValue);
    return this.props.opacity <= 0.2 ? null : (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        <ColorBox opacity={newOpacityValue} />
      </div>
    )
  }

}

