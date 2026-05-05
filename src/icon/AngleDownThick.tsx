import { ICON_CONSTANTS } from "../constants/icon-constants"
import type { IIconProps } from "./type"

export const AngleDownThick: React.FC<IIconProps> = ({color=ICON_CONSTANTS.color, size=24}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L8 10L12 6" stroke={color || ICON_CONSTANTS.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}