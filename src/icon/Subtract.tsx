import type { IIcon } from "./type"

export const Subtract: React.FC<IIcon> = ({color="#000" , size=24}) => {
    // width="393" height="92"
    return (
        <svg width="393" height="92" viewBox="0 0 393 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M393 95H0V0H158.013C158.543 21.077 175.795 38 197 38C218.205 38 235.457 21.077 235.987 0H393V95Z" fill={color} />
        </svg>
    )
}
