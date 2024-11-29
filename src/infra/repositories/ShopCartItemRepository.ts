import { DeleteById, GetAll, GetById, Save } from "@/application/repository";
import Observer from "../../Domain/Observer";
import IShopCartItem from "@/Domain/ShopCartItem/interface";
import { Listener } from "@/Domain/Observer/interface";

export default class ShopCartItemRepository implements Repository {
    constructor() {
        this.observer = new Observer
    }

    private observer: Observer
    subscribe(listener: Listener) { this.observer.subscribe(listener) }

    async deleteById(id: string): Promise<void> {
        this.items = this.items.filter(item => item.id !== id);
    }
    async getById(id: string): Promise<IShopCartItem | undefined> {
        return this.items.find(item => item.id === id)
    }
    async save(shopCartItem: IShopCartItem): Promise<void> {
        const index = this.items.findIndex(item => item.id === shopCartItem.id)
        if (index < 0) {
            await this.add(shopCartItem)
            this.observer.notify({ eventName: 'added-shopCartItem' })
        } else {
            this.items.splice(index, 1, shopCartItem)
            this.observer.notify({ eventName: 'saved-shopCartItem' })
        }
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