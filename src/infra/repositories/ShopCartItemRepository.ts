import GetAll from "@/application/repository/GetAll";
import Save from "@/application/repository/Save";
import IShopCartItem from "@/Domain/ShopCartItem/interface";

export default class ShopCartItemRepository implements Repository {
    async save(product: IShopCartItem): Promise<void> {
        this.items.push(product)
    }
    async getAll(): Promise<IShopCartItem[] | undefined> {
        return this.items
    }
    private items: IShopCartItem[] = []
}

type Repository = GetAll<IShopCartItem> & Save<IShopCartItem>