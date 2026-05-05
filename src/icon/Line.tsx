import { ICON_CONSTANTS } from "../constants/icon-constants"
import type { IIconProps } from "./type"

export const Line: React.FC<IIconProps> = ({color=ICON_CONSTANTS.color , size=24}) => {
    //  width="2" height="20"
    return (
        <svg width="2" height="20" viewBox="0 0 2 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L1 19" stroke={color || ICON_CONSTANTS.color} strokeOpacity="0.2" strokeLinecap="round" />
        </svg>
    )
}
