import { Icon, IconifyIcon } from "@iconify/react/dist/iconify.js"

interface IInput {
    placeholder: string
    icon?: string | IconifyIcon
}

const Input: React.FC<IInput> = ({ placeholder, icon }) => {
    return (
        <label className="flex items-center">
            <input type="text" placeholder={placeholder} className="placeholder:text-primaryBlue" />
            {icon && <Icon icon={icon} color={"#8ecae6"} fontSize={40} />}
        </label>
    )
}

export default Input