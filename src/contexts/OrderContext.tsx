import { ApiProduct } from "@/models/apiProduct";
import { ReactNode, createContext, useState } from "react";

interface CartItem{
    productId: string
    name: string;
    quant: number;
    price: number
}

interface ContextProps {
    addCartItem: (product: ApiProduct) => void;
    updateQuant:(id: string, quant: number) => void;
    cart: {
        items: CartItem[]
        total: number
    },
    adress: {
        street: string;
        city: string
        state: string;
    }
}

export const OrderContext = createContext({} as ContextProps);

interface OrderContextProviderProps{
    children: ReactNode;
}


export function OrderContextProvider({children}: OrderContextProviderProps){



    const [adress, setAdressState] = useState<{
        street: string;
        city: string
        state: string;
    }>({
        street: "",
        city: "",
        state: ""
    });
    const [cart, setCartState] = useState<{
        items: CartItem[]
        total: number
    }>({
        items: [],
        total: 0
    });

    function updateQuant(id: string, quant: number){
        setCartState((state) => {

            const items = state.items.map((x) => {
                if(x.productId == id){
                    x.quant =quant;
                }
                return x;
            })
            
            return {
                items: [...items],
                total: items.map(x => x.price * x.quant).reduce((previous, current) => previous + current, 0)
            }
        })
    }

    function addCartItem(product: ApiProduct){
        setCartState((state) => {

            const productExists = state.items.find(x => x.productId == product.id);

            const items = state.items.map(x => {
                if(x.productId == product.id){
                    x.quant+= 1;
                }    
                return x;        
            })
            


            return {
                items: productExists ? [...items] :[...state.items, {name: product.name, price: product.price, productId: product.id, quant: 1}],
                total: state.items.map(x => x.price * x.quant).reduce((previous, current) => previous + current, 0)
            }
        })
    }

    return (
        <OrderContext.Provider value={{cart, adress, addCartItem, updateQuant}}>
            {children}
        </OrderContext.Provider>
    );
}