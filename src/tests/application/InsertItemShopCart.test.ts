import ProductRepository from "../../infra/repositories/ProductRepository";
import {InsertShopCartItem} from "../../application/UseCases";
import Product from "../../Domain/Product";
import ShopCartItemRepository from "../../infra/repositories/ShopCartItemRepository";
import { beforeAll, describe, expect, it } from "vitest";

describe("InsertItemShopCart", () => {
    const shopCartItemRepository = new ShopCartItemRepository
    const productRepository = new ProductRepository
    const insertShopCartItem = new InsertShopCartItem(shopCartItemRepository, productRepository)
    let productId: string
    beforeAll(async () => {
        const product = Product.create({ name: 'any_name', price: 100, src: 'any_src' })
        productId = product.id
        await productRepository.save(product)
    })
    it('insert one item in shopCart', async () => {
        const quantity = 2
        await insertShopCartItem.execute({ productId, quantity })
        expect(await shopCartItemRepository.getAll()).toHaveLength(1)
        
    })
})