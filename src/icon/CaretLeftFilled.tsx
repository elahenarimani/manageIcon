import { ICON_CONSTANTS } from "../constants/icon-constants"
import type { IIconProps } from "./type"

export const CaretLeftFilled: React.FC<IIconProps> = ({ color = ICON_CONSTANTS.color, size = 24 }) => {
    // width="24" height="25"
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.60375 10.698L13.7978 6.3181C14.6708 5.5821 15.9997 6.20603 15.9997 7.35203V16.6479C15.9997 17.7939 14.6698 18.4179 13.7978 17.6819L8.60375 13.302C7.79875 12.623 7.79875 11.377 8.60375 10.698Z" fill={color || ICON_CONSTANTS.color} />
        </svg>

    )
}
