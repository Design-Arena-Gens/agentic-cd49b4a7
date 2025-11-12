import styles from "./page.module.css";

export default function Home() {
  const scenes = [
    {
      id: "scene-1",
      title: "Scene 1 · Caring Hand",
      time: "0 – 5 sec",
      voiceover:
        "Kabhi kabhi, bas ek caring haath hi sabse bada support hota hai.",
      visuals: [
        "Soft morning sunlight spills into a cozy living room.",
        "Elderly parent attempts to stand, hand slightly trembling.",
        "Smiling nurse steps in, steadies them with reassuring eye contact.",
      ],
    },
    {
      id: "scene-2",
      title: "Scene 2 · Services Montage",
      time: "6 – 15 sec",
      voiceover:
        "Eldertex Healthcare — Nursing care, Physiotherapy, Attendant service aur Medical Equipment… sab kuch, aapke ghar par.",
      visuals: [
        "Nurse checks blood pressure with professional precision.",
        "Physiotherapist guiding gentle hallway walk with gait belt.",
        "Attendant serving freshly prepared, diet-conscious meal.",
        "Home medical setup: oxygen concentrator and neatly arranged supplies.",
      ],
    },
    {
      id: "scene-3",
      title: "Scene 3 · Promise",
      time: "16 – 25 sec",
      voiceover:
        "Eldertex Healthcare – expert care, ghar jaisa pyaar.",
      visuals: [
        "Elderly parent seated comfortably, relaxed and smiling.",
        "Nurse holds their hand; family member watches with relief.",
        "Eldertex logo, tagline, and contact details fade in softly.",
      ],
    },
  ];

  const audioNotes = [
    "Use soft emotional piano reinforced with warm strings that swell subtly into each scene transition.",
    "Layer a gentle whoosh between scenes to accentuate the montage pacing without startling the listener.",
    "Fade the music slightly under the final line to let the brand name land clearly and confidently.",
  ];

  return (
    <main className={styles.page}>
      <div className={styles.wrapper}>
        <section className={styles.hero}>
          <span className={styles.badge}>Video Script · 25 sec</span>
          <h1 className={styles.title}>
            “Ghar Jaisa Care” for Eldertex Healthcare
          </h1>
          <div className={styles.subtitle}>
            <p>
              A concise, heart-led film that positions Eldertex Healthcare as
              the trusted partner bringing hospital-grade support into the
              comfort of home.
            </p>
            <p>
              <strong>Language:</strong> Hinglish voiceover with warm visual
              storytelling, crafted for social and TV spot formats.
            </p>
          </div>
          <div className={styles.heroFooter}>
            <span>
              <ClockIcon /> Total runtime: ~25 seconds
            </span>
            <span>
              <MusicIcon /> Mood: Comforting · Reassuring · Hopeful
            </span>
            <span>
              <TargetIcon /> Audience: Family caregivers &amp; decision makers
            </span>
          </div>
        </section>

        <section className={styles.sections}>
          <article className={styles.timeline}>
            <div className={styles.timelineHeader}>
              <h2>Scene Breakdown</h2>
              <span className={styles.runtime}>3 scenes · 25s</span>
            </div>
            <div className={styles.sceneGrid}>
              {scenes.map((scene) => (
                <div key={scene.id} className={styles.sceneCard}>
                  <div className={styles.sceneHead}>
                    <span className={styles.sceneTime}>{scene.time}</span>
                    <span className={styles.sceneTitle}>{scene.title}</span>
                  </div>
                  <div className={styles.sceneContent}>
                    <div>
                      <div className={styles.sceneLabel}>Voiceover</div>
                      <p className={styles.voiceover}>{scene.voiceover}</p>
                    </div>
                    <div>
                      <div className={styles.sceneLabel}>Visual Direction</div>
                      <ul className={styles.shotList}>
                        {scene.visuals.map((shot, index) => (
                          <li key={`${scene.id}-shot-${index}`} className={styles.shotItem}>
                            <span>{shot}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.audioNotes}>
            <h3>Audio &amp; Delivery Notes</h3>
            <ul>
              {audioNotes.map((note, index) => (
                <li key={`audio-note-${index}`}>{note}</li>
              ))}
            </ul>
          </article>

          <aside className={styles.cta}>
            <h4>Eldertex Healthcare · Ghar Jaisa Care</h4>
            <span>
              Bring expert medical support home — compassionate nurses,
              physiotherapy, trained attendants, and equipment rentals in one
              trusted service.
            </span>
            <div className={styles.ctaLinks}>
              <a href="tel:+919876543210" aria-label="Call Eldertex Healthcare">
                <PhoneIcon />
                +91 98765 43210
              </a>
              <a
                href="mailto:care@eldertexhealth.com"
                aria-label="Email Eldertex Healthcare"
              >
                <MailIcon />
                care@eldertexhealth.com
              </a>
              <a
                href="https://eldertexhealth.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Eldertex Healthcare website"
              >
                <GlobeIcon />
                eldertexhealth.com
              </a>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l2.8 2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        d="M9 18.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm6 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 13.5V5l-6 1.2v7.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 4V2M4 12H2m20 0h-2m-8 8v2" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        d="M5.5 5a1.5 1.5 0 0 1 1.6-1.5l1.8.2a1.5 1.5 0 0 1 1.3 1l.8 2.4a1.5 1.5 0 0 1-.4 1.5l-1 1a13.5 13.5 0 0 0 5.3 5.3l1-1a1.5 1.5 0 0 1 1.5-.4l2.4.8a1.5 1.5 0 0 1 1 1.3l.2 1.8A1.5 1.5 0 0 1 19 19.5c-7.2 0-13-5.8-13-13Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
      <path d="m5 7 7 5 7-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path
        d="M12 3v18M5.6 7.5h12.8M5.6 16.5h12.8M8 5.4c1.1.8 2.6 1.2 4 1.1 1.4.1 2.9-.3 4-1.1m0 13.2c-1.1-.8-2.6-1.2-4-1.1-1.4-.1-2.9.3-4 1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}
