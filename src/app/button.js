'use client';
 
import { useState } from 'react';
 
export default function LikeButton() {
  const [likes, setLikes] = useState(0);
 
  function handleClick() {
    setLikes(likes + 1);
  }
 
  return <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleClick}>Click Count ({likes})</button>;
}