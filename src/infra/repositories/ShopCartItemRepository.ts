import { DeleteById, GetAll, GetById, Save } from "@/application/repository";
import IShopCartItem from "@/Domain/ShopCartItem/interface";

export default class ShopCartItemRepository implements Repository {
    async deleteById(id: string): Promise<void> {
        this.items = this.items.filter(item => item.id !== id);
    }

    async getById(id: string): Promise<IShopCartItem | undefined> {
        return this.items.find(item => item.id === id)
    }
    async save(product: IShopCartItem): Promise<void> {
        this.items.push(product)
    }
    async getAll(): Promise<IShopCartItem[] | undefined> {
        return this.items
    }
    private items: IShopCartItem[] = []
}

type Repository = GetAll<IShopCartItem> & Save<IShopCartItem> & GetById<IShopCartItem> & DeleteById