import { useState } from 'react';

export default function ColorCheck({ color }) {
  const [ clicked, setClicked ] = useState(false);
  return (
    <div onClick={() => setClicked(!clicked)} className={`row ${clicked ? color : ""}`}>
      {color}
    </div>
  )

}