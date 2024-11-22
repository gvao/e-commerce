import ShopCartItem from "@/Domain/ShopCartItem"
import { StoreItemCreateProps } from "@/Domain/ShopCartItem/interface"
import Fetcher from "@/utils/Fetcher"

export default class ShopCartGateway {
    constructor(private fetcher: Fetcher) { }

    async getShopCartItems(): Promise<ShopCartItem[]> {
        const { items } = await this.fetcher.request('/api/shopcart')
        return items
    }

    async addShopCartItem({ product, quantity }: StoreItemCreateProps): Promise<void> {
        await this.fetcher.request('/api/shopcart', { product, quantity })
    }
}