import { createSlice } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state,action) => {
            const itemExist = state.items.find((item) => item.id == action.payload.id);
            if(!itemExist){
                state.items.push(action.payload);
            }
        },
        removeItem: (state,action) => {
            state.items = state.items.filter((item)=> item.id!== action.payload);
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
 });

 export const {addItem,removeItem,clearCart} = cartSlice.actions;

 export default cartSlice.reducer;