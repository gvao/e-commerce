import { SaveProduct } from "../../application/UseCases";
import ProductRepository from "../../infra/repositories/ProductRepository";
import { describe, expect, it } from "vitest";

describe('SaveProduct', () => {
    it('should save the product', async () => {
        const productRepository = new ProductRepository()
        const saveProduct = new SaveProduct(productRepository)
        await saveProduct.execute({ name: 'any_name', price: 100, src: 'any_src' })
        const products = await productRepository.getAll()
        expect(products).toHaveLength(1)
    })
})