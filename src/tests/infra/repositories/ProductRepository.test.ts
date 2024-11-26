import Product from "../../../Domain/Product";
import ProductRepository from "../../../infra/repositories/ProductRepository";
import { beforeEach, describe, expect, it } from "vitest";

describe('ProductRepository', () => {
    let sut: ProductRepository
    const productFake = Product.create({ name: 'any_name_1', price: 100, src: 'any_src' })
    beforeEach(async () => {
        sut = new ProductRepository
        const products = await sut.getAll()
        expect(products).toHaveLength(0)
        await sut.save(productFake)
    })

    it('should create a new product', async () => {
        const product1 = Product.create({ name: 'any_name_1', price: 100, src: 'any_src' })
        const product2 = Product.create({ name: 'any_name_2', price: 200, src: 'any_src' })
        await sut.save(product1)
        await sut.save(product2)

        const products = await sut.getAll()
        expect(products).toHaveLength(3)
    })

    it('get product by id', async () => {
        const product1 = Product.create({ name: 'any_name_1', price: 100, src: 'any_src' })
        await sut.save(product1)

        const product = await sut.getById(product1.id)
        expect(product?.id).toBe(product1.id)
    })

    it('save update products', async () => {
        const product1 = Product.create({ name: 'any_name_1', price: 100, src: 'any_src' })
        await sut.save(product1)

        product1.name = 'updated_name'
        await sut.save(product1)

        const product = await sut.getById(product1.id)
        expect(product?.name).toBe('updated_name')
    })

    it('should delete a product', async () => {
        
        await sut.deleteById(productFake.id)

        const product = await sut.getById(productFake.id)
        expect(product).toBeUndefined()
    })

})