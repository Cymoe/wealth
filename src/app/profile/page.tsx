"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./profile.module.css";
import { QuizStorage } from "@/lib/quiz-storage";
import { WEALTH_ARCHETYPES } from "@/lib/wealth-archetypes";
import { WEALTH_PRIORITIES } from "@/lib/wealth-priorities";

interface ProfileData {
  personality?: {
    archetype: typeof WEALTH_ARCHETYPES[keyof typeof WEALTH_ARCHETYPES];
    timestamp: string;
  };
  priorities?: {
    priority: typeof WEALTH_PRIORITIES[number];
    scores: { capital: number; time: number; location: number };
    percentages: { capital: number; time: number; location: number };
    timestamp: string;
  };
}

export default function ProfilePage() {
  const router = useRouter();
  const [profileData, setProfileData] = useState<ProfileData>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const results = QuizStorage.getResults();
    
    // Redirect if incomplete profile
    if (!results.personality || !results.priorities) {
      if (!results.personality) {
        router.push("/test");
      } else {
        router.push("/priorities");
      }
      return;
    }

    // Load profile data
    const personality = WEALTH_ARCHETYPES[results.personality.type];
    const priority = WEALTH_PRIORITIES.find(p => p.id === results.priorities!.profile);

    if (!personality || !priority) {
      router.push("/");
      return;
    }

    // Calculate percentages
    const scores = results.priorities.scores;
    const total = scores.capital + scores.time + scores.location;
    const percentages = {
      capital: Math.round((scores.capital / total) * 100),
      time: Math.round((scores.time / total) * 100),
      location: Math.round((scores.location / total) * 100)
    };

    setProfileData({
      personality: {
        archetype: personality,
        timestamp: results.personality.timestamp
      },
      priorities: {
        priority: priority,
        scores: scores,
        percentages: percentages,
        timestamp: results.priorities.timestamp
      }
    });

    setIsLoading(false);
  }, [router]);

  if (isLoading || !profileData.personality || !profileData.priorities) {
    return null;
  }

  const { personality, priorities } = profileData;

  // Find synergies and conflicts
  const synergies = getSynergies(personality.archetype.code, priorities.priority.id);
  const tensions = getTensions(personality.archetype.code, priorities.priority.id);

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
            <Link href="/test">Retake Tests</Link>
            <Link href="/types">All Types</Link>
          </div>
        </div>
      </nav>

      <div className={styles.profileContainer}>
        <header className={styles.profileHeader}>
          <h1>Your Complete Wealth Profile</h1>
          <p className={styles.subtitle}>
            A comprehensive view of who you are and what you want in your wealth journey
          </p>
        </header>

        <div className={styles.profileGrid}>
          <div className={styles.personalityCard}>
            <div 
              className={styles.roleTag} 
              style={{ backgroundColor: personality.archetype.role.color }}
            >
              {personality.archetype.role.name}
            </div>
            <h2>{personality.archetype.name}</h2>
            <div className={styles.typeCode}>{personality.archetype.code}</div>
            <p className={styles.description}>{personality.archetype.description}</p>
            <Link 
              href={`/types/${personality.archetype.code}`} 
              className={styles.learnMore}
            >
              Learn more about your type →
            </Link>
          </div>

          <div className={styles.priorityCard}>
            <div className={styles.priorityIcon}>{priorities.priority.icon}</div>
            <h2>{priorities.priority.name}</h2>
            <p className={styles.tagline}>{priorities.priority.tagline}</p>
            
            <div className={styles.pillars}>
              <div className={styles.pillar}>
                <span className={styles.pillarIcon}>₿</span>
                <span className={styles.pillarName}>Capital</span>
                <span className={styles.pillarValue}>{priorities.percentages.capital}%</span>
              </div>
              <div className={styles.pillar}>
                <span className={styles.pillarIcon}>∞</span>
                <span className={styles.pillarName}>Time</span>
                <span className={styles.pillarValue}>{priorities.percentages.time}%</span>
              </div>
              <div className={styles.pillar}>
                <span className={styles.pillarIcon}>🗺</span>
                <span className={styles.pillarName}>Location</span>
                <span className={styles.pillarValue}>{priorities.percentages.location}%</span>
              </div>
            </div>
          </div>
        </div>

        <section className={styles.insightsSection}>
          <h2>Your Unique Wealth Blueprint</h2>
          <p className={styles.blueprintIntro}>
            As {personality.archetype.code === 'ENTJ' || personality.archetype.code === 'ESTJ' || personality.archetype.code === 'INTJ' || personality.archetype.code === 'ISTJ' ? 'an' : 'a'} <strong>{personality.archetype.name}</strong> with <strong>{priorities.priority.name}</strong> priorities, 
            you have a unique approach to building wealth that combines your natural strengths with your life goals.
          </p>

          <div className={styles.insightsGrid}>
            <div className={styles.insightCard}>
              <h3>✨ Synergies</h3>
              <p>Where your personality and priorities align perfectly:</p>
              <ul>
                {synergies.map((synergy, index) => (
                  <li key={index}>{synergy}</li>
                ))}
              </ul>
            </div>

            <div className={styles.insightCard}>
              <h3>⚡ Growth Areas</h3>
              <p>Potential tensions to navigate:</p>
              <ul>
                {tensions.map((tension, index) => (
                  <li key={index}>{tension}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.recommendationsSection}>
          <h2>Personalized Recommendations</h2>
          <div className={styles.recommendationsGrid}>
            <div className={styles.recommendationCard}>
              <h4>Ideal Business Models</h4>
              <p>{getBusinessModel(personality.archetype.code, priorities.priority.id)}</p>
            </div>
            <div className={styles.recommendationCard}>
              <h4>Investment Strategy</h4>
              <p>{getInvestmentStrategy(personality.archetype.code, priorities.priority.id)}</p>
            </div>
            <div className={styles.recommendationCard}>
              <h4>Career Path</h4>
              <p>{getCareerPath(personality.archetype.code, priorities.priority.id)}</p>
            </div>
            <div className={styles.recommendationCard}>
              <h4>Next Best Action</h4>
              <p>{getNextAction(personality.archetype.code, priorities.priority.id)}</p>
            </div>
          </div>
        </section>

        <footer className={styles.profileFooter}>
          <p>Profile created on {new Date().toLocaleDateString()}</p>
          <div className={styles.footerActions}>
            <button 
              onClick={() => {
                QuizStorage.clearResults();
                router.push('/');
              }} 
              className={styles.clearButton}
            >
              Clear Results & Start Over
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
}

// Helper functions for personalized insights
function getSynergies(personalityType: string, priorityType: string): string[] {
  const synergies: Record<string, Record<string, string[]>> = {
    'capital-titan': {
      'ENTJ': ['Your natural leadership amplifies wealth-building capacity', 'Strategic thinking aligns with long-term wealth goals'],
      'ESTJ': ['Organizational skills support empire building', 'Practical approach ensures sustainable growth'],
    },
    'time-architect': {
      'INFP': ['Values-driven approach aligns with lifestyle design', 'Creative nature thrives with time freedom'],
      'ISFP': ['Appreciation for present moments enhances time wealth', 'Flexible nature adapts well to autonomous schedule'],
    },
    'global-nomad': {
      'ENTP': ['Adaptability makes location changes exciting', 'Innovation thrives in diverse environments'],
      'ESTP': ['Action-oriented nature suits nomadic lifestyle', 'Cultural experiences fuel your energy'],
    },
  };

  return synergies[priorityType]?.[personalityType] || [
    'Your unique combination creates powerful opportunities',
    'Natural strengths support your wealth priorities'
  ];
}

function getTensions(personalityType: string, priorityType: string): string[] {
  const tensions: Record<string, Record<string, string[]>> = {
    'time-architect': {
      'ENTJ': ['Natural drive may conflict with relaxation goals', 'Leadership tendencies might resist delegation'],
      'ESTJ': ['Structure preference may limit flexibility', 'Work ethic could overshadow time freedom'],
    },
    'global-nomad': {
      'ISTJ': ['Preference for stability challenges nomadic life', 'Routine-oriented nature may resist constant change'],
      'ISFJ': ['Community focus conflicts with transient lifestyle', 'Security needs may limit location flexibility'],
    },
  };

  return tensions[priorityType]?.[personalityType] || [
    'Balance ambition with chosen lifestyle',
    'Align natural tendencies with priority goals'
  ];
}

function getBusinessModel(personalityType: string, priorityType: string): string {
  const models: Record<string, string> = {
    'ENTJ-capital-titan': 'Scalable B2B SaaS or acquisition-focused holding company',
    'INFP-time-architect': 'Creative agency with recurring revenue or digital products',
    'ENTP-global-nomad': 'Location-independent consulting or global e-commerce',
  };

  const key = `${personalityType}-${priorityType}`;
  return models[key] || 'A business model that leverages your strengths while supporting your lifestyle goals';
}

function getInvestmentStrategy(personalityType: string, priorityType: string): string {
  if (priorityType.includes('capital')) {
    return 'Growth-focused portfolio with active management and alternative investments';
  } else if (priorityType.includes('time')) {
    return 'Passive index funds and dividend aristocrats for hands-off wealth building';
  } else if (priorityType.includes('global')) {
    return 'Globally diversified portfolio with location-independent income streams';
  }
  return 'Balanced approach matching your risk tolerance and lifestyle priorities';
}

function getCareerPath(personalityType: string, priorityType: string): string {
  const isLeader = ['ENTJ', 'ESTJ', 'ENFJ', 'ESFJ'].includes(personalityType);
  const isCreative = ['INFP', 'ISFP', 'ENFP', 'ESFP'].includes(personalityType);
  
  if (isLeader && priorityType.includes('capital')) {
    return 'C-suite executive track or serial entrepreneurship';
  } else if (isCreative && priorityType.includes('time')) {
    return 'Freelance creative work or passion-driven business ownership';
  }
  return 'A path that maximizes both your natural talents and desired lifestyle';
}

function getNextAction(personalityType: string, priorityType: string): string {
  if (priorityType.includes('capital')) {
    return 'Set specific wealth targets and create a 5-year accumulation plan';
  } else if (priorityType.includes('time')) {
    return 'Audit your calendar and eliminate one major time commitment this month';
  } else if (priorityType.includes('location')) {
    return 'Research visa requirements and test remote work for 1 month';
  }
  return 'Create a 90-day action plan aligning your personality strengths with priority goals';
}