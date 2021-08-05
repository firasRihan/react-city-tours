import React, { useState } from "react";
import "./Tour.scss";
export default function Tour(props) {
    
  const [showInfo, setShowInfo] = useState(false);

  function toggleShowInfo() {
    setShowInfo(!showInfo);
  }
  function handleRemoveTour(){
      props.removeTour(props.tour.id);
  }
 
  return (
    <article className="tour">
      <div className="img-container">
        <img alt={props.tour.name} src={props.tour.img}></img>
        <span onClick={handleRemoveTour}
         className="close-btn">
          <i className="fas fa-window-close" />
        </span>
      </div>
      <div className="tour-info">
        <h3>{props.tour.city}</h3>
        <h4>{props.tour.name}</h4>
        <h5>
          Info
          <span onClick={toggleShowInfo}>
            <i className="fas fa-caret-square-down"></i>
          </span>
        </h5>

        {showInfo && <p>{props.tour.info}</p>}
      </div>
    </article>
  );
}
