import { ICON_CONSTANTS } from "../constants/icon-constants"
import type { IIconProps } from "../type"

export const RadioButton: React.FC<IIconProps> = ({color=ICON_CONSTANTS.color , size=24}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill={color} stroke={color} />
            <circle cx="12" cy="12" r="7" fill={color} />
        </svg>
    )
}
