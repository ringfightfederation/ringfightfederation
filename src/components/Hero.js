import styles from "./Hero.module.css";
import Button from "./Button";

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
                poster="/assets/hero-poster.jpg"
            >
                <source src="/assets/hero-bg.mp4" type="video/mp4" />
                {/* Fallback text or image if video fails is handled by poster */}
            </video>

            <div className={styles.content}>
                <div className="container">
                    <h1 className={styles.title}>
                        International <br />
                        <span className={styles.highlight}>Ring Fight</span> Federation
                    </h1>
                    <p className={styles.subtitle}>
                        Preserving Tradition. Elevating Combat.
                    </p>
                    <div className={styles.actions}>
                        <Button href="#championships" variant="primary">
                            Explore Championships
                        </Button>
                        <Button href="#join" variant="secondary">
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
