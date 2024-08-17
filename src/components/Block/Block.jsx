import React, { useRef } from 'react'

const Block = ({id}) => {
  
  return (
    <div className='border border-dashed border-rose-950 h-screen w-full my-2' style={{scrollMarginTop: "50vh"}} id={id}>
        Block
    </div>
  )
}

export default Block