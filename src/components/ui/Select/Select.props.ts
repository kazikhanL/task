import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { IFilterItem } from "@/interfaces/filter";

type InputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface SelectProps {
    className?: string;
    input?: InputType;
    currentOption: IFilterItem;
    options: IFilterItem[];
    onChange: (filterItem: IFilterItem) => void;
}

export default SelectProps;
