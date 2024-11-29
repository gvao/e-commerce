import ProductRepository from "../../infra/repositories/ProductRepository";
import Dependencies from "../../infra/Dependencies/Dependencies";
import { beforeAll, describe, expect, it } from "vitest";
import Product from "../../Domain/Product";

describe('Dependencies', () => {
    const dependencies = new Dependencies
    const productRepository = new ProductRepository

    beforeAll(() => {
        dependencies.cadasterDependency(productRepository.constructor.name, productRepository)
    })

    it('should return a dependency', async () => {
        const repository = dependencies.getDependency<ProductRepository>('ProductRepository')
        const product = Product.create({ name: 'any_name', price: 100, src: 'any_src' })
        await repository.save(product)
        expect(repository).instanceOf(ProductRepository)
        expect(repository === productRepository).toBeTruthy()
    })

})