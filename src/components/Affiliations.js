"use client";
import React from 'react';
import Section from "./Section";
import styles from "./Affiliations.module.css";

const INTERNATIONAL_HEADS = [
    { country: "India", name: "Name Here", designation: "Designation Here" },
    { country: "Nepal", name: "Name Here", designation: "Designation Here" },
];

const INDIAN_HEADS = [
    { state: "Andhra Pradesh", role: "President", name: "Name Here", designation: "Designation Here" },
    { state: "Andhra Pradesh", role: "General Secretary", name: "Name Here", designation: "Designation Here" },
    { state: "Telangana", role: "President", name: "Name Here", designation: "Designation Here" },
    { state: "Telangana", role: "General Secretary", name: "Name Here", designation: "Designation Here" },
    { state: "Odisha", role: "President", name: "Name Here", designation: "Designation Here" },
    { state: "Odisha", role: "General Secretary", name: "Name Here", designation: "Designation Here" },
    { state: "Chhattisgarh", role: "President", name: "Name Here", designation: "Designation Here" },
    { state: "Chhattisgarh", role: "General Secretary", name: "Name Here", designation: "Designation Here" },
];

export default function Affiliations() {
    return (
        <Section id="affiliations" background="charcoal">
            <div className={styles.header}>
                <h2>Affiliations</h2>
                <div className={styles.divider}></div>
            </div>

            <div className={styles.sectionBlock}>
                <h3 className={styles.subHeader}>International Ring Fight Federation</h3>
                <div className={styles.grid}>
                    {INTERNATIONAL_HEADS.map((head, index) => (
                        <div key={index} className={`${styles.card} glass`}>
                            <h4 className={styles.country}>{head.country}</h4>
                            <div className={styles.avatarPlaceholder}>Photo</div>
                            <p className={styles.name}>{head.name}</p>
                            <p className={styles.designation}>{head.designation}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.sectionBlock}>
                <h3 className={styles.subHeader}>Indian Federation Heads</h3>
                <div className={styles.grid}>
                    {INDIAN_HEADS.map((head, index) => (
                        <div key={index} className={`${styles.card} glass`}>
                            <h4 className={styles.state}>{head.state}</h4>
                            <span className={styles.roleLabel}>{head.role}</span>
                            <div className={styles.avatarPlaceholder}>Photo</div>
                            <p className={styles.name}>{head.name}</p>
                            <p className={styles.designation}>{head.designation}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.sectionBlock}>
                <h3 className={styles.subHeader}>Recognitions</h3>
                <p style={{ textAlign: 'center', color: '#888' }}>Coming Soon</p>
            </div>
        </Section>
    );
}
