import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

function ColorPicker() {
  const [color, setColor] = useState('#ffffff'); // Initial color state
  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  return (
    <div>
      <ChromePicker  color={color} onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;
