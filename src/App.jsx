import { useState, useEffect } from "react";
import "./App.css";
// import Confetti from "react-confetti";
import { useTypewriter } from "react-simple-typewriter";

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [introTypeEffect, introHelper] = useTypewriter({
    words: ["My Love", "Sunshine", "Simileoluwa"],
    loop: 1,
    typeSpeed: 170,
    delaySpeed: 70,
  });

  const { introIsDone } = introHelper;

  // Enable the button when typing is done
  if (introIsDone && isDisabled) {
    setIsDisabled(false);
  }

  const toggleMessage = (e) => {
    e.preventDefault();
    if (introIsDone) {
      setShowMessage((prevShowMessage) => !prevShowMessage);
    }
  };

  return (
    <section>
      <h1>
        <span>Happy Birthday, {introTypeEffect}</span>
        {/* <Cursor /> */}
      </h1>
      <button disabled={isDisabled} onClick={toggleMessage}>
        Show Message
      </button>

      <div>
        <p>
          {showMessage && (
            <p></p>
          )}
        </p>
      </div>

      <div className="mt-8">
        <h1 className="text-xl mb-4 text-center">Simi's Gallery</h1>
      </div>
    </section>
  );
}

export default App;
