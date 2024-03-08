import React from 'react'

export default function Products({name,sex,complexion,marital}) {
  return (
    <div>
      <p>name <span>{name} </span></p>
      <p>sex <span>{sex}</span></p>
      <p>complexion <span>{complexion} </span></p>
      <p>marital status <span>{marital} </span></p>
    </div>
  )
}
