import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IFilter, IFilterItem } from "@/interfaces/filter";
import { directions, filter } from "@/constants/filter";

type FilterStateType = {
    directions: IFilterItem[];
    filter: IFilter[];
    selectedFrom: IFilterItem | undefined;
    selectedTo: IFilterItem | undefined;
};

const defaultSelectedFrom = directions[0];
const defaultSelectedTo = filter.find((item) => item.from.code === defaultSelectedFrom.code)?.to[0];

const initialState: FilterStateType = {
    directions,
    filter,
    selectedFrom: defaultSelectedFrom,
    selectedTo: defaultSelectedTo,
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changeSelectedFrom(state, action: PayloadAction<IFilterItem>) {
            state.selectedFrom = action.payload;
        },

        changeSelectedTo(state, action: PayloadAction<IFilterItem>) {
            state.selectedTo = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const { changeSelectedFrom, changeSelectedTo } = filterSlice.actions;
