import Button from "./Button"

const Header = () => {
    return (
        <header className="sticky flex justify-center top-0 bg-menuBlue h-20 w-screen">
            <Button
                icon={"qlementine-icons:faq-16"}
                color="white"
                size={40}
            />
        </header>
    )
}

export default Header