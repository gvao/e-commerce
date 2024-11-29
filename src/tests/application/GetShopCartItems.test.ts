import ShopCartItem from "../../Domain/ShopCartItem";
import {GetShopCartItems} from "../../application/UseCases";
import Product from "../../Domain/Product";
import ShopCartItemRepository from "../../infra/repositories/ShopCartItemRepository";
import { beforeAll, describe, expect, it } from "vitest";

describe("GetShopCartItems", () => {
    const shopCartItemRepository = new ShopCartItemRepository()
    const getShopCartItems = new GetShopCartItems(shopCartItemRepository)
    beforeAll(async () => {
        const quantity = 2
        const product = Product.create({ name: 'any_name', price: 100, src: 'any_src' })
        const shopCartItem1 = ShopCartItem.create({ product: product.dto, quantity })
        const shopCartItem2 = ShopCartItem.create({ product: product.dto, quantity: 3 })
        await shopCartItemRepository.save(shopCartItem1)
        await shopCartItemRepository.save(shopCartItem2)
    })

    it('insert one item in shopCart', async () => {  
        const items = await getShopCartItems.execute()
        expect(items).toHaveLength(2)
    })
})