import { DetailsContainer, CartContainer, HeaderContainer, ProductCard, ProductsListContainer, SummaryGrid } from "@/styles/cart";
import Image from "next/image";
import img from '@/../../assets/Camiseta 02.jpg'

import { ArrowDown, CaretDown, KeyReturn, Trash } from "phosphor-react";

export default function Cart() {
    return (
        <CartContainer>
            <HeaderContainer>
                <a><KeyReturn /> Voltar</a>
                <h3>Seu carrinho</h3>
                <span>Total (3 productos) R$ 161,0</span>
            </HeaderContainer>

            <ProductsListContainer>
                <ProductCard>
                    <Image src={img} alt="" width={256} height={211} />
                    <section>
                        <div>
                            <h2>Caneca de cerana rústica</h2>
                            <button><Trash  size={24}/> </button>
                        </div>
                        <p>
                        Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.
                        </p>
                        <div>
                            <button>1 <CaretDown size={24}/> </button>
                            <span>R$ 40,00</span>
                        </div>
                    </section>
                </ProductCard>
            </ProductsListContainer>

            <DetailsContainer>
                <h2>Resumo do pedido</h2>

                <SummaryGrid>
                    <label>Subtotal de produtos</label>
                    <span>32</span>
                    <label>Entrega</label>
                    <span>321</span>
                    <div></div>
                    <label>Total</label>
                    <span>312</span>
                    <button>Finalizar compra</button>
                </SummaryGrid>

                <ul>
                    <li>Ajuda</li>
                    <li>Reembolso</li>
                    <li>Entregas e frete</li>
                    <li>Trocas e devoluções</li>
                </ul>
            </DetailsContainer>
        </CartContainer>
    );
}