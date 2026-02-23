"use client";

import { useEffect, useState, useRef } from "react";
import Section from "./Section";
import styles from "./Founder.module.css";
import Image from "next/image";

const STATS = [
    { label: "States Affiliated", value: 28 },
    { label: "Championships", value: 50, suffix: "+" },
    { label: "Athletes", value: 10000, suffix: "+" },
    { label: "Years Service", value: 15, suffix: "+" },
];

const Counter = ({ target, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !started.current) {
                    started.current = true;
                    let start = 0;
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return <span ref={ref}>{count}{suffix}</span>;
};

export default function Founder() {
    return (
        <Section id="founder" className={styles.founder} background="default">
            <div className="container">
                <div className={styles.header}>
                    <h2>Visionary Leadership</h2>
                    <div className={styles.divider}></div>
                </div>

                <div className={styles.content}>
                    <div className={styles.imageFrame}>
                        <div className={styles.founderImage}>
                            <Image
                                src="/assets/founder.jpeg"
                                alt="Tadem Ravi Kumar - Founder & President"
                                fill
                                style={{ objectFit: 'cover', borderRadius: '8px' }}
                            />
                        </div>
                        <div className={styles.goldBorder}></div>
                    </div>

                    <div className={styles.textContainer}>
                        <h3 className={styles.name}>Tadem Ravi Kumar</h3>
                        <p className={styles.title}>Founder & President</p>
                        <p className={styles.subtitle}>International Ring Fight Federation & Ring Fight Federation of India</p>

                        <div className={styles.bio}>
                            <p>
                                Born in Nalgonda District, Telangana, Tadem Ravi Kumar is a multifaceted personality—
                                sports administrator, martial artist, cine fighter, and social worker.
                                As the fourth son of Late Tadem Jaihind (Fisheries Dept) and Late Yadamma,
                                he has dedicated his life to promoting indigenous combat sports.
                            </p>
                            <p>
                                With an NSNIS 6-Week Course in Judo and multiple Black Belts, he has established
                                himself as a respected figure in the martial arts community. Beyond sports,
                                he has contributed to the film industry as a cine fighter and is actively
                                involved in social service and rural empowerment.
                            </p>
                        </div>

                        <ul className={styles.credentials}>
                            <li>NSNIS Judo Qualified & Black Belt Holder</li>
                            <li>Cine Fighter & Stunt Director</li>
                            <li>Social Worker & Agriculturist</li>
                            <li>Visionary of Modern Ring Fight</li>
                        </ul>

                        <div className={styles.statsGrid}>
                            {STATS.map((stat, index) => (
                                <div key={index} className={styles.statItem}>
                                    <div className={styles.statValue}>
                                        <Counter target={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className={styles.statLabel}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
