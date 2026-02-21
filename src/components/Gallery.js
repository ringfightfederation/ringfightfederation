"use client";
import React, { useState } from "react";
import Section from "./Section";
import styles from "./Gallery.module.css";
import Image from "next/image";

// Placeholder images
const GALLERY_ITEMS = [
    { id: 1, type: "image", src: "/assets/gallery-1.jpg", alt: "Fight Action" },
    { id: 2, type: "image", src: "/assets/gallery-2.jpg", alt: "Medal Ceremony" },
    { id: 3, type: "image", src: "/assets/gallery-3.jpg", alt: "Training" },
    { id: 4, type: "image", src: "/assets/gallery-4.jpg", alt: "Crowd" },
    { id: 5, type: "image", src: "/assets/gallery-5.jpg", alt: "Championship" },
    { id: 6, type: "image", src: "/assets/gallery-6.jpg", alt: "Rope Duel" },
];

export default function Gallery() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeImage, setActiveImage] = useState(null);

    const openLightbox = (item) => {
        setActiveImage(item);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setActiveImage(null);
    };

    return (
        <Section id="gallery" background="charcoal">
            <div className={styles.header}>
                <h2>Media Gallery</h2>
                <div className={styles.divider}></div>
            </div>

            <div className={styles.masonry}>
                {GALLERY_ITEMS.map((item) => (
                    <div key={item.id} className={styles.item} onClick={() => openLightbox(item)}>
                        <div className={styles.overlay}>
                            <span className={styles.viewIcon}>View</span>
                        </div>
                        {/* Placeholder div since we don't have real images yet */}
                        <div className={styles.placeholderImg}>
                            {item.alt}
                        </div>
                    </div>
                ))}
            </div>

            {lightboxOpen && (
                <div className={styles.lightbox} onClick={closeLightbox}>
                    <div className={styles.lightboxContent}>
                        {activeImage && (
                            <div className={styles.lightboxPlaceholder}>
                                {activeImage.alt}
                            </div>
                        )}
                        <button className={styles.closeBtn} onClick={closeLightbox}>×</button>
                    </div>
                </div>
            )}
        </Section>
    );
}
