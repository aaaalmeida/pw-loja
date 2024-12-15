import PageBody from "./PageBody"
import QA from "./QA"

const FAQ = () => {
    return (
        <section className="bg-primaryBlue p-2">
            <PageBody>
                <article className="bg-secondaryBlue p-2">
                    <h2 className="text-xl">Sobre a Loja</h2>
                    <p>Urban Aura é uma loja de roupas online que busca oferecer peças únicas e estilosas para um público jovem e urbano. A marca se inspira nas últimas tendências da moda, combinando conforto e design para criar looks autênticos e personalizados.</p>

                    <QA question="O que é a Urban Aura?" answer="A Urban Aura é uma loja de roupas online que oferece peças exclusivas e estilosas para um público jovem e urbano." />
                    <QA question="Quais são os valores da marca Urban Aura?" answer="A marca valoriza a originalidade, a qualidade e o conforto, buscando oferecer produtos que reflitam a personalidade de seus clientes." />
                    <QA question="Quais são as formas de pagamento aceitas?" answer="Atualmente, a Urban Aura aceita pagamentos via cartão de crédito (Visa, Mastercard, Elo) e boleto bancário." />
                    <QA question="Quais tipos de roupas são vendidos na Urban Aura?" answer="A Urban Aura oferece uma variedade de peças, como camisetas, calças, vestidos, jaquetas e acessórios, sempre com um toque moderno e urbano." />
                    <QA question="Os produtos são de boa qualidade?" answer="Sim, todos os produtos da Urban Aura são cuidadosamente selecionados e possuem alta qualidade, garantindo durabilidade e conforto." />
                    <QA question="Como faço para saber meu tamanho ideal?" answer="No site, você encontrará uma tabela de medidas para cada produto. Recomendamos que você compare suas medidas com as da tabela para escolher o tamanho mais adequado." />
                    <QA question="O site é seguro para realizar compras?" answer="im, o site da Urban Aura utiliza protocolos de segurança para garantir a proteção dos seus dados." />
                    <QA question="Como posso entrar em contato com a Urban Aura?" answer="Você pode entrar em contato conosco através do nosso e-mail [email protegido] ou pelas nossas redes sociais." />
                    <QA question="Quais são as formas de entrega?" answer="Atualmente, a Urban Aura oferece entrega via Correios para todo o Brasil." />
                    <QA question="Qual é o prazo de entrega?" answer="O prazo de entrega varia de acordo com a região e a modalidade de frete escolhida. Você pode consultar o prazo estimado no momento da finalização da compra."/>
                    <QA question="Quanto custa o frete?" answer="O valor do frete é calculado automaticamente no momento da finalização da compra, de acordo com o seu CEP e a modalidade de frete escolhida." />
                </article>
            </PageBody>
        </section>
    )
}

export default FAQ