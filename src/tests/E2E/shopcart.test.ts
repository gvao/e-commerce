import { describe, expect, it } from "vitest";

import Fetcher from "../../utils/Fetcher";
import Product from "../../Domain/Product";
import ShopCartGateway from "../../infra/gateway/ShopCartGateway";

describe("E2E", () => {
    const fetcher = new Fetcher()
    const shopCartGateway = new ShopCartGateway(fetcher)

    let fakeId: string

    it("POST api/shopcart", async () => {
        const product = Product.create({ name: 'any_name', price: 1, src: 'any_src' })
        await shopCartGateway.addShopCartItem({ quantity: 2, product: product.dto })
    })

    it("GET api/shopcart", async () => {
        const items = await shopCartGateway.getShopCartItems()
        expect(items).toHaveLength(1)
        fakeId = items[0].id
    })

    it("GET api/shopcart/:id", async () => {
        const item = await shopCartGateway.getById(fakeId!)
        expect(item?.id).toBe(fakeId)
    })

    it("DELETE api/shopcart/:id", async () => {
        await shopCartGateway.deleteById(fakeId)
        const item = await shopCartGateway.getById(fakeId!)
        expect(item).toBeFalsy()
    })

})