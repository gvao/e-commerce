import { beforeAll, describe, expect, it } from "vitest";

import Product from "../../Domain/Product";
import ShopCartItem from "../../Domain/ShopCartItem";
import ShopCartItemRepository from "../../infra/repositories/ShopCartItemRepository";
import { DecreaseQuantityShopCartItemById } from "../../application/UseCases";

describe("DecreaseQuantityShopCartItemById", () => {
    const shopCartItemRepository = new ShopCartItemRepository()
    const decreaseQuantityShopCartItemById = new DecreaseQuantityShopCartItemById(shopCartItemRepository)
    let fakeId = ''
    beforeAll(async () => {
        const quantity = 2
        const product = Product.create({ name: 'any_name', price: 100, src: 'any_src' })
        const shopCartItem = ShopCartItem.create({ product: product.dto, quantity })
        fakeId = shopCartItem.id
        await shopCartItemRepository.save(shopCartItem)
    })

    it('decrease quantity shopCartItem', async () => {
        await decreaseQuantityShopCartItemById.execute({ id: fakeId, quantity: 1 })
        const shopCartItem = await shopCartItemRepository.getById(fakeId)
        expect(shopCartItem?.quantity).toBe(1)

    })
})