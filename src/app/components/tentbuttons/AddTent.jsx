import React from 'react';

const AddTentButton = ({ onButtonClick }) => {
  return (
    <>
    <button type="button" className="bg-Lightpink text-White rounded-full w-6 align-center" onClick={onButtonClick}>+</button>
    </>
  );
};

export default AddTentButton;
