import { IProduct, IProductCreateProps, IProductProps } from "@/Domain/Product/interface";
import Price from "../ValueObject/Price";

export default class Product implements IProduct {
    id: string;
    name: string;
    price: Price;
    src: string;

    constructor({ id, name, price, src }: IProductProps) {
        this.id = id;
        this.name = name;
        this.price = new Price(price);
        this.src = src;
    }

    static create({ name, price, src }: IProductCreateProps) {
        const id = crypto.randomUUID().toString();
        return new Product({ id, name, price, src });
    }

    get dto() {
        return {
            id: this.id,
            name: this.name,
            price: this.price.value,
            src: this.src,
        };
    }
}