import React, { useState } from 'react';

const ImageGallery = () => {
  const [isPinned, setIsPinned] = useState(false);
  const [text, setText] = useState('');
  const [background, setBackground] = useState('');

  const handlePin = () => {
    setIsPinned(true);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleBackgroundChange = (e) => {
    setBackground(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={text} onChange={handleTextChange} placeholder="Enter text" />
        <input type="text" value={background} onChange={handleBackgroundChange} placeholder="Enter background" />
        <button onClick={handlePin}>Pin</button>
      </div>
      {isPinned && (
        <div style={{ background }}>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
