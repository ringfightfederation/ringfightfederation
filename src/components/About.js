import Section from "./Section";
import styles from "./About.module.css";
import Image from "next/image";

const TIMELINE_EVENTS = [
    { year: "Ancient", title: "Roots in Holi Festival", desc: "Originated as 'Piddigudulata' in Telangana." },
    { year: "2012", title: "Organized Sport", desc: "Formalized rules and regulations established." },
    { year: "2024", title: "Global Expansion", desc: "International federation formation and recognition." },
    { year: "Future", title: "Olympic Vision", desc: "Aiming for inclusion in Asian Games and Olympics." },
];

export default function About() {
    return (
        <Section id="about" className={styles.about} background="charcoal">
            <div className={styles.grid}>
                <div className={styles.imageCol}>
                    <div className={styles.imageWrapper}>
                        {/* Placeholder for About Image */}
                        <Image
                            src="/assets/fighters in ring.jpg"
                            alt="Traditional Combat Fighters in Ring"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <div className={styles.patternBox}></div>
                </div>

                <div className={styles.textCol}>
                    <h2>Heritage & Evolution</h2>
                    <h3>The Art of War in Sports</h3>
                    <p>
                        Ring Fight, locally known as <strong>"Piddigudulata"</strong>, is an ancient Telangana tradition
                        originating from the Holi festival. Historically, it began with ropes made from
                        <strong>fiber from trees</strong>, where warriors would test their strength across three borders.
                    </p>
                    <p>
                        Under the visionary leadership of <strong>Tadem Ravi Kumar</strong>, this raw test of strength
                        has been transformed into a disciplined, high-performance combat sport since 2012.
                        It is now an organized "Art of War" in sports, connecting tradition with the modern ring.
                    </p>

                    <div className={styles.timeline}>
                        {TIMELINE_EVENTS.map((event, index) => (
                            <div key={index} className={styles.timelineItem}>
                                <div className={styles.year}>{event.year}</div>
                                <div className={styles.content}>
                                    <h4>{event.title}</h4>
                                    <p>{event.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
