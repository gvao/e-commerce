import { beforeAll, describe, expect, it } from "vitest";

import Product from "../../Domain/Product";
import ShopCartItem from "../../Domain/ShopCartItem";
import ShopCartItemRepository from "../../infra/repositories/ShopCartItemRepository";
import DeleteShopCartItemById from "../../application/UseCases/DeleteShopCartItemById";

describe('DeleteShopCartItem', () => {
    const shopCartItemRepository = new ShopCartItemRepository()
    const deleteShopCartItemById = new DeleteShopCartItemById(shopCartItemRepository)
    let fakeId = ''

    beforeAll(async () => {
        const quantity = 2
        const product = Product.create({ name: 'any_name', price: 100, src: 'any_src' })
        const shopCartItem = ShopCartItem.create({ product: product.dto, quantity })
        fakeId = shopCartItem.id
        await shopCartItemRepository.save(shopCartItem)
    })

    it('Delete shop cart item', async () => {
        await deleteShopCartItemById.execute(fakeId)
        expect(await shopCartItemRepository.getAll()).toHaveLength(0)
    })
})