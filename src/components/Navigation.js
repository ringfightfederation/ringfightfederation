"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";
import Button from "./Button";

const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const MENU_ITEMS = [
    {
        label: "HOME",
        sectionId: "home",
        submenu: [
            { label: "About Us", sectionId: "about" },
            { label: "Founder", sectionId: "founder" },
        ]
    },
    {
        label: "MEMBERS",
        sectionId: "governing-body",
        submenu: [
            { label: "International", sectionId: "affiliations" },
            { label: "Indian Governing Body", sectionId: "governing-body" },
        ]
    },
    {
        label: "GALLERY",
        sectionId: "gallery",
        submenu: [
            { label: "Photo Gallery", sectionId: "gallery" },
        ]
    },
    {
        label: "RULES & REGULATIONS",
        sectionId: "game-structure",
        submenu: [
            { label: "Game Structure", sectionId: "game-structure" },
            { label: "Rope Duel Rules", sectionId: "rope-duel" },
        ]
    },
    {
        label: "CHAMPIONSHIPS",
        sectionId: "championships",
        submenu: [
            { label: "National", sectionId: "championships" },
        ]
    },
    {
        label: "CONTACT US",
        sectionId: "contact",
    }
];

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (item) => {
        if (item.sectionId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (item.sectionId) {
            scrollTo(item.sectionId);
        }
        setMobileMenuOpen(false);
        setActiveSubmenu(null);
    };

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const toggleSubmenu = (index) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                <button
                    className={styles.logo}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    IRFF <span className={styles.tm}>&trade;</span>
                </button>

                {/* Desktop Menu */}
                <ul className={styles.desktopMenu}>
                    {MENU_ITEMS.map((item, index) => (
                        <li key={index} className={styles.menuItem}>
                            {item.href ? (
                                <Link href={item.href} className={styles.menuLink}>{item.label}</Link>
                            ) : (
                                <button className={styles.menuLink} onClick={() => handleNavClick(item)}>
                                    {item.label}
                                </button>
                            )}
                            {item.submenu && (
                                <ul className={styles.dropdown}>
                                    {item.submenu.map((sub, subIndex) => (
                                        <li key={subIndex}>
                                            <button
                                                className={styles.dropdownLink}
                                                onClick={() => handleNavClick(sub)}
                                            >
                                                {sub.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                <div className={styles.actions}>
                    <Button variant="outline" onClick={() => scrollTo("contact")} className={styles.joinBtn}>Join</Button>
                </div>

                {/* Mobile Toggle */}
                <button className={styles.hamburger} onClick={toggleMobileMenu}>
                    <span className={`${styles.bar} ${mobileMenuOpen ? styles.open : ""}`}></span>
                    <span className={`${styles.bar} ${mobileMenuOpen ? styles.open : ""}`}></span>
                    <span className={`${styles.bar} ${mobileMenuOpen ? styles.open : ""}`}></span>
                </button>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileOpen : ""}`}>
                    <ul className={styles.mobileList}>
                        {MENU_ITEMS.map((item, index) => (
                            <li key={index} className={styles.mobileItem}>
                                <div className={styles.mobileHeader} onClick={() => toggleSubmenu(index)}>
                                    {item.href ? (
                                        <Link href={item.href} className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <button className={styles.mobileLink} onClick={() => handleNavClick(item)}>
                                            {item.label}
                                        </button>
                                    )}
                                    {item.submenu && (
                                        <span className={`${styles.arrow} ${activeSubmenu === index ? styles.rotate : ""}`}>▼</span>
                                    )}
                                </div>
                                {item.submenu && (
                                    <ul className={`${styles.mobileDropdown} ${activeSubmenu === index ? styles.show : ""}`}>
                                        {item.submenu.map((sub, subIndex) => (
                                            <li key={subIndex}>
                                                <button
                                                    className={styles.mobileDropdownLink}
                                                    onClick={() => handleNavClick(sub)}
                                                >
                                                    {sub.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
