import React from 'react'

const page = ({params}: {params: {id: number}}) => {
  const {id} = params;
  return (
    <div>user id: {id}</div>
  )
}

export default page