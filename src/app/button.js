'use client'
 
import { incrementClick } from './lib/actions'
import { useState } from 'react'
 
export default function Button({ startingCount }) {
  const [clicks, setClicks] = useState(startingCount)
 
  return (
    <>
      <p>Click Count: {clicks}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={async () => {
          await incrementClick()
          setClicks(clicks+1)
        }}
      >
        Click
      </button>
    </>
  )
}