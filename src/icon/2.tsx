import type { IIcon } from "./type"

export const Tow: React.FC<IIcon> = ({color="#000" , size=24}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M4.34573 79.2355C14.5551 110.657 48.3034 127.852 79.7245 117.643C111.146 107.434 128.341 73.6853 118.132 42.2641C107.923 10.8429 74.1743 -6.35267 42.7531 3.85671C11.3319 14.0661 -5.86364 47.8143 4.34573 79.2355Z" stroke={color} />
        </svg>
    )
}