import { useState, useEffect } from "react";
import "./App.css";
import { useTypewriter } from "react-simple-typewriter";
import GalleryGrid from "./components/GalleryGrid";
import Confetti from "react-confetti";

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [introTypeEffect, introHelper] = useTypewriter({
    words: [
      "My Love 😍❤",
      "My Queen ",
      "Baby Girl 💕",
      "My Angel",
      "Darling",
      "Bae 😙💕",
      "Wura Mi 😙",
      "Sunshine 🌝",
      "Simileoluwa 🎊🎉🎈",
    ],
    loop: 1,
    typeSpeed: 170,
    delaySpeed: 70,
  });

  const { isDone: introIsDone } = introHelper;

  useEffect(() => {
    if (introIsDone) {
      setShowMessage(true);
    }
  }, [introIsDone]);


  return (
    <section>
      <Confetti />
      <h1 style={{ paddingBottom: "10px" }}>
        <span>
          Happy Birthday, <span className="font-black">{introTypeEffect}</span>
        </span>
        {/* <Cursor /> */}
      </h1>

      <div style={{ marginBottom: "24px" }}>
        {showMessage && (
          <p>
            Happy Birthday, my love! I'll give you the world, baby, because
            you’ve already given me the universe with your magic. Your touch is
            like a spell, making everything brighter and more beautiful, a
            touching touch that turns the ordinary into the extraordinary.
            There's a reason for all of this, and it's you. Just imagine! Who
            would've thought I'd be wrapped around your finger, hopelessly in
            love, and enjoying every moment of it? To my love—my forever muse,
            my greatest adventure, and my sweetest joy. I love you more than
            words can say! May your day be as wonderful and unforgettable as you
            are 💌.
          </p>
        )}
      </div>
      <div className="my-24">{introIsDone && <GalleryGrid />}</div>
    </section>
  );
}

export default App;
