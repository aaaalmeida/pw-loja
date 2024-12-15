import { useEffect, useState } from "react"

const Carousel = () => {
    const [index, setIndex] = useState(0)
    const [isFading, setIsFading] = useState(false)

    const images = import.meta.glob("/public/carousel/*.{png,jpg,jpeg,webp}", { eager: true })
    const imagesPath = Object.values(images).map(img =>
        typeof img === "string" ? img : (img as { default: string }).default
    )

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true) // Ativa o efeito de fade
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % imagesPath.length)
                setIsFading(false) // Remove o fade após a troca
            }, 200) // Duração da animação (100ms)
        }, 3000) // Troca de imagem a cada 3 segundos

        return () => clearInterval(interval);
    }, [imagesPath.length])

    return (
        <figure className={`relative w-[60vw] h-[70vh] mx-auto transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            <img
                src={imagesPath[index]}
                alt={`carousel-image-${index}`}
                key={index}
                className="w-full h-full absolute top-0 left-0"
            />
        </figure>
    )
}

export default Carousel