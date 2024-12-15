import Button from "./Button"

const Header = () => {
    return (
        <header className="sticky flex py-2 justify-center top-0 z-10 bg-menuBlue h-14 w-screen">
            <a href="/FrontPage">
                <img
                    src="urban-aura.png"
                    className="ml-4 h-full"
                />
            </a>
            <Button
                icon={"qlementine-icons:faq-16"}
                color="white"
                size={40}
            />
        </header>
    )
}

export default Header