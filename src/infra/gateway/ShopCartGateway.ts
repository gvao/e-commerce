import ShopCartItem from "@/Domain/ShopCartItem"
import { IShopCartItemDto } from "@/Domain/ShopCartItem/interface"
import Fetcher from "@/utils/Fetcher"

export default class ShopCartGateway {
    pathDefault = '/api/shopcart'
    constructor(private fetcher: Fetcher) { }

    async getShopCartItems(): Promise<ShopCartItem[]> {
        const { items } = await this.fetcher.request(this.pathDefault)
        return items
    }

    async addShopCartItem({ productId, quantity }: { productId: string, quantity: number }): Promise<void> {
        await this.fetcher.request(this.pathDefault, { productId, quantity })
    }

    async getById(id: string): Promise<IShopCartItemDto | undefined> {
        const { item } = await this.fetcher.request(`${this.pathDefault}/${id}`)
        return item
    }
    
    async deleteById(id: string): Promise<void> {
        await this.fetcher.request(`${this.pathDefault}/${id}/delete`)
    }
    
    async incrementQuantityById(id: string, quantity: number) {
        await this.fetcher.request(`${this.pathDefault}/${id}/increase`, { quantity })
    }
    
    async decrementQuantityById(id: string, quantity: number) { 
        await this.fetcher.request(`${this.pathDefault}/${id}/decrease`, { quantity })
    }
}