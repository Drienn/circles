import './Circles.css';
import ColorCheck from './ColorCheck'; 

export default function Circles() {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "black",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "red",
    "green",
    "red",
    "green",
    "red",
    "green"
  ]
  return (
<div className="circle">
  {colors.map((color) => <ColorCheck color={color} key={color}/>)}
  {/* <div className="row red" onToggle={onToggle} value={color} onClick={setColor}></div>
  <div className="row blue" onToggle={onToggle} value={color} onClick={setColor}>Blue</div>
  <div className="row green" onToggle={onToggle} value={color} onClick={setColor}>Green</div>
  <div className="row yellow" onToggle={onToggle} value={color} onClick={setColor}>Yellow</div>
  <div className="row orange" onToggle={onToggle} value={color} onClick={setColor}>Orange</div>
  <div className="row black" onToggle={onToggle} value={color} onClick={setColor}>Black</div>
  <div className="row blue" onToggle={onToggle} value={color} onClick={setColor}>Blue</div>
  <div className="row blue" onToggle={onToggle} value={color} onClick={setColor}>Blue</div>
  <div className="row blue" onToggle={onToggle} value={color} onClick={setColor}>Blue</div>
  <div className="row blue" onToggle={onToggle} value={color} onClick={setColor}>Blue</div>
  <div className="row blue" onToggle={onToggle} value={color} onClick={setColor}>Blue</div>
  <div className="row blue" onToggle={onToggle} value={color} onClick={setColor}>Blue</div>
  <div className="row red" onToggle={onToggle} value={color} onClick={setColor}></div>
  <div className="row green" onToggle={onToggle} value={color} onClick={setColor}>Green</div>
  <div className="row red" onToggle={onToggle} value={color} onClick={setColor}></div>
  <div className="row green" onToggle={onToggle} value={color} onClick={setColor}>Green</div>
  <div className="row red" onToggle={onToggle} value={color} onClick={setColor}></div>
  <div className="row green" onToggle={onToggle} value={color} onClick={setColor}>Green</div> */}
</div>
  );
}