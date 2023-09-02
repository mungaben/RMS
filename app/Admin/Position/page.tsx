import React from 'react'
import AddPosition from './components/AddPosition'
import DeletePosition from './components/DeletePosition'

const page = () => {
  return (
    <div className='mt-16'>
      <div>
        <AddPosition/>
      </div>
      <div>
        <DeletePosition/>
      </div>
    </div>
  )
}

export default page