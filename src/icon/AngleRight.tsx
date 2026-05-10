import { ICON_CONSTANTS } from "../constants/icon-constants"
import type { IIconProps } from "./type"

export const AngleRight: React.FC<IIconProps> = ({ color = ICON_CONSTANTS.color, size = 24 }) => {
    // width="24" height="25"
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.3543 12.354L9.35426 19.354C9.25626 19.452 9.12825 19.5 9.00025 19.5C8.87225 19.5 8.74425 19.451 8.64625 19.354C8.45125 19.159 8.45125 18.842 8.64625 18.647L15.2922 12.001L8.64625 5.35499C8.45125 5.15999 8.45125 4.84296 8.64625 4.64796C8.84125 4.45296 9.15828 4.45296 9.35328 4.64796L16.3533 11.648C16.5493 11.842 16.5493 12.158 16.3543 12.354Z" fill={color || ICON_CONSTANTS.color} />
        </svg>
    )
}