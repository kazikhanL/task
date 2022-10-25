import styles from "./Button.module.scss";
import ButtonProps from "./Button.props";

function Button({ className = "", color = "transparent", children, ...attributes }: ButtonProps): JSX.Element {
    const styleClasses = `${styles.button} ${styles[color]} ${className}`;

    return (
        <button className={styleClasses} {...attributes}>
            {children}
        </button>
    );
}

export default Button;
