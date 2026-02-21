import Section from "./Section";
import styles from "./GoverningBody.module.css";

const MEMBERS = [
    { role: "Chairman", name: "Name Here" },
    { role: "Vice Chairman", name: "Name Here" },
    { role: "President", name: "Name Here" },
    { role: "General Secretary", name: "Name Here" },
    { role: "Vice President", name: "Name Here" },
    { role: "Vice President", name: "Name Here" },
    { role: "Technical Director", name: "Name Here" },
    { role: "Asst. Technical Director", name: "Name Here" },
    { role: "Organising Secretary", name: "Name Here" },
    { role: "Joint Organising Secretary", name: "Name Here" },
    { role: "Referee Board Chairman", name: "Name Here" },
    { role: "Referee Board Vice Chairman", name: "Name Here" },
];

export default function GoverningBody() {
    return (
        <Section id="governing-body" background="default">
            <div className={styles.header}>
                <h2>Indian Governing Body</h2>
                <div className={styles.divider}></div>
            </div>

            <div className={styles.grid}>
                {MEMBERS.map((member, index) => (
                    <div key={index} className={`${styles.card} glass`}>
                        <div className={styles.avatar}></div>
                        <h4 className={styles.role}>{member.role}</h4>
                        <p className={styles.name}>{member.name}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
