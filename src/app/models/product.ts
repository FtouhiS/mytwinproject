import { Category } from "./category";

export class Product{
    id!:string;
    name!:string;
    price!:number;
    quantity!:number;
    like!:number ;
    category:Category=new Category();

}