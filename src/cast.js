import React, { Component } from 'react';


class Cast extends Component {
  render() {
    const castobject = this.props.castmembers.cast.map(obj=>{
      return <div>
        
        
      <li>  <strong>Name:</strong> {obj.name}</li>
    
         <strong>Role:</strong> {obj.role}
  

            </div>
    })
    return (
      <div>
        <ul>{castobject}</ul>
      </div>
    );
  }
}

export default Cast;