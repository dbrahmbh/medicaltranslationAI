import React, { useState } from 'react';
import './App.css';
import TranslateInput from './TranslateInput';
import TranslateOutput from './TranslateOutput';

function App() {
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslation = (text) => {
    // Here you would integrate with the ChatGPT API to translate the text
    console.log('Translating text:', text);
    // For now, we just mimic the translation process
    setTranslatedText(text); // Replace this with actual translation logic
  };

  return (
    <div className="App">
      <header className="App-header">
        <TranslateInput onTranslate={handleTranslation} />
        <TranslateOutput translatedText={translatedText} />
      </header>
    </div>
  );
}

export default App;

