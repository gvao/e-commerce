import { describe, expect, it } from "vitest";

import Fetcher from "../../utils/Fetcher";
import Product from "../../Domain/Product";
import ShopCartGateway from "@/infra/gateway/ShopCartGateway";

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