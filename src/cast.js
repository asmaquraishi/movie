import React, { Component } from 'react';


class Cast extends Component {
  render() {
    return (
      <div>

        <div>{this.props.castmembers.cast[0].name}
       
        </div>
        
        <h2>{this.props.castmembers.cast[0].role}</h2>
      </div>
    );
  }
}

export default Cast;