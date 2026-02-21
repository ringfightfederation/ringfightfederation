import Section from "./Section";
import styles from "./GameStructure.module.css";

const ROUNDS = [
    {
        id: 1,
        title: "Round 1",
        time: "2 Minutes",
        action: "Punches Only",
        desc: "Face Punches, Chest Punches, and Fist Techniques allowed."
    },
    {
        id: 2,
        title: "Round 2",
        time: "2 Minutes",
        action: "Kicks Only",
        desc: "All Kicking techniques allowed (based on age group rules)."
    },
    {
        id: 3,
        title: "Round 3",
        time: "2 Minutes",
        action: "Mixed Combat",
        desc: "Face Punches, Fist Techniques, and All Kicks allowed."
    }
];

export default function GameStructure() {
    return (
        <Section id="game-structure" background="dark">
            <div className={styles.header}>
                <h2>Combat Structure</h2>
                <p>The Triple-Threat Format</p>
            </div>

            <div className={styles.cards}>
                {ROUNDS.map((round) => (
                    <div key={round.id} className={`${styles.card} glass`}>
                        <div className={styles.roundNumber}>0{round.id}</div>
                        <h3>{round.title}</h3>
                        <div className={styles.time}>{round.time}</div>
                        <div className={styles.divider}></div>
                        <h4 className={styles.action}>{round.action}</h4>
                        <p>{round.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
