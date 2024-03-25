import React, { useState } from 'react';

function TranslateInput({ onTranslate }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onTranslate(text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to translate"
        />
        <button type="submit">Translate</button>
      </form>
    </div>
  );
}

export default TranslateInput;

