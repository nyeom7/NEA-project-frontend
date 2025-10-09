import { useState } from "react";

function Flashcardmanager() {
  // this is a react state, a feature of react - question is the variable, setQuestion is the function used to change the variable
  //const defines a variable
  // [],{} can be defined as const and still be edited as normal [1,2], insides are not constants and that's okay.
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [flashcards, setFlashcards] = useState([]);

  function addFlashcard(e) {
    e.preventDefault();
    if (!question || !answer) {
      //return means stop code here
      //the code stops if there is no question or no answer
      return;
    }
    const newCard = { question, answer };
    // example list destructuring
    // list = [1,2,3]
    // ...list = 1,2,3
    // [...list,4] = [1,2,3,4]
    setFlashcards([...flashcards, newCard]);
    setQuestion("");
    setAnswer("");
    toggleElement("newFlashCardForm");
  }

  function togglePopup() {
    toggleElement("newFlashCardForm");
  }

  function toggleElement(elementId) {
    const element = document.getElementById(elementId);
    const originalDisplay = element.dataset.display || "flex";

    if (element.style.display === "none") {
      element.style.display = originalDisplay;
    } else {
      element.dataset.display =
        element.style.display || getComputedStyle(element).display;
      element.style.display = "none";
    }
  }

  return (
    <div style={{ background: "#B3DEC1", height: "100vh" }}>
      <ul
        class="nav"
        style={{
          background: "#373f51",
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <li style={{ margin: "10px 15px" }}>
          <h1>Flashcard Manager</h1>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
      <form
        // forms are submitted when you press a button inside them, onSubmit defines what function is called, line 9 prevents default thing from happening.
        onSubmit={addFlashcard}
        style={{
          position: "absolute",
          left: "calc(50% - (350px / 2))",
          top: "150px",
          display: "none",
          flexDirection: "column",
          background: "white",
          width: "350px",
          margin: "auto",
          border: "1px solid grey",
          padding: "15px",
        }}
        id="newFlashCardForm"
      >
        <h2>Add a new question</h2>
        <label for="questionInput" className="form-label">
          Question:
          <input
            type="text"
            //this value is question. question is a variable in react state. it means it is reactive, it stays updated in realtime.
            value={question}
            //you have to use setQuestion to set the value in realtime. using "question = xxx" will not work as it is a constant.
            onChange={(event) => setQuestion(event.target.value)}
            required
            className="form-control"
            id="questionInput"
            placeholder="Enter question"
            autoComplete="off"
          ></input>
        </label>
        <label for="answerInput" className="form-label">
          Answer:
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
            className="form-control"
            id="answerInput"
            placeholder="Enter answer"
            autoComplete="off"
          ></input>
        </label>
        <button type="submit" className="btn btn-success mt-3 mb-3">
          Add flashcard
        </button>
      </form>
      <button className="btn btn-primary" onClick={togglePopup} style={{margin: "10px"}}>
        Add New Question
      </button>
      <table
        className="table table-striped table-hover mt-3"
        style={{ width: "750px", borderCollapse: "collapse", margin: "10px" }}
      >
        <thead>
          <tr>
            <th
              style={{
                maxWidth: "1px",
                border: "1px solid #ccc",
                padding: "7px",
                background: "#373F51",
                color: "white"
              }}
            >
              #
            </th>
            <th
              style={{
                border: "1px solid #ccc",
                padding: "7px",
                background: "#373F51",
                color: "white"
              }}
            >
              Question
            </th>
            <th
              style={{
                border: "1px solid #ccc",
                padding: "7px",
                background: "#373F51",
                color: "white"
              }}
            >
              Answer
            </th>
          </tr>
        </thead>
        <tbody>
          {flashcards.map((card, index) => (
            <tr>
              <td
                style={{
                  maxWidth: "1px",
                  border: "1px solid #ccc",
                  padding: "7px",
                }}
              >
                {index + 1}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "7px" }}>
                {card.question}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "7px" }}>
                {card.answer}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Flashcardmanager;
