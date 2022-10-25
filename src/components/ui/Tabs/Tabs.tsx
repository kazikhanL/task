import styles from "./Tabs.module.scss";
import TabsProps from "./Tabs.props";
import Button from "@/components/ui/Button";

function Tabs({ className = "", activeTab, tabs, onChange }: TabsProps): JSX.Element {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            {tabs.map((tab) => (
                <Button
                    key={tab.name}
                    onClick={() => onChange(tab)}
                    color={activeTab.name === tab.name ? "main" : "transparent"}
                >
                    {tab.name}
                </Button>
            ))}
        </div>
    );
}

export default Tabs;
