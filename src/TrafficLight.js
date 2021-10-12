import './TrafficLight.css';
import React, {useState} from 'react';

function TrafficLight() {
  
  const [ selected, setSelected ] = useState({
      red: true,
      yellow: false,
      green: false
    })

  const handleClick = (clickedColor) => {
    
    
    let red = true
    let yellow = false
    let green = false

    let newSelected = {red, yellow, green}
    console.log(clickedColor, 'clicked', newSelected)

    if(clickedColor === 'red') {
      newSelected.red = true
      newSelected.yellow = false
      newSelected.green = false
    }
    if(clickedColor  === 'yellow') {
      newSelected.red = false
      newSelected.yellow = true
      newSelected.green = false   
    }
    if(clickedColor  === 'green') {
      newSelected.red = false
      newSelected.yellow = false
      newSelected.green = true
    }
  
    setSelected(newSelected)  
    
  } 

  return (
    <div className="container">
      <div className="sign">
        <div className="hanger"></div>
        <button className={`red light ${selected.red === true ? "selected" : ""} `} onClick={() => handleClick("red")} />
        <button className={`yellow light ${selected.yellow === true ? "selected" : "" }`} onClick={() => handleClick("yellow")} />
        <button className={`green light ${selected.green === true ? "selected" : "" }  `} onClick={() => handleClick("green")} />
      </div>  
    </div>
  )
}

export default TrafficLight;
