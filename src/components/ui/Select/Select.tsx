import { motion, AnimatePresence, Variants, Transition } from "framer-motion";

import styles from "./Select.module.scss";
import SelectProps from "./Select.props";
import Button from "../Button";
import DownArrowIcon from "@/components/icons/DownArrowIcon";
import useToggle from "@/hooks/useToggle";

function Select({
    input,
    currentOption,
    options,
    onChange,
    className = "",
}: SelectProps): JSX.Element {
    const [activeOptions, toggleActiveOptions] = useToggle();

    const optionsListAnimationTransition: Transition = { duration: 0.3 };
    const optionsListAnimationVarians: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    const hasOptions = options.length > 0;

    return (
        <div className={`${styles.wrapper} ${className}`}>
            <input {...input} />
            <Button className={styles.button} onClick={toggleActiveOptions}>
                <span>{currentOption.code}</span>
                <DownArrowIcon />
            </Button>
            
            <AnimatePresence>
                {activeOptions && hasOptions && (
                    <motion.ul
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className={styles.optionsList}
                        variants={optionsListAnimationVarians}
                        transition={optionsListAnimationTransition}
                        onClick={toggleActiveOptions}
                    >
                        {options.map((option) => (
                            <li key={option.code}>
                                <Button onClick={() => onChange(option)}>
                                    {option.name}
                                </Button>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Select;
