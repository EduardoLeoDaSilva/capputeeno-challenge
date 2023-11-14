import { ButtonBadge, CardButton, Header, HeaderActionContainer, HeaderInput, Logo } from "@/styles/layout";
import { ShoppingCart } from "phosphor-react";


export default function Layout({ children }: any) {
    return (
        <>
            <Header>
                <Logo>capputeno</Logo>
                <HeaderActionContainer>
                    <HeaderInput placeholder="Procurando algo específco? " />
                    <CardButton>
                        <ShoppingCart size={24} />
                        <ButtonBadge><span>2</span></ButtonBadge>
                    </CardButton>
                </HeaderActionContainer>
            </Header>
            <main>{children}</main>
        </>
    );
} 