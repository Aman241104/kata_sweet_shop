import React from 'react'
import { PuffLoader } from 'react-spinners'

const override = {
    display: 'block',
    margin: '100px auto',
}


const Spinner = ({ loading }) => {
  return (
    <PuffLoader
        color='#4338ca'
        loading={loading}
        cssOverride={override} 
    />
  )
}

export default Spinner