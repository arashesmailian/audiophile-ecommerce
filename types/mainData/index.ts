import { StaticImageData } from "next/image";

export type IProduct = {
    id:number;
    cartQuantity: number;
    shortName: string;
    cartIcon: StaticImageData;
    slug:string;
    name:string;
    subTotal: number;
    image:ImagesTypes;
    category:string;
    categoryImage: ImagesTypes;
    new:boolean;
    price:number;
    description:string;
    features:string;
    includes:IncludeTypes[];
    gallery:GalleryTypes;
    others:OthersType[];
}
interface IncludeTypes{
    quantity:number;
    item:string;
}
interface GalleryTypes{
    first: ImagesTypes;
    second: ImagesTypes;
    third: ImagesTypes;
}
interface OthersType {
    slug: string;
    name: string;
    image: ImagesTypes;
}
interface ImagesTypes {
    mobile: StaticImageData | string;
    tablet: StaticImageData | string;
    desktop: StaticImageData | string;
  }