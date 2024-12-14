import Button from "./Button"
import Input from "./Input"

const CategoryHeader = () => {
    const feminineCategory = [
        "Vestidos",
        "Calças",
        "Casacos",
        "Sapatos",
        "Blusas e Camisetas",
        "Cardigan",
        "Macacões e Jardineiras"
    ]

    const masculineCategory = [
        "Camisa Social",
        "Camisetas",
        "Blusão",
        "Calças",
        "Sapatos",
        "Bermuda",
        "Gravata"
    ]

    const childCategory = [
        "Bebê",
        "1 a 5 anos",
        "6 a 10 anos",
        "10 a 14 anos",
        "Brinquedos",
        "Pijamas",
        "Lenços",
    ]

    const acessoryCategory = [
        "Bolsas",
        "Carteira",
        "Joias",
        "Relógio",
        "Óculos",
        "Cinto",
        "Boné",
        "Maquiagem"
    ]

    return (
        <nav className="bg-primaryBlue flex w-screen">
            <Button
                text="Feminino"
                border
                displayMenu={feminineCategory}
            />
            <Button
                text="Masculino"
                border
                displayMenu={masculineCategory}
            />
            <Button
                text="Infantil"
                border
                displayMenu={childCategory}
            />
            <Button
                text="Acessórios"
                border
                displayMenu={acessoryCategory}
            />
            <div className="justify-self-end">
            <Input
                placeholder="O que você procura?"
                icon={"material-symbols:search"}
                />
                </div>
        </nav>
    )
}

export default CategoryHeader