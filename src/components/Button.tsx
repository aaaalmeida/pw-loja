import { Icon, IconifyIcon } from "@iconify/react/dist/iconify.js"
import { useState } from "react"

interface IButton {
    icon?: string | IconifyIcon
    color?: string
    size?: number
    text?: string
    border?: boolean
    displayMenu?: string[]
}

const Button: React.FC<IButton> = ({ icon, color, size, text, displayMenu, border = false }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)

    const renderSubMenu = () => {
        return displayMenu ? (
            <ul key={text} className="absolute left-0 top-full z-10 bg-secondaryBlue">
                {displayMenu.map((item, index) => <li
                    key={`${text}-${item}-${index}`}
                    className="border border-secondaryOrange text-sm py-1">
                    {item}
                </li>)}
            </ul>
        ) : null
    }

    return (
        <button
            className={`${border ?? "border border-black"} relative hover:underline inline-block px-2 flex items-center`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {icon &&
                <Icon
                    icon={icon}
                    color={color}
                    fontSize={size}
                />
            }
            <p>{text}</p>
            {isHovered && renderSubMenu()}
        </button>
    )
}

export default Button