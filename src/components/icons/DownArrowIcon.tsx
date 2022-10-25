import IconProps from "./Icon.props";

function DownArrowIcon({ className = "" }: IconProps): JSX.Element {
    return (
        <svg 
            width="8" 
            height="5" 
            viewBox="0 0 8 5" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M1 1L4 4L7 1" stroke="#7B7976" strokeLinecap="round" />
        </svg>
    );
}

export default DownArrowIcon;
