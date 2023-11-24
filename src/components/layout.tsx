import { OrderContext } from "@/contexts/OrderContext";
import { ButtonBadge, CardButton, Header, HeaderActionContainer, HeaderInput, Logo } from "@/styles/layout";
import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";


export default function Layout({ children }: any) {

    const {cart} = useContext(OrderContext);

    return (
        <>
            <Header>
                <Logo>capputeno</Logo>
                <HeaderActionContainer>
                    <HeaderInput placeholder="Procurando algo específco? " />
                    <CardButton>
                        <ShoppingCart size={24} />
                        <ButtonBadge><span>{cart.items.length}</span></ButtonBadge>
                    </CardButton>
                </HeaderActionContainer>
            </Header>
            <main>{children}</main>
        </>
    );
} 