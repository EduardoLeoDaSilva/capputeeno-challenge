import { ProductContainer, ReturnContainer, ImageContainer, DetailsContainer } from "@/styles/product";
import Image from "next/image";
import { KeyReturn, ShoppingCart } from "phosphor-react";
import img from '@/../../assets/Camiseta 02.jpg'
import { GetStaticPaths, GetStaticProps } from "next";
import { api } from "@/api/axios-client";
import { ApiProduct } from "@/models/apiProduct";
import { useContext } from "react";
import { OrderContext } from "@/contexts/OrderContext";

interface ProductPageProps{
    product: ApiProduct
}

export default function Product({product}:ProductPageProps) {

    const {cart, addCartItem} = useContext(OrderContext);


    return (

        <ProductContainer>
            <ReturnContainer><a><KeyReturn /> Voltar</a></ReturnContainer>

            <ImageContainer><Image width={640} height={580} src={product.image} alt="" /></ImageContainer>

            <DetailsContainer>
                <div>
                    <span>{product.type}</span>

                    <h1>{product.name}</h1>
                    <span>
                        R$ {product.price}
                    </span>
                    <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>


                    <h2>
                        Descrição
                    </h2>

                    <p>
                        Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.
                    </p>
                </div>
                <button onClick={() => addCartItem(product)}><ShoppingCart /> Adicionar ao Carrinho</button>
            </DetailsContainer>
        </ProductContainer>
    );
}

export const getStaticPaths:GetStaticPaths = async () =>{
    return {
        paths: [
            {
                params: {id: '1'}
            }
        ],
        fallback: 'blocking'
    }
}



export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params}) => {
    let id = params?.id;
    const result = await api.get<ApiProduct>(`product/${id}`);

    return {
        props: {
            product: result.data
        },
        revalidate: 60
    }


}