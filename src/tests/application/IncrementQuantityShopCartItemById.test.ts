import { beforeAll, describe, expect, it } from "vitest";

import Product from "../../Domain/Product";
import ShopCartItem from "../../Domain/ShopCartItem";
import ShopCartItemRepository from "../../infra/repositories/ShopCartItemRepository";
import IncrementQuantityShopCartItemById from "../../application/UseCases/IncrementQuantityShopCartItemById";

describe("incrementQuantityShopCartItemById", () => {
    const shopCartItemRepository = new ShopCartItemRepository()
    const incrementQuantityShopCartItemById = new IncrementQuantityShopCartItemById(shopCartItemRepository)
    let fakeId = ''
    beforeAll(async () => {
        const quantity = 1
        const product = Product.create({ name: 'any_name', price: 100, src: 'any_src' })
        const shopCartItem = ShopCartItem.create({ product: product.dto, quantity })
        fakeId = shopCartItem.id
        await shopCartItemRepository.save(shopCartItem)
    })

    it('increment quantity shopCartItem', async () => {
        await incrementQuantityShopCartItemById.execute({id: fakeId, quantity: 1})
        const shopCartItem = await  shopCartItemRepository.getById(fakeId)
        expect(shopCartItem?.quantity).toBe(2)
    })
})