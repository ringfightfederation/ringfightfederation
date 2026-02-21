import styles from './Section.module.css';

const Section = ({
    id,
    children,
    className = '',
    container = true,
    background = 'default' // default, dark, glass, etc
}) => {
    return (
        <section
            id={id}
            className={`${styles.section} ${styles[background]} ${className}`}
        >
            {container ? (
                <div className="container">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
};

export default Section;
