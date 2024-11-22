import { describe, expect, it } from "vitest";

import ShopCartItem from "../../Domain/ShopCartItem";
import Fetcher from "../../utils/Fetcher";
import { StoreItemCreateProps } from "../../Domain/ShopCartItem/interface";
import Product from "../../Domain/Product";

describe.skip("E2E", () => {
    const fetcher = new Fetcher()
    const shopCartGateway = new ShopCartGateway(fetcher)

    it("POST api/shopcart", async () => {
        const product = Product.create({ name: 'any_name', price: 1, src: 'any_src' })
        shopCartGateway.addShopCartItem({ quantity: 2, product })
    })

    it("GET api/shopcart", async () => {
        const items = await shopCartGateway.getShopCartItems()
        expect(items).toHaveLength(0)
    })


})

class ShopCartGateway {
    constructor(private fetcher: Fetcher) { }

    async getShopCartItems(): Promise<ShopCartItem[]> {
        const { items } = await this.fetcher.request('/api/shopcart')
        return items
    }

    async addShopCartItem({ product, quantity }: StoreItemCreateProps): Promise<void> {
        await this.fetcher.request('/api/shopcart', { product, quantity })
    }
}