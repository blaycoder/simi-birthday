import { useState } from "react";
import "./App.css";
// import Confetti from "react-confetti";
import { useTypewriter } from "react-simple-typewriter";
import GalleryGrid from "./components/GalleryGrid";

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [introTypeEffect, introHelper] = useTypewriter({
    words: ["My Love", "Sunshine", "Simileoluwa"],
    loop: 1,
    typeSpeed: 170,
    delaySpeed: 70,
  });

  const { isDone: introIsDone } = introHelper;

  // Enable the button when typing is done
  if (introIsDone && isDisabled) {
    setIsDisabled(false);
  }

  const birthdayWords = [
    "Happy Birthday, my love!,I'll give you the world, baby, because you’ve already given me the universe with your magic. Your touch is like a spell, making everything brighter and more beautiful, a touching touch that turns the ordinary into the extraordinary. There's a reason for all of this, and it's you., Just imagine! Who would've thought I'd be wrapped around your finger, hopelessly in love, and enjoying every moment of it?,To my love—my forever muse, my greatest adventure, and my sweetest joy. I love you more than words can say!, May your day be as wonderful and unforgettable as you are. ",
  ];

  const [mainMsgEffect] = useTypewriter({
    words: birthdayWords,
    loop:1,
    typeSpeed: 150,
    // delaySpeed: 40,
  })

  const toggleMessage = (e) => {
    e.preventDefault();
      setShowMessage((prevShowMessage) => !prevShowMessage);
  };

  return (
    <section>
      <h1>
        <span>
          Happy Birthday, <span className="font-black"> {introTypeEffect}</span>
        </span>
        {/* <Cursor /> */}
      </h1>
      <button disabled={isDisabled} onClick={toggleMessage}>
        {!showMessage ? "Show" : "Hide"} Message
      </button>

      <div className="p-4">{showMessage && <p>{mainMsgEffect}</p>}</div>
      <div className="my-24">
        <GalleryGrid />
      </div>
    </section>
  );
}

export default App;
