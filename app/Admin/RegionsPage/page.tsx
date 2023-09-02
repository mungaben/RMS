




import React from 'react'
import CreateRegion from './components/CreateRegion'
import DeleteeRegion from './components/DeleteeRegion'

const page = () => {
  return (
    <div className=' mt-16'>
      <div>
        <CreateRegion/>
      </div>
      <div>
        <DeleteeRegion/>
      </div>
    </div>
  )
}

export default page