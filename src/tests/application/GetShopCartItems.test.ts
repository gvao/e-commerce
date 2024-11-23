import ShopCartItem from "../../Domain/ShopCartItem";
import GetShopCartItems from "../../application/UseCases/GetShopCartItems";
import Product from "../../Domain/Product";
import ShopCartItemRepository from "../../infra/repositories/ShopCartItemRepository";
import { beforeAll, describe, expect, it } from "vitest";

describe("InsertItemShopCart", () => {
    const shopCartItemRepository = new ShopCartItemRepository()
    const getShopCartItems = new GetShopCartItems(shopCartItemRepository)
    beforeAll(async () => {
        const quantity = 2
        const product = Product.create({ name: 'any_name', price: 100, src: 'any_src' })
        const shopCartItem = ShopCartItem.create({ product: product.dto, quantity })
        shopCartItemRepository.save(shopCartItem)
    })

    it('insert one item in shopCart', async () => {  
        await getShopCartItems.execute()
        expect(await shopCartItemRepository.getAll()).toHaveLength(1)
    })
})