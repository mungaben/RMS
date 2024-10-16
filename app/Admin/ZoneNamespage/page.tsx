


"use client"


import React from 'react'
import CreateZoneNames from './components/CreateZoneNames'
import DEleteZoneName from './components/DEleteZoneName'

const page = () => {
  return (
    <div className='mt-16'>
      <div>
        <CreateZoneNames/>
      </div>
      <div>
        <DEleteZoneName/>
      </div>
    </div>
  )
}

export default page