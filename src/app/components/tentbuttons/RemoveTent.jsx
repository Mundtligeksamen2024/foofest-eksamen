import React from 'react';

const RemoveTentButton = ({ onRemoveButtonClick }) => {
  return (
    <button type="button" className="bg-Lightpink rounded-full w-6 align-center text-White" onClick={onRemoveButtonClick}>-</button>
  );
};

export default RemoveTentButton;
