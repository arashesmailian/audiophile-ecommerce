import { IProduct } from '@/types/mainData'
import { allProducts } from './allProducts'

export const getCategories = ()=>{
    const categories:string[] = []
     allProducts.map((product:IProduct)=>{
        if(!categories.includes(product.category.toUpperCase()))
            categories.push(product.category.toUpperCase())
    })
    return categories
}
