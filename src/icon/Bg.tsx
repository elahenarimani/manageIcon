import type { IIcon } from "./type"

export const Bg: React.FC<IIcon> = ({color="#000" , size=24}) => {
    return (
        <svg width="393" height="798" viewBox="0 0 393 798" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_5330_135204)">
                <rect width="393" height="798" fill="#D1D1D6" />
                <path d="M-67.2722 1777.33C203.65 1777.33 423.275 1160.39 423.275 399.365C423.275 -361.662 203.65 -978.596 -67.2722 -978.596C-338.194 -978.596 -557.819 -361.662 -557.819 399.365C-557.819 1160.39 -338.194 1777.33 -67.2722 1777.33Z" fill="url(#paint0_radial_5330_135204)" />
                <path d="M437 414.5C523.433 414.5 599 286.933 599 200.5C599 114.067 528.933 44 442.5 44C356.067 44 286 114.067 286 200.5C286 286.933 350.567 414.5 437 414.5Z" fill="url(#paint1_radial_5330_135204)" />
            </g>
            <defs>
                <radialGradient id="paint0_radial_5330_135204" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-67.2723 399.365) scale(490.547 1377.96)">
                    <stop offset="0.1023" stopColor="#AB2100" />
                    <stop offset="0.1229" stopColor="#A11F00" />
                    <stop offset="0.223" stopColor="#771700" />
                    <stop offset="0.3283" stopColor="#521000" />
                    <stop offset="0.438" stopColor="#340A00" />
                    <stop offset="0.5533" stopColor="#1D0600" />
                    <stop offset="0.6769" stopColor="#0D0200" />
                    <stop offset="0.8146" stopColor="#030100" />
                    <stop offset="1" />
                </radialGradient>
                <radialGradient id="paint1_radial_5330_135204" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(442.5 200.5) rotate(5.01115) scale(170.625 259.489)">
                    <stop offset="0.1023" stopColor="#009A98" />
                    <stop offset="0.1918" stopColor="#007674" />
                    <stop offset="0.3001" stopColor="#005251" />
                    <stop offset="0.4144" stopColor="#003433" />
                    <stop offset="0.5346" stopColor="#001D1D" />
                    <stop offset="0.6635" stopColor="#000D0D" />
                    <stop offset="1" stopColor="#030100" />
                </radialGradient>
                <clipPath id="clip0_5330_135204">
                    <rect width="393" height="798" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
