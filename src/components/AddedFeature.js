import React from 'react';

const AddedFeature = props => {

  const remove = (e) => {
    e.preventDefault()
    props.removeFeature(props.feature)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick = {(e) => remove(e)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
