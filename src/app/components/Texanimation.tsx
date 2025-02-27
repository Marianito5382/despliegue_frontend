'use client';
import { useEffect, useState, useMemo } from 'react';

export default function TextAnimation() {
  const [text, setText] = useState("");
  const textArray = useMemo(() => ["INGENIERO EN INFORMATICA & SISTEMAS . . ."], []);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === textArray.length) return;

    if (subIndex === textArray[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % textArray.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === textArray[index].length ? 1000 : 150, Math.floor(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, textArray]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  return (
    <h2 className="text-xl shadow-lg text-amber-700">
      {`${textArray[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </h2>
  );
}
