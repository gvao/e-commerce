import { Save, GetAll, GetById, DeleteById } from "@/application/repository";
import { IProduct } from "@/Domain/Product/interface";

export default class ProductRepository implements Repository {
    async deleteById(id: string): Promise<void> {
        const index = this.items.findIndex(item => item.id === id)
        this.items.splice(index, 1)
    }
    async getById(id: string): Promise<IProduct | undefined> {
        return this.items.find(item => item.id === id)
    }
    async getAll(): Promise<IProduct[] | undefined> {
        return this.items
    }
    async save(product: IProduct): Promise<void> {
        const index = this.items.findIndex(item => item.id === product.id)
        if (index < 0) await this.add(product)
        else this.items.splice(index, 1, product)
    }
    private async add(product: IProduct) {
        this.items.push(product)
    }
    private items: IProduct[] = []
}

type Repository = GetAll<IProduct> & Save<IProduct> & GetById<IProduct> & DeleteById