import GetAll from "@/application/repository/GetAll";
import Save from "@/application/repository/Save";
import { IProduct } from "@/Domain/Product/IProduct";

export default class ProductRepository implements Repository {
    async save(product: IProduct): Promise<void> {
        this.items.push(product)
    }
    async getAll(): Promise<IProduct[] | undefined> {
        return this.items
    }
    private items: IProduct[] = []
}

type Repository = GetAll<IProduct> & Save<IProduct>