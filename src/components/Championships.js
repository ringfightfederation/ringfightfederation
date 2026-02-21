import Section from "./Section";
import styles from "./Championships.module.css";
import Button from "./Button";

const EVENTS = [
    { id: 9, title: "9th National Championship", location: "Mumbai", year: "2024" },
    { id: 8, title: "8th National Championship", location: "Hyderabad", year: "2023" },
    { id: 7, title: "7th National Championship", location: "Bangalore", year: "2022" },
    { id: 6, title: "6th National Championship", location: "Chennai", year: "2021" },
    { id: 5, title: "5th National Championship", location: "Delhi", year: "2020" },
];

export default function Championships() {
    return (
        <Section id="championships" background="default">
            <div className={styles.header}>
                <h2>Championship History</h2>
                <div className={styles.divider}></div>
            </div>

            <div className={styles.grid}>
                {EVENTS.map((event) => (
                    <div key={event.id} className={`${styles.card} glass`}>
                        <div className={styles.medalIcon}>🏆</div>
                        <h3>{event.title}</h3>
                        <p className={styles.meta}>{event.location} • {event.year}</p>
                        <Button variant="secondary" className={styles.btn}>View Results</Button>
                    </div>
                ))}
            </div>
        </Section>
    );
}
