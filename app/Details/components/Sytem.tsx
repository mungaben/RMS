
"use client"

import React, { useEffect } from 'react'
import DetailData from './DetailData'

const Sytem = () => {

    useEffect(() => {
        console.log('Sytem')
    }, [])

  return (
    <div>
      <DetailData/>
    </div>
  )
}

export default Sytem