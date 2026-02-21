import Link from 'next/link';
import styles from './Button.module.css';

const Button = ({
    children,
    href,
    variant = 'primary',
    className = '',
    onClick,
    ...props
}) => {
    const rootClassName = `${styles.button} ${styles[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={rootClassName} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={rootClassName} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
