


import React from 'react'
import AddUser from './components/AddUser'
import DeleteUser from './components/DeleteUser'

const page = () => {
  return (
    <div className=' mt-16'>
      <div>
      <AddUser/>
      </div>
      <div>
        <DeleteUser/>
      </div>
   
    </div>
  )
}

export default page