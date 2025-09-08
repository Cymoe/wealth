import Link from "next/link";
import { WEALTH_ARCHETYPES } from "@/lib/wealth-archetypes";
import styles from "./type-detail.module.css";

export default async function TypeDetailPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const archetype = WEALTH_ARCHETYPES[type];

  if (!archetype) {
    return (
      <main className={styles.main}>
        <div className={styles.error}>
          <h1>Type Not Found</h1>
          <p>We couldn&apos;t find that wealth archetype.</p>
          <Link href="/types" className={styles.backButton}>
            View All Types
          </Link>
        </div>
      </main>
    );
  }

  const relatedTypes = Object.values(WEALTH_ARCHETYPES)
    .filter(a => a.role.name === archetype.role.name && a.code !== archetype.code)
    .slice(0, 3);

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
            <Link href="/types">All Types</Link>
          </div>
        </div>
      </nav>

      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link href="/types">All Types</Link>
          <span>/</span>
          <span>{archetype.name}</span>
        </div>

        <div className={styles.header}>
          <div 
            className={styles.roleTag}
            style={{ backgroundColor: archetype.role.color }}
          >
            {archetype.role.name}
          </div>
          <h1>{archetype.name}</h1>
          <div className={styles.typeCode}>{archetype.code}</div>
        </div>

        <div className={styles.mainDescription}>
          <p>{archetype.description}</p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <section className={styles.section}>
              <h2>Wealth-Building Approach</h2>
              <p>
                As {archetype.code === 'ENTJ' || archetype.code === 'ESTJ' || archetype.code === 'INTJ' || archetype.code === 'ISTJ' ? 'an' : 'a'} {archetype.name}, 
                you excel at building wealth through your unique combination of traits. Your approach is characterized by 
                {archetype.role.name === 'Builders' && ' systematic planning and organizational excellence.'}
                {archetype.role.name === 'Innovators' && ' creative problem-solving and spotting new opportunities.'}
                {archetype.role.name === 'Connectors' && ' leveraging relationships and creating value through collaboration.'}
                {archetype.role.name === 'Guardians' && ' careful stewardship and sustainable growth strategies.'}
              </p>
            </section>

            <section className={styles.section}>
              <h2>Your Financial Strengths</h2>
              <div className={styles.strengthsGrid}>
                {archetype.strengths.map((strength, index) => (
                  <div key={index} className={styles.strengthItem}>
                    <div 
                      className={styles.strengthIcon}
                      style={{ backgroundColor: archetype.role.color }}
                    >
                      ✓
                    </div>
                    <div>
                      <h4>{strength}</h4>
                      <p>This natural ability helps you create and maintain wealth effectively.</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <h2>Growth Opportunities</h2>
              <p>
                While you have many natural strengths, awareness of these potential challenges can help you
                develop a more balanced approach to wealth building:
              </p>
              <ul className={styles.challengesList}>
                {archetype.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.roleCard}>
              <h3>The {archetype.role.name} Role</h3>
              <p>{archetype.role.description}</p>
            </div>

            <div className={styles.relatedTypes}>
              <h3>Related Types</h3>
              <div className={styles.relatedTypesList}>
                {relatedTypes.map((type) => (
                  <Link
                    key={type.code}
                    href={`/types/${type.code}`}
                    className={styles.relatedTypeLink}
                    style={{ borderColor: archetype.role.color }}
                  >
                    <span className={styles.relatedTypeName}>{type.name}</span>
                    <span className={styles.relatedTypeCode}>{type.code}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.ctaCard}>
              <h3>Discover Your Type</h3>
              <p>Take our assessment to find your wealth archetype.</p>
              <Link href="/test" className={styles.testButton}>
                Take the Test
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}