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
</div>
  );
}