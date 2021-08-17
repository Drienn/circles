import './Circles.css';
import { useState } from 'react'; 

export default function Circles({ onToggle }) {
  const [ color, setColor ] = useState()

  return (
<div className="circle">
  <div className="row red" onToggle={onToggle} value={color}><button onClick={setColor}/></div>
  <div className="row blue" onToggle={onToggle} value={color}><button onClick={setColor}/>Blue</div>
  <div className="row green" onToggle={onToggle} value={color}><button onClick={setColor}/>Green</div>
  <div className="row yellow" onToggle={onToggle} value={color}><button onClick={setColor}/>Yellow</div>
  <div className="row orange" onToggle={onToggle} value={color}><button onClick={setColor}/>Orange</div>
  <div className="row black" onToggle={onToggle} value={color}><button onClick={setColor}/>Black</div>
  <div className="row blue" onToggle={onToggle} value={color}><button onClick={setColor}/>Blue</div>
  <div className="row blue" onToggle={onToggle} value={color}><button onClick={setColor}/>Blue</div>
  <div className="row blue" onToggle={onToggle} value={color}><button onClick={setColor}/>Blue</div>
  <div className="row blue" onToggle={onToggle} value={color}><button onClick={setColor}/>Blue</div>
  <div className="row blue" onToggle={onToggle} value={color}><button onClick={setColor}/>Blue</div>
  <div className="row blue" onToggle={onToggle} value={color}><button onClick={setColor}/>Blue</div>
  <div className="row red" onToggle={onToggle} value={color}><button onClick={setColor}/></div>
  <div className="row green" onToggle={onToggle} value={color}><button onClick={setColor}/>Green</div>
  <div className="row red" onToggle={onToggle} value={color}><button onClick={setColor}/></div>
  <div className="row green" onToggle={onToggle} value={color}><button onClick={setColor}/>Green</div>
  <div className="row red" onToggle={onToggle} value={color}><button onClick={setColor}/></div>
  <div className="row green" onToggle={onToggle} value={color}><button onClick={setColor}/>Green</div>
</div>
  );
}