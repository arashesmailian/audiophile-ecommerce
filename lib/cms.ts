import { IProduct } from '@/types/mainData'
import data from '../data.json'

const delay = (time:number)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(1)
        },time)
    })
}

export const getAllPosts =async () =>{
    await delay(3000)    
    return new Array(10).fill(1).map((_,i)=>{
        return {
            title:`This is post ${i}`,
            slug:`this-is-post-${i}`,
            body:'blaaaahh',
        }
    })
}

export const getCategories = ()=>{
    const categories:string[] = []
     data.map((product:IProduct)=>{
        if(!categories.includes(product.category))
            categories.push(product.category)
    })
    return categories
}
