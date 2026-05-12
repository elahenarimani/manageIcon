import { ICON_CONSTANTS } from "../constants/icon-constants"
import type { IIconProps } from "../type"

export const AngleDown: React.FC<IIconProps> = ({ color = ICON_CONSTANTS.color, size = 24 }) => {
    // width="21" height="20"
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.3543 9.35401L12.3543 16.354C12.2563 16.452 12.1283 16.5 12.0003 16.5C11.8723 16.5 11.7442 16.451 11.6462 16.354L4.64625 9.35401C4.45125 9.15901 4.45125 8.84198 4.64625 8.64698C4.84125 8.45198 5.15828 8.45198 5.35328 8.64698L11.9993 15.293L18.6453 8.64698C18.8403 8.45198 19.1573 8.45198 19.3523 8.64698C19.5473 8.84198 19.5493 9.15801 19.3543 9.35401Z" fill={color || ICON_CONSTANTS.color} />
        </svg>
    )
}
