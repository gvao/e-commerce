import ShopCartItemRepository from "../../../infra/repositories/ShopCartItemRepository";
import ProductRepository from "../../../infra/repositories/ProductRepository";
import Product from "../../../Domain/Product";
import { beforeEach, describe, expect, it } from "vitest";
import ShopCartItem from "../../../Domain/ShopCartItem";

describe('ShopCartItemRepository', () => {
    let sut: ShopCartItemRepository
    const productRepository = new ProductRepository
    const productFake = Product.create({ name: 'any_name_1', price: 100, src: 'any_src' })
    const shopCartItemFake = ShopCartItem.create({ quantity: 2, product: productFake.dto })
    beforeEach(async () => {
        sut = new ShopCartItemRepository
        const shopCartItems = await sut.getAll()
        expect(shopCartItems).toHaveLength(0)
        await productRepository.save(productFake)
        for (let i = 0; i < 2; i++) {
            const shopCartItem = ShopCartItem.create({ quantity: i + 1, product: productFake.dto })
            await sut.save(shopCartItem)
        }
    })

    it('should create a new item', async () => {
        const shopCartItem = ShopCartItem.create({ quantity: 2, product: productFake.dto })
        await sut.save(shopCartItem)

        const shopCartItems = await sut.getAll()
        expect(shopCartItems).toHaveLength(3)
    })

    it('get product by id', async () => {
        const shopCartItem = ShopCartItem.create({ quantity: 3, product: productFake.dto })
        await sut.save(shopCartItem)

        const product = await sut.getById(shopCartItem.id)
        expect(product?.id).toBe(shopCartItem.id)
    })

    it('save update products', async () => {
        shopCartItemFake.increaseQuantity(1)
        await sut.save(shopCartItemFake)

        const shopCartItem = await sut.getById(shopCartItemFake.id)
        expect(shopCartItem?.quantity).toBe(3)
    })

    it('should delete a product', async () => {
        await sut.deleteById(shopCartItemFake.id)
        const shopCartItem = await sut.getById(shopCartItemFake.id)
        expect(shopCartItem).toBeUndefined()
    })

})