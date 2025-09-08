import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
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
          </div>
          <div className={styles.navLinks}>
            <Link href="/test">Wealth Test</Link>
            <Link href="/types">Wealth Types</Link>
          </div>
        </div>
      </nav>

      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          &ldquo;It&apos;s so incredible to finally understand your wealth mindset.&rdquo;
        </h1>
        <p className={styles.heroDescription}>
          Only 10 minutes to get a &ldquo;freakishly accurate&rdquo; description of your wealth personality
          and why you handle money the way you do.
        </p>
        <Link href="/test" className={styles.ctaButton}>
          Take the Test
        </Link>
      </section>

      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>24K+</div>
            <div className={styles.statLabel}>Tests taken today</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>2.1M+</div>
            <div className={styles.statLabel}>Tests taken this year</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>18M+</div>
            <div className={styles.statLabel}>Total tests taken</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>94.8%</div>
            <div className={styles.statLabel}>Results rated as accurate</div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featureCard}>
          <h2>Wealth Personality Types</h2>
          <h3>Understand Your Financial DNA</h3>
          <p>
            In our comprehensive type descriptions, you&apos;ll discover what truly drives your
            financial decisions, your natural wealth-building strengths, and the blind spots
            that might be holding you back.
          </p>
          <Link href="/types" className={styles.featureLink}>
            Explore Wealth Types →
          </Link>
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2>See what others have to say</h2>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonial}>
            <div className={styles.testimonialHeader}>
              <div className={styles.testimonialAvatar}>E</div>
              <div>
                <div className={styles.testimonialName}>Emma</div>
                <div className={styles.testimonialType}>Empire Builder (ENTJ-A)</div>
              </div>
            </div>
            <p className={styles.testimonialText}>
              Finally understood why I&apos;m always thinking 10 steps ahead financially. This test
              revealed my natural strategic strengths and helped me lean into them.
            </p>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.testimonialHeader}>
              <div className={styles.testimonialAvatar}>M</div>
              <div>
                <div className={styles.testimonialName}>Marcus</div>
                <div className={styles.testimonialType}>Protector (ISFJ-T)</div>
              </div>
            </div>
            <p className={styles.testimonialText}>
              Eye-opening! I always felt guilty about being cautious with money. Now I understand
              it&apos;s actually one of my wealth-building superpowers.
            </p>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.testimonialHeader}>
              <div className={styles.testimonialAvatar}>S</div>
              <div>
                <div className={styles.testimonialName}>Sophia</div>
                <div className={styles.testimonialType}>Entrepreneur (ENTP-A)</div>
              </div>
            </div>
            <p className={styles.testimonialText}>
              This explained so much about why traditional financial advice never worked for me.
              My wealth archetype thrives on innovation and calculated risks!
            </p>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <h2>Curious about your wealth archetype?</h2>
        <Link href="/test" className={styles.ctaButton}>
          Take the Test
        </Link>
      </section>
    </main>
  );
}