import type { IIcon } from "./type"

export const Three: React.FC<IIcon> = ({color="#000" , size=24}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 173 174" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
                <path opacity="0.5" d="M107.725 141.551C117.659 138.323 117.624 110.173 107.415 78.7518C97.2052 47.3306 80.7602 24.5128 70.7532 27.7643" stroke="#48484A" />
                <path opacity="0.5" d="M107.725 141.551C117.659 138.323 117.624 110.173 107.415 78.7518C97.2052 47.3306 80.7602 24.5128 70.7532 27.7643" stroke="#48484A" />
            </g>
            <path opacity="0.2" d="M33.9043 110.27C28.6304 114.102 27.4613 121.483 31.293 126.757C35.1247 132.031 42.5063 133.2 47.7802 129.369C53.0541 125.537 54.2232 118.155 50.3915 112.881C46.5598 107.607 39.1782 106.438 33.9043 110.27Z" fill="url(#paint0_radial_5586_151222)" />
            <path d="M124.4 133.054C97.6718 152.473 60.2616 146.548 40.8422 119.819" stroke="url(#paint1_linear_5586_151222)" strokeWidth="3.42" strokeLinecap="round" strokeDasharray="0.01 5.22" />
            <path opacity="0.5" d="M107.724 141.551C97.686 144.812 81.2721 121.984 71.0628 90.563C60.8534 59.1418 60.7146 31.0259 70.7527 27.7643" stroke="#48484A" />
            <defs>
                <radialGradient id="paint0_radial_5586_151222" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(57.1206 122.398) rotate(144) scale(11.8035)">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="paint1_linear_5586_151222" x1="43.3137" y1="124.522" x2="126.151" y2="131.45" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    )
}