import { useState } from 'react';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [flashcards, setFlashcards] = useState([]);
  const [counter, setCounter] = useState(0);

  // const flashcards = 
  // [
  //   {
  //     question:1,
  //     answer:2
  //   },
  //   {
  //     question:1,
  //     answer:2
  //   },
  //   {
  //     question:1,
  //     answer:2
  //   },
  // ]
  
  function handleSubmit(e){
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return;

    const newCard = { question, answer };
    setFlashcards([...flashcards, newCard]);

    // Clear inputs
    setQuestion('');
    setAnswer('');
  };
 

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Flashcard Manager</h1>


      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <label>
          Question:
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.25rem', marginBottom: '1rem' }}
          />
        </label>
        <label>
          Answer:
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
            style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.25rem', marginBottom: '1rem' }}
          />
        </label>
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Add Flashcard</button>
      </form>

      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Question</th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Answer</th>
          </tr>
        </thead>
        <tbody>
          {flashcards.map((card, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{card.question}</td>
              <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{card.answer}</td>
            </tr>
          ))}

          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>column 1</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' , display:'flex', justifyContent:'center', alignItems:'center'}}>column 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
