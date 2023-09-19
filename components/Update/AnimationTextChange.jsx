import { useEffect, useState } from "react";

const FADE_INTERVAL_MS = 1750;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;
const WORDS_TO_ANIMATE = [
  "Book a 30-min demo to see how other organisations are using TEX to develop their people and communities.",
  "Thia is a demo text 2",
  "this si orhtl fjf jsf ",
  "thsi is another text",
  "Book a 30-min demo to see how other organisations are using TEX to develop their people and communities.",
];

export const AnimatedText = () => {
  const [fadeProp, setFadeProp] = useState({ fade: "fade-in" });
  const [wordOrder, setWordOrder] = useState(0);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp.fade === "fade-in"
        ? setFadeProp({ fade: "fade-out" })
        : setFadeProp({ fade: "fade-in" });
    }, FADE_INTERVAL_MS);

    return () => clearInterval(fadeTimeout);
  }, [fadeProp]);

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder(
        (prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length
      );
    }, WORD_CHANGE_INTERVAL_MS);

    return () => clearInterval(wordTimeout);
  }, []);

  return (
    <p className={`${fadeProp.fade} w-[30rem]`}>
      {WORDS_TO_ANIMATE[wordOrder]}
    </p>
  );
};
