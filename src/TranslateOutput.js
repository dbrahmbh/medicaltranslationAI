import React from 'react';

function TranslateOutput({ translatedText }) {
  return (
    <div>
      <h2>Translated Text:</h2>
      <p>{translatedText}</p>
    </div>
  );
}

export default TranslateOutput;

