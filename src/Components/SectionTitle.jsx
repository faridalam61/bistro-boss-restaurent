import React from 'react'

function SectionTitle({heading, subHeading}) {
  return (
    <div className='text-center w-64 mx-auto'>
       <h2 className='text-orange-300 mb-1'> --- {subHeading} ---</h2>
       <h1 className='text-3xl uppercase border-t-2 border-b-2 py-1'>{heading}</h1>
    </div>
  )
}

export default SectionTitle