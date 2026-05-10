import { ICON_CONSTANTS } from "../constants/icon-constants"
import type { IIconProps } from "./type"

export const AngleDownSmall: React.FC<IIconProps> = ({ color = ICON_CONSTANTS.color, size = 24 }) => {
    // width="21" height="20"
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.3543 10.354L12.3543 14.354C12.2563 14.452 12.1283 14.5 12.0003 14.5C11.8723 14.5 11.7442 14.451 11.6462 14.354L7.64625 10.354C7.45125 10.159 7.45125 9.84198 7.64625 9.64698C7.84125 9.45198 8.15828 9.45198 8.35328 9.64698L11.9993 13.293L15.6453 9.64698C15.8403 9.45198 16.1573 9.45198 16.3523 9.64698C16.5473 9.84198 16.5493 10.158 16.3543 10.354Z" fill={color || ICON_CONSTANTS.color} />
        </svg>
    )
}
