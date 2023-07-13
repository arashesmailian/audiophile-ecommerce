import { IProduct } from '@/types/mainData'
import data from '../../data.json'

export const getCategories = ()=>{
    const categories:string[] = []
     data.map((product:IProduct)=>{
        if(!categories.includes(product.category.toUpperCase()))
            categories.push(product.category.toUpperCase())
    })
    return categories
}
