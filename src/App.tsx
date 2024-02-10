import './index.css';
import React, { useState } from 'react';

function App(): JSX.Element {
  const [inputText, setInputText] = useState<string>('');
  const [resultText, setResultText] = useState<string>('');

  const palindromeCheck = (text: string): boolean => {
    const cleanedText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedText = cleanedText.split('').reverse().join('');

    return cleanedText === reversedText;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newText: string = event.target.value;
    setInputText(newText);
  };

  const palindromeInput = (): void => {
    if (inputText.length > 0) {
      const isPalindromeResult: boolean = palindromeCheck(inputText);
      setResultText(isPalindromeResult ? `"${inputText}" is a palindrome` : `"${inputText}" is NOT a palindrome`);
      setInputText('');
    } else {
      setResultText('Please, write something');
    }
  };

  return (
    <main>  
      <div className="app">
        <h1>Palindrome checker app</h1>
        <p>Write your phrase and I will tell you whether it is a palindrome or not</p>
        <div>
          <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap" rel="stylesheet"/>
          <input
            id="textInput"
            placeholder="Enter text..."
            onChange={handleInputChange}
            value={inputText}
          />
        </div>
        <div>
          <button onClick={palindromeInput}>Check Palindrome</button>
        </div>
        <div>
          <label>{resultText}</label>
        </div>
      </div>
    </main>
  );
}

export default App;
