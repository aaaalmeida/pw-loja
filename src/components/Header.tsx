import Button from "./Button"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="sticky flex py-2 justify-center top-0 z-10 bg-menuBlue h-14 w-screen">
            <Link to={"/"}>
                <img
                    src="urban-aura.png"
                    className="ml-4 h-full"
                />
            </Link>

            <Link to={"/faq"}>
                <Button
                    icon={"qlementine-icons:faq-16"}
                    color="white"
                    size={40}
                />
            </Link>
        </header>
    )
}

export default Header