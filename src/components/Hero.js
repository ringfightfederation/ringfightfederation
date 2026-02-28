"use client";
import styles from "./Hero.module.css";
import Button from "./Button";
import Image from "next/image";

const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Video Background */}
            <div className={styles.videoOverlay}></div>
            <video
                autoPlay
                loop
                muted
                playsInline
                className={styles.video}
            >
                <source src="/assets/hero-video.mp4" type="video/mp4" />
            </video>

            <div className={styles.content}>
                <div className="container">
                    <div className={styles.logos}>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="/assets/international-logo.png"
                                alt="International Ring Fight Federation"
                                width={160}
                                height={160}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="/assets/india-logo.png"
                                alt="Ring Fight Federation of India"
                                width={160}
                                height={160}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                    <h1 className={styles.title}>
                        International <br />
                        <span className={styles.highlight}>Ring Fight</span> Federation
                    </h1>
                    <p className={styles.subtitle}>
                        Preserving Tradition. Elevating Combat.
                    </p>
                    <div className={styles.actions}>
                        <Button onClick={() => scrollToSection('championships')} variant="primary">
                            Explore Championships
                        </Button>
                        <Button onClick={() => scrollToSection('contact')} variant="secondary">
                            Join the Federation
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <span>SCROLL</span>
                <div className={styles.line}></div>
            </div>
        </section>
    );
}
