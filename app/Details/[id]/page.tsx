import React from 'react'
import TableDta from '../components/TableDta'

type systemparams = {
  id: string
}

const page = ({params}:{params:systemparams}) => {
  // console.log(decodeURIComponent(params.id));
  const systemType = params.id
  
  return (
    <div className='flex w-full h-full mx-2'>
      <TableDta params={{
        id:decodeURIComponent(params.id)
      }}/>
    </div>
  )
}

export default page