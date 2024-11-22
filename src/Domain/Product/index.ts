import { IProduct } from "@/Domain/Product/IProduct";

export default class Product implements IProduct {
    id: string;
    name: string;
    price: number;
    src: string;

    constructor({ id, name, price, src }: ProductProps) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.src = src;
    }

    static create({ name, price, src }: ProductCreateProps) {
        const id = crypto.randomUUID().toString();
        return new Product({ id, name, price, src });
    }

    get dto() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            src: this.src,
        };
    }
}

type ProductProps = Pick<IProduct, 'id' | 'name' | 'price' | 'src'>
type ProductCreateProps = Omit<ProductProps, "id">
