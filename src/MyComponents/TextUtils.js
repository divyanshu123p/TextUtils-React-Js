import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function TextUtils({ color }) {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [up, setUp] = useState('');
  const [lo, setLo] = useState('');
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    const count = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    setWordCount(count);
  }, [text]);

  const upperCase = () => {
    setUp(text.toUpperCase());
  };

  const lowerCase = () => {
    setLo(text.toLowerCase());
  };

  const clearText = () => {
    setText('');
  };

  const clearExtraSpaces = () => {
    setText(text.replace(/\s+/g, ' ').trim());
  };

  const addSentencesToNewLine = () => {
    setText(text.replace(/([.!?])\s*(?=[A-Z])/g, "$1\n"));
  };

  const removePunctuations = () => {
    setText(text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('text', text);

      const response = await fetch('http://127.0.0.1:8000/summarize/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Text submitted successfully');
        console.log('Waiting for response...');
        const data = await response.json();
        setSummary(data.summary);
      } else {
        console.error('Failed to submit text');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ color: color === 'light' ? 'black' : 'white' }}>
      <Form
        className="form-textutils"
        style={{
          backgroundColor: color === 'light' ? 'rgba(255, 255, 255, 0.493)' : 'rgba(27, 27, 27, 0.452)',
        }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter text for processing.</Form.Label>
          <Form.Control
            placeholder="Enter text"
            as="textarea"
            rows={5}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Form.Text style={{ color: color === 'light' ? 'black' : 'white' }}>
            Your text is processed at the client-side and therefore private.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        
        <Button variant="primary" style={{margin: '5px'}} onClick={upperCase}>
          UpperCase
        </Button>
        <Button variant="primary" style={{margin: '5px'}} onClick={lowerCase}>
          LowerCase
        </Button>
        <Button variant="primary" style={{margin: '5px'}} onClick={clearText}>
          Clear Text
        </Button>
        <Button variant="primary" style={{margin: '5px'}} onClick={clearExtraSpaces}>
          Clear Extra Spaces
        </Button>
        <Button variant="primary" style={{margin: '5px'}} onClick={addSentencesToNewLine}>
          Add Sentences to New Line
        </Button>
        <Button variant="primary" style={{margin: '5px'}} onClick={removePunctuations}>
          Remove Punctuations
        </Button>
      </Form>

      <div style={{ marginTop: '10px', color: color === 'light' ? 'white' : 'black' }}>
        Word Count: {wordCount}
      </div>

      {summary && (
        <div style={{color:'white', backgroundColor: 'lightgray', margin: '15px', borderRadius: '11px', padding: '10px'}}>
          <h2>Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
      
      {up && (
        <div style={{color:'white', backgroundColor: 'black', margin: '15px', borderRadius: '11px', padding: '10px'}}>
          <p>{up}</p>
        </div>
      )}

      {lo && (
        <div style={{color:'white', backgroundColor: 'black', margin: '15px', borderRadius: '11px', padding: '10px'}}>
          <p>{lo}</p>
        </div>
      )}
      
    </div>
  );
}