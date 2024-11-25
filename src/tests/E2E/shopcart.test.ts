import { describe, expect, it } from "vitest";

import Fetcher from "../../utils/Fetcher";
import Product from "../../Domain/Product";
import ShopCartGateway from "../../infra/gateway/ShopCartGateway";

describe("E2E", () => {
    const fetcher = new Fetcher()
    const shopCartGateway = new ShopCartGateway(fetcher)

    let fakeId: string

    it("POST:api/shopcart", async () => {
        const product = Product.create({ name: 'any_name', price: 1, src: 'any_src' })
        await shopCartGateway.addShopCartItem({ quantity: 2, product: product.dto })
    })

    it("GET:api/shopcart", async () => {
        const items = await shopCartGateway.getShopCartItems()
        expect(items).toHaveLength(1)
        fakeId = items[0].id
    })

    describe('api/shopcart/:id', () => {

        it("GET:id", async () => {
            const item = await shopCartGateway.getById(fakeId!)
            expect(item?.id).toBe(fakeId)
        })

        it("POST:id/increment", async () => {
            await shopCartGateway.incrementQuantityById(fakeId, 2)
            const item = await shopCartGateway.getById(fakeId!)
            expect(item?.quantity).toBe(4)
        })


        it("POST:id/decrement", async () => {
            await shopCartGateway.decrementQuantityById(fakeId, 1)
            const item = await shopCartGateway.getById(fakeId!)
            expect(item?.quantity).toBe(3)
        })

        it("GET:id/delete", async () => {
            await shopCartGateway.deleteById(fakeId)
            const item = await shopCartGateway.getById(fakeId!)
            expect(item).toBeFalsy()
        })
    })


})