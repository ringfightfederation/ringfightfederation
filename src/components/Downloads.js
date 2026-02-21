import Section from "./Section";
import styles from "./Downloads.module.css";
import Button from "./Button";

const DOCUMENTS = [
    { title: "Result", type: "PDF", size: "Download" },
    { title: "Downloads", type: "Folder", size: "Open" },
    { title: "Rules & Regulations", type: "PDF", size: "Download" },
    { title: "Score Sheet", type: "PDF", size: "Download" },
    { title: "Draw Sheet", type: "PDF", size: "Download" },
    { title: "Medal List", type: "PDF", size: "Download" },
];

export default function Downloads() {
    return (
        <Section id="downloads" background="default">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Downloads</h2>
                    <p>Official Resources & Documents</p>
                </div>

                <div className={styles.list}>
                    {DOCUMENTS.map((doc, index) => (
                        <div key={index} className={styles.row}>
                            <div className={styles.info}>
                                <h4>{doc.title}</h4>
                                <span>{doc.type} • {doc.size}</span>
                            </div>
                            <Button variant="secondary" className={styles.btn}>Download</Button>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
