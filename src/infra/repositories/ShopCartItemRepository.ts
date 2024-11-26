import { DeleteById, GetAll, GetById, Save } from "@/application/repository";
import IShopCartItem from "@/Domain/ShopCartItem/interface";

export default class ShopCartItemRepository implements Repository {
    async deleteById(id: string): Promise<void> {
        this.items = this.items.filter(item => item.id !== id);
    }
    async getById(id: string): Promise<IShopCartItem | undefined> {
        return this.items.find(item => item.id === id)
    }
    async save(shopCartItem: IShopCartItem): Promise<void> {
        const index = this.items.findIndex(item => item.id === shopCartItem.id)
        if (index < 0) await this.add(shopCartItem)
        else this.items.splice(index, 1, shopCartItem)
    }
    async getAll(): Promise<IShopCartItem[] | undefined> {
        return this.items
    }
    private async add(shopCartItem: IShopCartItem) {
        this.items.push(shopCartItem)
    }
    private items: IShopCartItem[] = []
}

type Repository = GetAll<IShopCartItem> & Save<IShopCartItem> & GetById<IShopCartItem> & DeleteById