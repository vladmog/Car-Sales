import React from 'react';

const AdditionalFeature = props => {

  const add = (e) => {
    e.preventDefault()
    props.buyItem(props.feature)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick = {(e) => add(e)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
