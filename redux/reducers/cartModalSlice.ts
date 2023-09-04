import {PayloadAction, createSlice} from '@reduxjs/toolkit'

interface modalSliceType{
    value:boolean;
}

const initialState:modalSliceType = {
    value:false
} 

const modalSlice = createSlice({
    name:'cartModal',
    initialState,
    reducers:{
        setCartModalStatus:(state,action:PayloadAction<boolean>)=>{
            state.value = action.payload;
        }
    }
})

export const {setCartModalStatus} = modalSlice.actions
export default modalSlice.reducer