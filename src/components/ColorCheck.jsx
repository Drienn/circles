import { useState } from 'react';

export default function ColorCheck({ color }) {
  const [ clicked, setClicked ] = useState(false);
  return (
    <div onClick={() => setClicked(!clicked)} className={`row ${color} ${clicked ? "outline" : ""}`}>
      {color}
    </div>
  )

}