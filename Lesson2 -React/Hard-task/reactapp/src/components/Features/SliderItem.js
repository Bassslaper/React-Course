import React from 'react';


function SliderItem(props) {

  
  return (
      <div className="features-slider_item">
        <div className="features-img" style={{ backgroundImage:'url(../images/1.svg)'}}/>
  <div className="features-feature">{props.title}</div>
      </div>
  );
}

export default SliderItem;
