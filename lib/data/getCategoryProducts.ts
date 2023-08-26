import { IProduct } from '@/types/mainData'
import {allProducts} from './allProducts'

export const getCategoryProducts = (category:string)=>{
    return allProducts.filter((product:any)=>product.category===category).reverse()
}