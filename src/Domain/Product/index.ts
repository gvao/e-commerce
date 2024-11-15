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

}

type ProductProps = Pick<IProduct, 'id' | 'name' | 'price' | 'src'>
type ProductCreateProps = Omit<ProductProps, "id">


export const products: IProduct[] = [
    Product.create({ name: 'S21 fe', price: 1700.50, src: "/s21-fe.jpg" }),
    Product.create({ name: 'any_name', price: 50, src: "/s21-fe.jpg" }),
    Product.create({ name: 'outer_name', price: 100, src: "/s21-fe.jpg" }),
]