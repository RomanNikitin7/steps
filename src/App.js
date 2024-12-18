import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevClick() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function handleNextClick() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              handleClick={handlePrevClick}
              bgColor="#7950f2"
              color="#fff"
            >
              <span>👈</span>Previous
            </Button>
            <Button
              handleClick={handleNextClick}
              bgColor="#7950f2"
              color="#fff"
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
function Button({ handleClick, bgColor, color, children }) {
  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: bgColor, color: color }}
    >
      {children}
    </button>
  );
}
