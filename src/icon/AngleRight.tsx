import { ICON_CONSTANTS } from "../constants/icon-constants"
import type { IIconProps } from "./type"

export const AngleRight: React.FC<IIconProps> = ({color=ICON_CONSTANTS.color , size=24}) => {
    // width="24" height="25"
    return (
        <svg width={size} height={size} viewBox="0 0 24 25" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00004 20.5003C8.74404 20.5003 8.48801 20.4023 8.29301 20.2073C7.90201 19.8163 7.90201 19.1842 8.29301 18.7933L14.586 12.5003L8.29301 6.20731C7.90201 5.81631 7.90201 5.18425 8.29301 4.79325C8.68401 4.40225 9.31607 4.40225 9.70707 4.79325L16.7071 11.7933C17.0981 12.1842 17.0981 12.8163 16.7071 13.2073L9.70707 20.2073C9.51207 20.4023 9.25604 20.5003 9.00004 20.5003Z" fill={color} />
        </svg>
    )
}