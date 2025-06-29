import { useState } from "react";

function Flashcardmanager() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [flashcards, setFlashcards] = useState([]);

  function addFlashcard(e) {
    e.preventDefault();
    if (!question || !answer) {
      return;
    }
    const newCard = { question, answer };
    setFlashcards([...flashcards, newCard]);
    setQuestion("");
    setAnswer("");
  }

  return (
    <div>
      <h1>Flashcard manager</h1>
      <form
        onSubmit={addFlashcard}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>
          Question:
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          ></input>
        </label>
        <label>
          Answer:
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          ></input>
        </label>
        <button style={{width: "100px"}} type="submit">Add flashcard</button>
      </form>
      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
              Question
            </th>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
              Answer
            </th>
          </tr>
        </thead>
        {flashcards.map((card) => (
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
              {card.question}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
              {card.answer}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Flashcardmanager;
