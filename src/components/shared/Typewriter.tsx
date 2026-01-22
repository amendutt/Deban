import { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  className?: string;
}

const Typewriter = ({ words, className = '' }: TypewriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pauseTimeout);
    }

    const word = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < word.length) {
            setCurrentText(word.slice(0, currentText.length + 1));
          } else {
            setIsPaused(true);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(word.slice(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 120
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, isPaused]);

  return (
    <span className={`${className} inline-block min-w-[200px]`}>
      <span className="typewriter-text">
        {currentText}
        <span className="typewriter-cursor animate-pulse">|</span>
      </span>
    </span>
  );
};

export default Typewriter;
