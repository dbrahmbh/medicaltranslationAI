// import React, { useState } from 'react';
// import OpenAI from 'openai';

// // function TranslationApp() {
// //     const [inputText, setInputText] = useState('');
// //     const [translatedText, setTranslatedText] = useState('');

// //     const handleInputChange = (e) => {
// //         setInputText(e.target.value);
// //     };

// //     const handleTranslate = async () => {
// //         try {
// //             const translated = await translateText(inputText);
// //             setTranslatedText(translated);
// //         } catch (error) {
// //             console.error('Translation error:', error);
// //         }
// //     };

// //     // Function to call translation API
// //     const translateText = async (textToTranslate) => {
// //         const API_URL = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
// //         const API_KEY = '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';

// //         const response = await fetch(API_URL, {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //                 'Authorization': `Bearer ${API_KEY}` // Corrected template string
// //             },
// //             body: JSON.stringify({
// //                 prompt: `Translate the following English text to Spanish: "${textToTranslate}"`, // Corrected template string
// //                 max_tokens: 1024,  // Adjust based on your needs
// //                 temperature: 0.5,  // Adjust for creativity of the translation, with 1.0 being more creative and 0.0 being direct
// //             })
// //         });

// //         const data = await response.json();
// //         return data.choices[0].text.trim(); // Extracting the translated text from the response
// //     };

// //     return (
// //         <div>
// //             <textarea value={inputText} onChange={handleInputChange} />
// //             <button onClick={handleTranslate}>Translate</button>
// //             <div>
// //                 <p>Translated Text:</p>
// //                 <p>{translatedText}</p>
// //             </div>
// //         </div>
// //     );
// // }

// // export default TranslationApp;

// function TranslationApp() {
//     const [inputText, setInputText] = useState('');
//     const [translatedText, setTranslatedText] = useState('');
//     const [error, setError] = useState(null);
//     const openai = new OpenAI('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');


//     const handleInputChange = (e) => {
//         setInputText(e.target.value);
//     };

//     const handleTranslate = async () => {
//         try {
//             const translated = await translateText(inputText);
//             setTranslatedText(translated);
//             setError(null); // Reset error state if translation succeeds
//         } catch (error) {
//             console.error('Translation error:', error);
//             setError(error.message || 'An error occurred during translation.');
//         }
//     };

//     // const translateText = async (textToTranslate) => {
//     //     const API_URL = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
//     //     const API_KEY = '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'; // Replace with your API key

//     //     const response = await fetch(API_URL, {
//     //         method: 'POST',
//     //         headers: {
//     //             'Content-Type': 'application/json',
//     //             'Authorization': `Bearer ${API_KEY}`
//     //         },
//     //         body: JSON.stringify({
//     //             prompt: `Translate the following English text to Spanish: "${textToTranslate}"`,
//     //             max_tokens: 1024,
//     //             temperature: 0.5,
//     //         })
//     //     });

//     //     if (!response.ok) {
//     //         if (response.status === 401) {
//     //             throw new Error('Unauthorized: Please check your API key.');
//     //         } else {
//     //             throw new Error(`Translation request failed with status ${response.status}`);
//     //         }
//     //     }

//     //     const data = await response.json();
//     //     if (!data || !data.choices || data.choices.length === 0 || !data.choices[0].text) {
//     //         throw new Error('Invalid response format');
//     //     }

//     //     return data.choices[0].text.trim();
//     // };

//     async function translateText(textToTranslate) {
//         try {
//             const completion = await openai.chat.completions.create({
//                 messages: [{ role: "system", content: `Translate the following English text to Spanish: "${textToTranslate}"` }],
//                 model: "text-davinci-003", // Assuming you're using the Davinci model for translation
//             });
    
//             return completion.choices[0].message.content; // Assuming the translation is available in the response
//         } catch (error) {
//             throw new Error(`Translation request failed: ${error.message}`);
//         }
//     }

//     return (
//         <div>
//             <textarea value={inputText} onChange={handleInputChange} />
//             <button onClick={handleTranslate}>Translate</button>
//             {error && <div>Error: {error}</div>}
//             <div>
//                 <p>Translated Text:</p>
//                 <p>{translatedText}</p>
//             </div>
//         </div>
//     );
// }

// export default TranslationApp;

import React, { useState } from 'react';
import OpenAI from 'openai';

function TranslationApp() {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [error, setError] = useState(null);

    const apiKey = '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';
    const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleTranslate = async () => {
        try {
            const translated = await translateText(inputText);
            setTranslatedText(translated);
            setError(null); // Reset error state if translation succeeds
        } catch (error) {
            console.error('Translation error:', error);
            setError(error.message || 'An error occurred during translation.');
        }
    };

    async function translateText(textToTranslate) {
        try {
            const completion = await openai.chat.completions.create({
                messages: [{ role: "system", content: `Translate the following English text to Spanish: "${textToTranslate}"` }],
                model: "gpt-3.5-turbo",
            });
    
            return completion.choices[0].message.content; // Assuming the translation is available in the response
        } catch (error) {
            throw new Error(`Translation request failed: ${error.message}`);
        }
    }

    return (
        <div>
            <textarea value={inputText} onChange={handleInputChange} />
            <button onClick={handleTranslate}>Translate</button>
            {error && <div>Error: {error}</div>}
            <div>
                <p>Translated Text:</p>
                <p>{translatedText}</p>
            </div>
        </div>
    );
}

export default TranslationApp;