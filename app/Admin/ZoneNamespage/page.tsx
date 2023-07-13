


"use client"


import React from 'react'
import CreateZoneNames from './components/CreateZoneNames'
import DEleteZoneName from './components/DEleteZoneName'

const page = () => {
  return (
    <div>
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