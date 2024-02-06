import React from 'react'

function card(props) {
  return (
    <div>
        <div className="card  border rounded-3xl w-80 m-2">
            <div className='font-bold text-4xl'>id:{props.id}</div>
            <div className='font-bold font-sans text-center py-7'>{props.title}</div>
            <p>{props.body}</p>
        </div>
    </div>
  )
}

export default card
