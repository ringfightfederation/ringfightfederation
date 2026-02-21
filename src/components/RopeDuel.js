"use client";
import React, { useState } from 'react';
import Section from "./Section";
import styles from "./RopeDuel.module.css";
import Button from "./Button";
import Image from "next/image";

export default function RopeDuel() {
    const [activeSide, setActiveSide] = useState(null);

    return (
        <Section id="rope-duel" className={styles.ropeDuel} background="charcoal">
            <div className={styles.header}>
                <h2>Tug Line Duel</h2>
                <p className={styles.subtitle}>Pull & Reach Concept</p>
            </div>

            <div className={styles.imageContainer} style={{ position: 'relative' }}>
                <Image
                    src="/assets/crowd rope pull.jpg"
                    alt="Ancient Rope Pulling Tradition"
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </div>

            <div className={styles.diagramContainer}>
                <div className={styles.court}>
                    {/* Blue Corner */}
                    <div
                        className={`${styles.corner} ${styles.blueCorner} ${activeSide === 'blue' ? styles.active : ''}`}
                        onMouseEnter={() => setActiveSide('blue')}
                        onMouseLeave={() => setActiveSide(null)}
                    >
                        <h3>Blue Corner</h3>
                        <div className={styles.playerIcon}></div>
                    </div>

                    {/* Rope & Center */}
                    <div className={styles.duelZone}>
                        <div className={styles.rope}></div>
                        <div className={styles.centerLine}></div>
                        <div className={`${styles.marker} ${activeSide ? styles[activeSide] : ''}`}></div>
                    </div>

                    {/* Red Corner */}
                    <div
                        className={`${styles.corner} ${styles.redCorner} ${activeSide === 'red' ? styles.active : ''}`}
                        onMouseEnter={() => setActiveSide('red')}
                        onMouseLeave={() => setActiveSide(null)}
                    >
                        <h3>Red Corner</h3>
                        <div className={styles.playerIcon}></div>
                    </div>
                </div>

                <div className={styles.rulesGrid}>
                    <div className={styles.ruleCard}>
                        <h4>Scoring System</h4>
                        <p>
                            <strong>1 Point</strong> is awarded if you pull the opponent to touch/cross the center line.
                        </p>
                    </div>
                    <div className={styles.ruleCard}>
                        <h4>Win Condition</h4>
                        <p>
                            First to reach <strong>3 Points</strong> wins the duel.
                            Sudden death applies in case of a tie after 3 rounds.
                        </p>
                    </div>
                    <div className={styles.ruleCard}>
                        <h4>Leather Armor</h4>
                        <p>
                            Traditionally, players wear leather armor on their hands for protection
                            and grip during the intense tug-of-war phase.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
