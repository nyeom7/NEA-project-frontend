import { useEffect, useState } from "react";
import "./css/quiz.css"

function Quiz() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [flashcards, setFlashcards] = useState([]);
    useEffect(() => {
        loadFlashcards();
    }, []);

    useEffect(() => {
        if (flashcards.length > 0) {
            generateNewQuestion();
        }
    }, [flashcards]);

    function loadFlashcards() {
        fetch('http://localhost:3001/flashcards')
            .then(res => res.json())
            .then(data => {
                setFlashcards(data);
            });
    }

    function checkAnswer() {
        var element = document.getElementById("answer");
        element.style.display = 'flex';
        var nextQbutton = document.getElementById("nextQ");
        nextQbutton.classList.remove("hidden");
        var showQbutton = document.getElementById("showQ");
        showQbutton.classList.add("hidden");
    }

    function generateNewQuestion() {
        //keep track of questions they answered in future

        if (!flashcards.length) console.log("flashcards haven't been loaded yet")
        
        var item = flashcards[Math.floor(Math.random() * flashcards.length)];
        setAnswer(item.answer)
        setQuestion(item.question)

        var element = document.getElementById("answer");
        element.style.display = 'none';
        var nextQbutton = document.getElementById("nextQ");
        nextQbutton.classList.add("hidden");
        var showQbutton = document.getElementById("showQ");
        showQbutton.classList.remove("hidden");
    }

    return (
        <div style={{ background: "#B3DEC1", height: "88.8vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="card" style={{ width: "700px", height: "450px", transform: "translate(0px, -40px)" }}>
                <div className="card-body quiz-body">
                    <div className="card-top">
                        <p className="card-text">{question}</p>
                    </div>
                    {/* <div className="button-container">
                        <button className="btn quiz-btn">Correct</button>
                        <button className="btn quiz-btn">Incorrect</button>
                        <button className="btn quiz-btn">Skip</button>
                    </div> */}
                    <div className="answer card-bottom" id="answer"><p className="card-text">{answer} </p></div>
                    <div className="button-container">
                        <button onClick={checkAnswer} className="btn quiz-btn-full" id="showQ">Show answer</button>
                        <button onClick={generateNewQuestion} className="btn quiz-btn-full hidden" id="nextQ">Next question</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quiz;