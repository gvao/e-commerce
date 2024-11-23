import { Save, GetAll } from "@/application/repository";
import { IProduct } from "@/Domain/Product/interface";

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