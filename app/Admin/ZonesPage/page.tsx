

import React from 'react'
import AddZones from './components/AddZones'
import UpdateZone from '../components/UpdateZone'
import DeleteZone from './components/DeleteZone'

const page = () => {
  return (
    <div className='flex flex-col flex-grow mt-16'>
        <div className=' flex   flex-grow'>
        <AddZones/>
        </div>
       
        <div>
          <DeleteZone/>
        </div>
       
    </div>
  )
}

export default page