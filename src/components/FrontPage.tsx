import Carousel from "./Carousel"
import Catalog from "./Catalog"
import CategoryHeader from "./CategoryHeader"
import FlexWrapper from "./FlexWrapper"
import PageBody from "./PageBody"

const FrontPage = () => {
    return (
        <section>
            <CategoryHeader />

            <PageBody>
                <Carousel />
                <FlexWrapper title="Moda Infantil">
                    <Catalog
                        name="blusão moletom infantil hering capuz"
                        discountPrice={75}
                        originalPrice={120}
                        image="catalog/CAT1.png"
                    />
                    <Catalog
                        name="vestido infantil hering manga longa"
                        discountPrice={80}
                        originalPrice={100}
                        image="catalog/CAT2.png"
                    />
                    <Catalog
                        name="tênis infantil adidas tensaur sport"
                        discountPrice={228}
                        originalPrice={250}
                        image="catalog/CAT3.png"
                    />
                    <Catalog
                        name="camiseta pica-pau dark conforto mini"
                        discountPrice={60}
                        originalPrice={40}
                        image="catalog/CAT8.png"
                    />
                </FlexWrapper>
                
                <FlexWrapper title="Conforto para seus pés">
                    <Catalog
                        name="tênis masculino adidas VL courtbase"
                        discountPrice={280}
                        stars={5}
                        originalPrice={400}
                        image="catalog/CAT4.png"
                    />
                    <Catalog
                        name="tênis lacoste t-clip court snearkers"
                        stars={5}
                        discountPrice={500}
                        originalPrice={600}
                        image="catalog/CAT5.png"
                    />
                    <Catalog
                        name="sandália bebê grendene"
                        discountPrice={35}
                        image="catalog/CAT6.png"
                    />
                    <Catalog
                        name="tênis vizzano casual feminino"
                        discountPrice={99}
                        stars={4}
                        image="catalog/CAT7.png"
                    />
                </FlexWrapper>
            </PageBody>
        </section>
    )
}

export default FrontPage