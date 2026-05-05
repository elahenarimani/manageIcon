import { ICON_CONSTANTS } from "../constants/icon-constants"
import type { IIconProps } from "./type"

export const AngleDown: React.FC<IIconProps> = ({color=ICON_CONSTANTS.color , size=24}) => {
    // width="21" height="20"
    return (
        <svg width={size} height={size} viewBox="0 0 21 20" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5001 13.9584C10.3401 13.9584 10.1801 13.8975 10.0585 13.775L4.22512 7.94171C3.98095 7.69754 3.98095 7.30168 4.22512 7.05751C4.46928 6.81335 4.86515 6.81335 5.10931 7.05751L10.501 12.4492L15.8926 7.05751C16.1368 6.81335 16.5326 6.81335 16.7768 7.05751C17.021 7.30168 17.021 7.69754 16.7768 7.94171L10.9435 13.775C10.8201 13.8975 10.6601 13.9584 10.5001 13.9584Z" fill={color} />
        </svg>
    )
}
