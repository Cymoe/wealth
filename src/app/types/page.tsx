import Link from "next/link";
import { WEALTH_ARCHETYPES, WEALTH_ROLES } from "@/lib/wealth-archetypes";
import styles from "./types.module.css";

export default function TypesPage() {
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
            <Link href="/test">Take Test</Link>
          </div>
        </div>
      </nav>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1>16 Wealth Archetypes</h1>
          <p>
            Discover the different approaches to building and managing wealth. Each archetype
            represents a unique combination of preferences, strengths, and strategies for
            financial success.
          </p>
        </div>

        {Object.values(WEALTH_ROLES).map((role) => (
          <div key={role.name} className={styles.roleSection}>
            <div 
              className={styles.roleHeader}
              style={{ borderColor: role.color }}
            >
              <h2 style={{ color: role.color }}>{role.name}</h2>
              <p>{role.description}</p>
            </div>
            
            <div className={styles.archetypeGrid}>
              {Object.values(WEALTH_ARCHETYPES)
                .filter(archetype => archetype.role.name === role.name)
                .map((archetype) => (
                  <Link
                    key={archetype.code}
                    href={`/types/${archetype.code}`}
                    className={styles.archetypeCard}
                    style={{ borderColor: role.color }}
                  >
                    <div className={styles.archetypeHeader}>
                      <h3>{archetype.name}</h3>
                      <span className={styles.archetypeCode}>{archetype.code}</span>
                    </div>
                    <p className={styles.archetypeDescription}>
                      {archetype.description}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        ))}

        <div className={styles.ctaSection}>
          <h2>Discover Your Wealth Archetype</h2>
          <p>
            Take our comprehensive assessment to understand your unique approach to wealth building.
          </p>
          <Link href="/test" className={styles.ctaButton}>
            Take the Test
          </Link>
        </div>
      </div>
    </main>
  );
}