import Section from "./Section";
import styles from "./GoverningBody.module.css";
import Image from "next/image";

const MEMBERS = [
    {
        role: "Chairman",
        name: "Anand Sahu Ji",
        image: "/assets/Chairman - Anand Sahu ji.jpeg"
    },
    {
        role: "President",
        name: "Tadem Ravi Kumar",
        image: "/assets/President - Tadem Ravi Kumar.jpeg"
    },
    {
        role: "General Secretary",
        name: "Macha Prabhakar",
        image: "/assets/General Secretary - Macha Prabhakar.jpeg"
    },
    {
        role: "Treasurer",
        name: "Bitti Chandra Sekhar",
        image: "/assets/Treasurer - Bitti Chandra Sekhar.jpeg"
    },
    {
        role: "Vice President",
        name: "Dr. K. Prem Kumar",
        image: "/assets/Vice President - Dr K Prem Kumar.jpeg"
    },
    {
        role: "Vice President",
        name: "Dr. Kumbam Ramreddy",
        image: "/assets/Vice President - Dr Kumbam Ramreddy.jpeg"
    },
    {
        role: "Vice President",
        name: "Om Prakash Katariya",
        image: "/assets/Vice President - Om Prakash Katariya.jpeg"
    },
    {
        role: "Vice President",
        name: "Sanjoy Biswas",
        image: "/assets/Vice President - Sanjoy Biswas.jpeg"
    },
    {
        role: "Technical Director",
        name: "Shaik Abdullah",
        image: "/assets/Technical Director - Shaik Abdullah.jpeg"
    },
    {
        role: "Organising Secretary",
        name: "S. Vidyadharani",
        image: "/assets/Organising Secretary - S Vidyadharani.jpeg"
    },
    {
        role: "Organising Joint Secretary",
        name: "Sudha",
        image: "/assets/Organising Joint Secretary - Sudha.png"
    },
    {
        role: "Joint Secretary",
        name: "Jaswindar Singh Ramgadiya",
        image: "/assets/Joint Secretary - Jaswindar Singh Ramgadiya.jpeg"
    },
    {
        role: "Joint Secretary",
        name: "Purnachandra Mohanty",
        image: "/assets/Joint Secretary - Purnachandra Mohanty.jpeg"
    },
    {
        role: "Executive Member",
        name: "Ram Kumar Samanta",
        image: "/assets/Executive Member - Ram Kumar Samanta.jpeg"
    },
    {
        role: "Executive Member",
        name: "T. Jayaram",
        image: "/assets/Executive member - T Jayaram.jpeg"
    },
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
                        <div className={styles.avatar}>
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <h4 className={styles.role}>{member.role}</h4>
                        <p className={styles.name}>{member.name}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
