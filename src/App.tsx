import { useState, useEffect } from "react";
import { tabs, filter, directions } from "@/constants/filter";
import { ITab, IFilterItem, IFilter } from "@/interfaces/filter";

import MainPage from "./components/pages/MainPage";

import Select from "@/components/ui/Select";

function App() {
    const [currentFromTab, setCurrentFromTab] = useState<ITab>(tabs[0]);
    const [currentFromOption, setCurrentFromOption] = useState<IFilterItem>(filter[0].from);

    let fromOptions: IFilterItem[] = [];

    if (currentFromTab.codes === null) {
        fromOptions = directions;
    } else {
        const filtered = filter.filter((item) => currentFromTab.codes?.includes(item.from.code));
        fromOptions = filtered.map((item) => item.from);
    }

    const [currentToTab, setCurrentToTab] = useState<ITab>(tabs[0]);
    const [currentToOption, setCurrentToOption] = useState<IFilterItem>(filter[0].to[0]);

    let toOptions: IFilterItem[] = [];

    if (currentFromOption) {
        const foundItem = filter.find((item) => item.from.code === currentFromOption.code);

        if (foundItem) {
            toOptions = foundItem.to;
        }
    }

    if (currentToTab.codes) {
        toOptions = toOptions.filter((item) => currentToTab.codes?.includes(item.code));
    }

    useEffect(() => {
        setCurrentToTab(tabs[0]);
    }, [currentFromOption]);

    return <MainPage />;

    return (
        <div className="App">
            <p>From</p>
            {tabs.map((tab) => (
                <button key={tab.name} onClick={() => setCurrentFromTab(tab)}>{tab.name}</button>
            ))}
            <Select
                currentOption={currentFromOption}
                options={fromOptions}
                onChange={setCurrentFromOption}
            />
            <p>To</p>
            {tabs.map((tab) => (
                <button key={tab.name} onClick={() => setCurrentToTab(tab)}>{tab.name}</button>
            ))}
            <Select
                currentOption={currentToOption}
                options={toOptions}
                onChange={setCurrentToOption}
            />
        </div>
    );
}

export default App;
