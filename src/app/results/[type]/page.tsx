"use client";

import Link from "next/link";
import { WEALTH_ARCHETYPES } from "@/lib/wealth-archetypes";
import styles from "./results.module.css";
import { QuizStorage } from "@/lib/quiz-storage";
import { useEffect, useState } from "react";

export default function ResultsPage({ params }: { params: Promise<{ type: string }> }) {
  const [type, setType] = useState<string>("");
  const [hasPriorities, setHasPriorities] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    params.then(p => {
      setType(p.type);
      setIsLoading(false);
    });
    const results = QuizStorage.getResults();
    setHasPriorities(!!results.priorities);
  }, [params]);

  if (isLoading) return null;
  
  const archetype = WEALTH_ARCHETYPES[type];

  if (!archetype) {
    return (
      <main className={styles.main}>
        <div className={styles.error}>
          <h1>Invalid Result</h1>
          <p>We couldn&apos;t find that wealth archetype.</p>
          <Link href="/test" className={styles.retakeButton}>
            Retake Test
          </Link>
        </div>
      </main>
    );
  }

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
            <Link href="/test">Retake Test</Link>
            <Link href="/types">All Types</Link>
          </div>
        </div>
      </nav>

      <div className={styles.resultsContainer}>
        <div className={styles.resultsHeader}>
          <div 
            className={styles.roleIndicator}
            style={{ backgroundColor: archetype.role.color }}
          >
            {archetype.role.name}
          </div>
          
          <h1 className={styles.archetypeName}>{archetype.name}</h1>
          <div className={styles.archetypeCode}>{archetype.code}</div>
        </div>

        <div className={styles.description}>
          <p>{archetype.description}</p>
        </div>

        <div className={styles.detailsGrid}>
          <div className={styles.detailCard}>
            <h3>Your Wealth-Building Strengths</h3>
            <ul>
              {archetype.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>

          <div className={styles.detailCard}>
            <h3>Potential Challenges</h3>
            <ul>
              {archetype.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.roleInfo}>
          <h3>About {archetype.role.name}</h3>
          <p>{archetype.role.description}</p>
          <div className={styles.otherTypes}>
            <h4>Other {archetype.role.name} types:</h4>
            <div className={styles.typeLinks}>
              {Object.values(WEALTH_ARCHETYPES)
                .filter(a => a.role.name === archetype.role.name && a.code !== archetype.code)
                .map(a => (
                  <Link
                    key={a.code}
                    href={`/types/${a.code}`}
                    className={styles.typeLink}
                    style={{ borderColor: archetype.role.color }}
                  >
                    {a.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          {!hasPriorities ? (
            <>
              <Link href="/priorities" className={styles.primaryButton}>
                Complete Your Profile - Take Priorities Test
              </Link>
              <Link href={`/types/${archetype.code}`} className={styles.secondaryButton}>
                Read Full Description
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile" className={styles.primaryButton}>
                View Complete Profile
              </Link>
              <Link href={`/types/${archetype.code}`} className={styles.secondaryButton}>
                Read Full Description
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
}