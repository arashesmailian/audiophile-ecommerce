import {PayloadAction, createSlice} from '@reduxjs/toolkit'

import { IProduct } from "@/types/mainData";
import { RootState } from '../store';

interface CartSliceType{
    cartItems:IProduct[];
}

const initialState:CartSliceType = {
    cartItems:
    typeof window !== "undefined" &&
    (localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems") as string)
      : []),
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItemToCart(state,action:PayloadAction<IProduct>){
            const itemIndex = state.cartItems.findIndex(item=>item.id===action.payload.id)
            if(itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                const subTotal = state.cartItems[itemIndex].price * state.cartItems[itemIndex].cartQuantity;
                state.cartItems[itemIndex].subTotal = subTotal;
                localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
            }else{
                state.cartItems.push({...action.payload,cartQuantity:1,subTotal:action.payload.price})
                localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
            }
        },
        decreaseQuantity(state,action:PayloadAction<IProduct>){
            const itemIndex = state.cartItems.findIndex(item=>item.id===action.payload.id)
            if(state.cartItems[itemIndex]){
                if(state.cartItems[itemIndex].cartQuantity > 1){
                    state.cartItems[itemIndex].cartQuantity -= 1;
                    state.cartItems[itemIndex].subTotal -= state.cartItems[itemIndex].price; 
                    localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
                }else if(state.cartItems[itemIndex].cartQuantity===1){
                    state.cartItems.splice(itemIndex,1);
                    localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
                }
            }
        },
        clearCart(state,action:PayloadAction<boolean>){
            if(action.payload) state.cartItems=[];
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
    }
})
export const totalCartQuantity = (state:RootState)=>{
    const total = (state.cart.cartItems || []).reduce((acc:number,current:IProduct)=>acc+(current.cartQuantity || 1),0)
    return total;
}
export const totalCartPrice = (state:RootState)=>{
    const price = (state.cart.cartItems || []).reduce((acc:number,current:IProduct)=>acc+current.subTotal,0)
    return price
}

export const {addItemToCart,decreaseQuantity,clearCart}=cartSlice.actions;
export default cartSlice.reducer