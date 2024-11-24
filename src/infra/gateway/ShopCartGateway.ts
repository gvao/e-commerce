import ShopCartItem from "@/Domain/ShopCartItem"
import { IShopCartItemDto, StoreItemCreateProps } from "@/Domain/ShopCartItem/interface"
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

    async getById(id: string): Promise<IShopCartItemDto | undefined> {
        const { item } = await this.fetcher.request(`/api/shopcart/${id}`)
        return item
    }
    
    async deleteById(id: string): Promise<void> {
        await this.fetcher.request(`/api/shopcart/${id}/delete`)
    }
    
    async incrementQuantityById(id: string, quantity: number) {
        await this.fetcher.request(`/api/shopcart/${id}/increment`, { quantity })
    }
    
    async decrementQuantityById(id: string, quantity: number) { 
        await this.fetcher.request(`/api/shopcart/${id}/decrement`, { quantity })
    }
}