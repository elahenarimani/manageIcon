import { ICON_CONSTANTS } from "../constants/icon-constants"
import type { IIconProps } from "../type"

export const AngleLeft: React.FC<IIconProps> = ({ color = ICON_CONSTANTS.color, size = 24 }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.3543 18.646C15.5493 18.841 15.5493 19.158 15.3543 19.353C15.2563 19.451 15.1283 19.499 15.0003 19.499C14.8723 19.499 14.7442 19.45 14.6462 19.353L7.64625 12.353C7.45125 12.158 7.45125 11.841 7.64625 11.646L14.6462 4.64601C14.8412 4.45101 15.1583 4.45101 15.3533 4.64601C15.5483 4.84101 15.5483 5.15804 15.3533 5.35304L8.70729 11.999L15.3543 18.646Z" fill={color || ICON_CONSTANTS.color} />
        </svg>
    )
}