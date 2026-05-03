import type { IIcon } from "./type"

export const Checkbox: React.FC<IIcon> = ({ color = "#000", size = 24 }) => {
    // width="24" height="25"
    return (
        <svg width={size} height={size} viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_13563_230457" fill="currentColor">
                <path d="M0 4.5C0 2.29086 1.79086 0.5 4 0.5H20C22.2091 0.5 24 2.29086 24 4.5V20.5C24 22.7091 22.2091 24.5 20 24.5H4C1.79086 24.5 0 22.7091 0 20.5V4.5Z" />
            </mask>
            <path d="M0 4.5C0 2.29086 1.79086 0.5 4 0.5H20C22.2091 0.5 24 2.29086 24 4.5V20.5C24 22.7091 22.2091 24.5 20 24.5H4C1.79086 24.5 0 22.7091 0 20.5V4.5Z" fill="currentColor" />
            <path d="M4 0.5V1.5H20V0.5V-0.5H4V0.5ZM24 4.5H23V20.5H24H25V4.5H24ZM20 24.5V23.5H4V24.5V25.5H20V24.5ZM0 20.5H1V4.5H0H-1V20.5H0ZM4 24.5V23.5C2.34315 23.5 1 22.1569 1 20.5H0H-1C-1 23.2614 1.23858 25.5 4 25.5V24.5ZM24 20.5H23C23 22.1569 21.6569 23.5 20 23.5V24.5V25.5C22.7614 25.5 25 23.2614 25 20.5H24ZM20 0.5V1.5C21.6569 1.5 23 2.84315 23 4.5H24H25C25 1.73858 22.7614 -0.5 20 -0.5V0.5ZM4 0.5V-0.5C1.23858 -0.5 -1 1.73858 -1 4.5H0H1C1 2.84315 2.34315 1.5 4 1.5V0.5Z" fill="#E5E5EA" mask="url(#path-1-inside-1_13563_230457)" />
        </svg>
    )
}
