import { IProduct } from "@/types/mainData"
import { allProducts } from "./allProducts"

export const getProductWithSlug = (slug:string)=>{
    return allProducts.filter((product:IProduct)=>product.slug===slug)
}