import React, { Component } from 'react'
import load1 from './load1.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='my-3 mb-5 text-center'>
        <img style={{height:'35px'}} src={load1} alt="wait..." />
      </div>
    )
  }
}

export default Spinner