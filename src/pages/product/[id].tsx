import { ProductContainer, ReturnContainer, ImageContainer, DetailsContainer } from "@/styles/product";
import Image from "next/image";
import { KeyReturn, ShoppingCart } from "phosphor-react";
import img from '@/../../assets/Camiseta 02.jpg'
export default function Product() {
    return (

        <ProductContainer>
            <ReturnContainer><a><KeyReturn /> Voltar</a></ReturnContainer>

            <ImageContainer><Image src={img} alt="" /></ImageContainer>

            <DetailsContainer>
                <div>
                    <span>Categoria</span>

                    <h1>Caneca de cerâmica rústica</h1>
                    <span>
                        R$ 40,00
                    </span>
                    <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>


                    <h2>
                        Descrição
                    </h2>

                    <p>
                        Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.
                    </p>
                </div>
                <button><ShoppingCart /> Adicionar ao Carrinho</button>
            </DetailsContainer>
        </ProductContainer>
    );
}