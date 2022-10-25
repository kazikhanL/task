export interface ITab {
    name: string;
    codes: string[] | null;
}

export interface IFilterItem {
    code: string;
    name: string;
}

export interface IFilter {
    from: IFilterItem;
    to: IFilterItem[];
}