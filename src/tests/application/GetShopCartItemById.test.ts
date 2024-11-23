import { beforeAll, describe, expect, it } from "vitest";

import ShopCartItem from "../../Domain/ShopCartItem";
import Product from "../../Domain/Product";
import ShopCartItemRepository from "../../infra/repositories/ShopCartItemRepository";
import GetShopCartItemById from "../../application/UseCases/GetShopCartItemById";

describe("GetShopCartItemById", () => {
    const shopCartItemRepository = new ShopCartItemRepository()
    const getShopCartItemById = new GetShopCartItemById(shopCartItemRepository)
    let fakeId = ''
    beforeAll(async () => {
        const quantity = 2
        const product = Product.create({ name: 'any_name', price: 100, src: 'any_src' })
        const shopCartItem = ShopCartItem.create({ product: product.dto, quantity })
        fakeId = shopCartItem.id
        await shopCartItemRepository.save(shopCartItem)
    })

    it('get shopCartItem by id', async () => {
        const shopCartItem = await getShopCartItemById.execute(fakeId)
        expect(shopCartItem?.id).toBe(fakeId)
    })
})