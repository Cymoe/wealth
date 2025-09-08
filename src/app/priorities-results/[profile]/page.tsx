"use client";

import Link from "next/link";
import { WEALTH_PRIORITIES } from "@/lib/wealth-priorities";
import styles from "./results.module.css";
import { QuizStorage } from "@/lib/quiz-storage";
import { useEffect, useState } from "react";


export default function PriorityResultsPage({ params }: { params: Promise<{ profile: string }> }) {
  const [profileId, setProfileId] = useState<string>("");
  const [hasPersonality, setHasPersonality] = useState(false);
  const [scores, setScores] = useState({ capital: 0, time: 0, location: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    params.then(p => {
      setProfileId(p.profile);
      setIsLoading(false);
    });
    const results = QuizStorage.getResults();
    setHasPersonality(!!results.personality);
    if (results.priorities?.scores) {
      setScores(results.priorities.scores);
    }
  }, [params]);

  if (isLoading) return null;
  
  const priority = WEALTH_PRIORITIES.find(p => p.id === profileId);

  if (!priority) {
    return (
      <main className={styles.main}>
        <div className={styles.error}>
          <h1>Invalid Result</h1>
          <p>We couldn&apos;t find that wealth priority profile.</p>
          <Link href="/priorities" className={styles.retakeButton}>
            Retake Test
          </Link>
        </div>
      </main>
    );
  }

  // Calculate percentages for visualization
  const total = scores.capital + scores.time + scores.location;
  const percentages = total > 0 ? {
    capital: Math.round((scores.capital / total) * 100),
    time: Math.round((scores.time / total) * 100),
    location: Math.round((scores.location / total) * 100)
  } : { capital: 33, time: 33, location: 34 };

  const pillars = [
    { name: 'Capital', icon: '₿', value: percentages.capital, color: '#FFD700' },
    { name: 'Time', icon: '∞', value: percentages.time, color: '#00BBF9' },
    { name: 'Location', icon: '🗺', value: percentages.location, color: '#00F5A0' }
  ];

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
            <Link href="/priorities">Retake Priorities</Link>
            <Link href="/types">All Types</Link>
          </div>
        </div>
      </nav>

      <div className={styles.resultsContainer}>
        <div className={styles.resultsHeader}>
          <div className={styles.iconDisplay}>
            {priority.icon}
          </div>
          
          <h1 className={styles.priorityName}>{priority.name}</h1>
          <p className={styles.tagline}>{priority.tagline}</p>
        </div>

        <div className={styles.pillarsSection}>
          <h3>Your Wealth Priorities</h3>
          <div className={styles.pillarsGrid}>
            {pillars.map((pillar) => (
              <div key={pillar.name} className={styles.pillarCard}>
                <div className={styles.pillarIcon}>{pillar.icon}</div>
                <div className={styles.pillarName}>{pillar.name}</div>
                <div className={styles.pillarValue}>{pillar.value}%</div>
                <div className={styles.pillarBar}>
                  <div 
                    className={styles.pillarFill} 
                    style={{ 
                      width: `${pillar.value}%`,
                      backgroundColor: pillar.color 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.description}>
          <p>{priority.description}</p>
        </div>

        <div className={styles.detailsGrid}>
          <div className={styles.detailCard}>
            <h3>Your Strengths</h3>
            <ul>
              {priority.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>

          <div className={styles.detailCard}>
            <h3>Potential Blindspots</h3>
            <ul>
              {priority.blindspots.map((blindspot, index) => (
                <li key={index}>{blindspot}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.pathSection}>
          <h3>Your Recommended Path</h3>
          <p>{priority.recommendedPath}</p>
          
          <div className={styles.nextActions}>
            <h4>Next Actions</h4>
            <div className={styles.actionsList}>
              {priority.nextActions.map((action, index) => (
                <div key={index} className={styles.actionItem}>
                  <span className={styles.actionNumber}>{index + 1}</span>
                  <span>{action}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.famousExamples}>
          <h3>Famous Examples</h3>
          <p>Others who share your wealth priorities:</p>
          <div className={styles.examplesList}>
            {priority.famousExamples.map((example, index) => (
              <span key={index} className={styles.exampleTag}>{example}</span>
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          {!hasPersonality ? (
            <>
              <Link href="/test" className={styles.primaryButton}>
                Complete Your Profile - Take Personality Test
              </Link>
              <Link href="/priorities" className={styles.secondaryButton}>
                Retake Priorities Test
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile" className={styles.primaryButton}>
                View Complete Profile
              </Link>
              <Link href="/priorities" className={styles.secondaryButton}>
                Retake Priorities Test
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
}