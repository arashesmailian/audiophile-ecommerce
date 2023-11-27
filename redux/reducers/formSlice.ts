import { FormDataType } from '@/types/formData';
import {PayloadAction, createSlice} from '@reduxjs/toolkit'



const initialState:FormDataType = {
    name:'',
    email:'',
    phone:'',
    address:'',
    zipCode:0,
    city:'',
    country:'',
    // paymentMethod:'',
    emoneyNumber:0,
    emoneyPin:0,
} 

const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        submitForm:(state,action:PayloadAction<FormDataType>)=>{
            state = action.payload;
            localStorage.setItem('formData',JSON.stringify(action.payload))
        }
    }
})

export const {submitForm} = formSlice.actions
export default formSlice.reducer