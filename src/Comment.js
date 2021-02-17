//your code here
import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state({
      active: false
    })
  }
  render() {
    return (
      <div className="comment">
        {this.props.commentText}
      </div>
    )
  }
}

// // functional equivalent
// function Comment({commentText}) {
//   return (
//     <div className="comment">
//       {commentText}
//     </div>
//   )
// }


export default Comment;