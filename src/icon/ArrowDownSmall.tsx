import { ICON_CONSTANTS } from "../constants/icon-constants"
import type { IIconProps } from "./type"

export const ArrowDownSmall: React.FC<IIconProps> = ({ color = ICON_CONSTANTS.color, size = 24 }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.3543 16.354L12.3543 20.354C12.3083 20.4 12.2522 20.4369 12.1912 20.4619C12.1302 20.4869 12.0653 20.501 12.0003 20.501C11.9353 20.501 11.8703 20.4879 11.8093 20.4619C11.7473 20.4369 11.6922 20.4 11.6462 20.354L7.64625 16.354C7.45125 16.159 7.45125 15.842 7.64625 15.647C7.84125 15.452 8.15828 15.452 8.35328 15.647L11.4993 18.793V4C11.4993 3.724 11.7233 3.5 11.9993 3.5C12.2753 3.5 12.4993 3.724 12.4993 4V18.793L15.6453 15.647C15.8403 15.452 16.1573 15.452 16.3523 15.647C16.5473 15.842 16.5493 16.158 16.3543 16.354Z" fill={color || ICON_CONSTANTS.color} />
        </svg>
    )
}
