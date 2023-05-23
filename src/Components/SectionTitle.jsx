import React from 'react'

function SectionTitle({heading, subHeading}) {
  return (
    <div>
       <h2> {subHeading}</h2>
       <h1>{heading}</h1>
    </div>
  )
}

export default SectionTitle