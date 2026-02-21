import Section from "./Section";
import styles from "./Contact.module.css";
import Button from "./Button";

export default function Contact() {
    return (
        <Section id="contact" background="charcoal">
            <div className={styles.grid}>
                <div className={styles.infoCol}>
                    <h2>Get in Touch</h2>
                    <div className={styles.divider}></div>
                    <p className={styles.intro}>
                        Ready to join the revolution? Contact the International Ring Fight Federation.
                    </p>

                    <div className={styles.details}>
                        <div className={styles.detailItem}>
                            <h4>Headquarters</h4>
                            <p>6-1-193, Boyawada, Ramagiri,<br />Nalgonda, Telangana State,<br />India - 508001.</p>
                        </div>
                        <div className={styles.detailItem}>
                            <h4>Regional Office</h4>
                            <p>6-1-61/107/103, Beside Fish Building,<br />Gangaputra Colony, Musheerabad,<br />Hyderabad, Telangana, India - 500020.</p>
                        </div>
                        <div className={styles.detailItem}>
                            <h4>Direct Line</h4>
                            <p className={styles.highlight}>+91 9666370202</p>
                            <p className={styles.highlight}>+91 8790039202</p>
                        </div>
                        <div className={styles.detailItem}>
                            <h4>Donations</h4>
                            <div className={styles.qrPlaceholder}>QR Code</div>
                        </div>
                    </div>

                    <div className={styles.socials}>
                        <h4>Connect With Us</h4>
                        <div className={styles.socialIcons}>
                            <a href="#" className={styles.icon}>WhatsApp</a>
                            <a href="#" className={styles.icon}>Facebook</a>
                            <a href="#" className={styles.icon}>YouTube</a>
                            <a href="#" className={styles.icon}>LinkedIn</a>
                            <a href="#" className={styles.icon}>X (Twitter)</a>
                            <a href="#" className={styles.icon}>Threads</a>
                        </div>
                    </div>
                </div>

                <div className={styles.mapCol}>
                    <div className={styles.mapFrame}>
                        {/* Google Map Placeholder */}
                        <div className={styles.mapPlaceholder}>
                            Google Map Embed
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <p>&copy; {new Date().getFullYear()} International Ring Fight Federation. All Rights Reserved.</p>
            </div>
        </Section>
    );
}
