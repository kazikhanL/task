import { ITab } from "@/interfaces/filter";

interface TabsProps {
    className?: string;
    tabs: ITab[];
    activeTab: ITab;
    onChange: (tab: ITab) => void;
}

export default TabsProps;
