import { IProduct } from '@/types/mainData'
import {allProducts} from './allProducts'

export const getCategoryProducts = (category:string)=>{
    return allProducts.filter((product:IProduct)=>product.category===category).reverse()
}