"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";
import Button from "./Button";

const MENU_ITEMS = [
    {
        label: "HOME",
        href: "/",
        submenu: [
            { label: "About Us", href: "#about" },
            { label: "History of Ring Fight", href: "#history" },
            { label: "Founder", href: "#founder" }
        ]
    },
    {
        label: "MEMBERS",
        href: "#members",
        submenu: [
            { label: "International", href: "#international" },
            { label: "National", href: "#national" },
            { label: "Officials", href: "#officials" }
        ]
    },
    {
        label: "GALLERY",
        href: "#gallery",
        submenu: [
            { label: "Photo", href: "#photos" },
            { label: "Video", href: "#videos" },
            { label: "Media", href: "#media" }
        ]
    },
    {
        label: "RULES & REGULATIONS",
        href: "#rules",
        submenu: [
            { label: "Rule Book", href: "#rule-book" },
            { label: "Score Sheet", href: "#score-sheet" },
            { label: "Draw Sheet", href: "#draw-sheet" },
            { label: "Medal List", href: "#medal-list" }
        ]
    },
    {
        label: "CHAMPIONSHIPS",
        href: "#championships",
        submenu: [
            { label: "National", href: "#nat-champs" },
            { label: "International", href: "#int-champs" },
            { label: "Downloads", href: "#downloads" },
            { label: "Recognitions", href: "#recognitions" },
            { label: "Application Form", href: "#form" },
            { label: "Result", href: "#results" }
        ]
    },
    {
        label: "AFFILIATIONS",
        href: "#affiliations",
        submenu: [
            { label: "International Federation", href: "#int-fed" },
            { label: "Indian Governing Body", href: "#ind-fed" },
            { label: "Federation Heads", href: "#heads" },
            { label: "Referee Board", href: "#referees" }
        ]
    },
    {
        label: "CONTACT US",
        href: "#contact"
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

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const toggleSubmenu = (index) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    IRFF <span className={styles.tm}>&trade;</span>
                </Link>

                {/* Desktop Menu */}
                <ul className={styles.desktopMenu}>
                    {MENU_ITEMS.map((item, index) => (
                        <li key={index} className={styles.menuItem}>
                            <Link href={item.href} className={styles.menuLink}>
                                {item.label}
                            </Link>
                            {item.submenu && (
                                <ul className={styles.dropdown}>
                                    {item.submenu.map((sub, subIndex) => (
                                        <li key={subIndex}>
                                            <Link href={sub.href} className={styles.dropdownLink}>
                                                {sub.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                <div className={styles.actions}>
                    <Button variant="outline" href="#join" className={styles.joinBtn}>Join</Button>
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
                                    <Link href={item.href} className={styles.mobileLink}>
                                        {item.label}
                                    </Link>
                                    {item.submenu && (
                                        <span className={`${styles.arrow} ${activeSubmenu === index ? styles.rotate : ""}`}>▼</span>
                                    )}
                                </div>
                                {item.submenu && (
                                    <ul className={`${styles.mobileDropdown} ${activeSubmenu === index ? styles.show : ""}`}>
                                        {item.submenu.map((sub, subIndex) => (
                                            <li key={subIndex}>
                                                <Link href={sub.href} className={styles.mobileDropdownLink} onClick={() => setMobileMenuOpen(false)}>
                                                    {sub.label}
                                                </Link>
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
