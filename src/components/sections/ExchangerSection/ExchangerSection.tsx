import { useState, useEffect } from "react";

import styles from "./ExchangerSection.module.scss";
import ExchangerSectionProps from "./ExchangerSection.props";
import { IFilterItem, ITab } from "@/interfaces/filter";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { changeSelectedFrom, changeSelectedTo } from "@/store/filterSlice";
import { tabs } from "@/constants/filter";
import Tabs from "@/components/ui/Tabs";
import Select from "@/components/ui/Select";

const ExchangerSection = ({ className = "" }: ExchangerSectionProps): JSX.Element => {
    const dispatch = useAppDispatch();
    const { directions, filter, selectedFrom, selectedTo } = useAppSelector((state) => state.filter);

    const onChangeSelectFrom = (option: IFilterItem) => dispatch(changeSelectedFrom(option));
    const onChangeSelectTo = (option: IFilterItem) => dispatch(changeSelectedTo(option));

    let fromOptions: IFilterItem[] = [];
    let toOptions: IFilterItem[] = [];

    const ALL_DIRECTIONS = tabs[0];

    const [currentFromTab, setCurrentFromTab] = useState<ITab>(ALL_DIRECTIONS);
    const [currentToTab, setCurrentToTab] = useState<ITab>(ALL_DIRECTIONS);

    if (currentFromTab.codes === null) {
        fromOptions = directions;
    } else {
        const filtered = filter.filter((item) => currentFromTab.codes?.includes(item.from.code));
        fromOptions = filtered.map((item) => item.from);
    }

    if (selectedFrom) {
        const foundItem = filter.find((item) => item.from.code === selectedFrom.code);

        if (foundItem) {
            toOptions = foundItem.to;
        }
    }

    if (currentToTab.codes) {
        toOptions = toOptions.filter((item) => currentToTab.codes?.includes(item.code));
    }

    useEffect(() => {
        setCurrentToTab(ALL_DIRECTIONS);
    }, [selectedFrom]);

    return (
        <section className={`${styles.wrapper} ${className}`}>
            <div className={styles.block}>
                <p>Отдаёте</p>
                <Tabs 
                    className={styles.tabsWrapper} 
                    tabs={tabs} 
                    activeTab={currentFromTab} 
                    onChange={setCurrentFromTab} 
                />
                <Select
                    currentOption={selectedFrom as IFilterItem}
                    options={fromOptions}
                    onChange={onChangeSelectFrom}
                />
            </div>
            <div className={styles.block}>
                <p>Получаете</p>
                <Tabs
                    className={styles.tabsWrapper}
                    tabs={tabs}
                    activeTab={currentToTab}
                    onChange={setCurrentToTab}
                />
                <Select
                    currentOption={selectedTo as IFilterItem}
                    options={toOptions}
                    onChange={onChangeSelectTo}
                />
            </div>
        </section>
    );
};

export default ExchangerSection;
