"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./priorities.module.css";
import { PRIORITY_QUESTIONS, calculatePriorities } from "@/lib/priorities-questions";
import { QuizStorage } from "@/lib/quiz-storage";

export default function PrioritiesQuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const question = PRIORITY_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / PRIORITY_QUESTIONS.length) * 100;

  const handleAnswer = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      const newAnswers = { ...answers, [question.id]: selectedOption };
      setAnswers(newAnswers);

      if (currentQuestion < PRIORITY_QUESTIONS.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        const results = calculatePriorities(newAnswers);
        QuizStorage.savePriorityResult(results.profile, results.scores);
        router.push(`/priorities-results/${results.profile}`);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const prevQuestionId = PRIORITY_QUESTIONS[currentQuestion - 1].id;
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
          <div className={styles.navLinks}>
            <Link href="/test">Personality Test</Link>
            <Link href="/types">All Types</Link>
          </div>
        </div>
      </nav>

      <div className={styles.quizContainer}>
        <div className={styles.quizHeader}>
          <h1>Wealth Priorities Assessment</h1>
          <p>Discover what matters most in your wealth journey</p>
        </div>

        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className={styles.questionSection}>
          <div className={styles.questionNumber}>
            Question {currentQuestion + 1} of {PRIORITY_QUESTIONS.length}
          </div>

          <h2 className={styles.questionText}>{question.question}</h2>

          <div className={styles.optionsGrid}>
            {question.answers.map((answer, index) => (
              <button
                key={index}
                className={`${styles.optionButton} ${
                  selectedOption === index ? styles.selected : ""
                }`}
                onClick={() => handleAnswer(index)}
              >
                {answer.text}
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
              {currentQuestion === PRIORITY_QUESTIONS.length - 1 ? "See Results" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}