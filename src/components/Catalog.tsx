import { Icon, IconifyIcon } from "@iconify/react/dist/iconify.js"

interface ICatalog {
    image: string
    name: string
    originalPrice?: number
    discountPrice: number
    stars?: number
}

const Catalog: React.FC<ICatalog> = ({ discountPrice, image, name, originalPrice, stars }) => {
    const renderStars = () => {
        return stars ? Array.from({ length: stars }, (v, index) => <Icon
            icon={"material-symbols:star"}
            key={`${name}-${index}-star`} />) : null
    }

    return (
        <article className="border border-primaryOrange p-2 bg-secondaryBlue">
            <img src={image} />
            <div className="bg-primaryCream p-2 mt-2 h-32 border border-primaryOrange">
                <div className="flex">
                    {renderStars()}
                </div>
                <h2 className="capitalize">{name}</h2>
                {originalPrice && <h4 className="line-through text-xs text-slate-500">R$ {originalPrice.toFixed(2)}</h4>}
                <h3>R$ {discountPrice.toFixed(2)}</h3>
            </div>
        </article>
    )
}

export default Catalog