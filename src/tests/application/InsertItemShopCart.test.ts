import InsertShopCartItem from "../../application/UseCases/InsertShopCartItem";
import Product from "../../Domain/Product";
import ShopCartItemRepository from "../../infra/repositories/ShopCartItemRepository";
import { describe, expect, it } from "vitest";

describe("InsertItemShopCart", () => {
    const shopCartItemRepository = new ShopCartItemRepository()
    const insertShopCartItem = new InsertShopCartItem(shopCartItemRepository)
    it('insert one item in shopCart', async () => {
        const product = Product.create({ name: 'any_name', price: 100, src: 'any_src' })
        const quantity = 2
        await insertShopCartItem.execute({ product: product.dto, quantity })
        expect(await shopCartItemRepository.getAll()).toHaveLength(1)
    })
})