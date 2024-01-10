import React from 'react'
import Spinner from './Spinner.gif'

const Spin = () => {
    return (
      <div className='text-center'>
        <img src={Spinner} alt="loading" />
      </div>
    )
}

export default Spin;