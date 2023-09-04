import {PayloadAction, createSlice} from '@reduxjs/toolkit'

interface modalSliceType{
    value:boolean;
}

const initialState:modalSliceType = {
    value:false
} 

const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers:{
        setModalStatus:(state,action:PayloadAction<boolean>)=>{
            state.value = action.payload;
        }
    }
})

export const {setModalStatus} = modalSlice.actions
export default modalSlice.reducer