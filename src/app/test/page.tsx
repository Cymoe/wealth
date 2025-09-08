"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./test.module.css";
import { QUIZ_QUESTIONS, calculateWealthArchetype } from "@/lib/quiz-questions";

export default function TestPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const question = QUIZ_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;

  const handleAnswer = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      const newAnswers = { ...answers, [question.id]: selectedOption };
      setAnswers(newAnswers);

      if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        const archetype = calculateWealthArchetype(newAnswers);
        router.push(`/results/${archetype}`);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const prevQuestionId = QUIZ_QUESTIONS[currentQuestion - 1].id;
      setSelectedOption(answers[prevQuestionId] ?? null);
    }
  };

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <div className={styles.dotsGrid}>
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className={styles.dot}
                    style={{
                      backgroundColor:
                        i < 4 ? "#9B5DE5" : i < 8 ? "#00BBF9" : i < 12 ? "#FEE77A" : "#00F5A0",
                    }}
                  />
                ))}
              </div>
            </div>
            <span className={styles.logoText}>WealthArchetypes</span>
          </Link>
        </div>
      </nav>

      <div className={styles.quizContainer}>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className={styles.questionSection}>
          <div className={styles.questionNumber}>
            Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
          </div>

          <h2 className={styles.questionText}>{question.text}</h2>

          <div className={styles.optionsGrid}>
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`${styles.optionButton} ${
                  selectedOption === index ? styles.selected : ""
                }`}
                onClick={() => handleAnswer(index)}
              >
                {option.text}
              </button>
            ))}
          </div>

          <div className={styles.navigationButtons}>
            <button
              className={styles.backButton}
              onClick={handleBack}
              disabled={currentQuestion === 0}
            >
              Back
            </button>

            <button
              className={styles.nextButton}
              onClick={handleNext}
              disabled={selectedOption === null}
            >
              {currentQuestion === QUIZ_QUESTIONS.length - 1 ? "See Results" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}