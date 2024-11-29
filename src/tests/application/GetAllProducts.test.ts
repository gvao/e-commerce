import { beforeAll, describe, expect, it } from "vitest"

import {GetAllProducts} from "../../application/UseCases"
import ProductRepository from "../../infra/repositories/ProductRepository"
import Product from "../../Domain/Product"

describe('GetAllProducts', () => {
    const productRepository = new ProductRepository()
    const getAllProducts = new GetAllProducts(productRepository)

    beforeAll(async () => {
        const products = await getAllProducts.execute()
        expect(products).toHaveLength(0)
        for(let i = 0; i < 2; i++) {
            const product = Product.create({ name: `any_name_${i}`, price: 100 * i, src: 'any_src' })
            await productRepository.save(product)
        }
    })

    it('get all products, is empty', async () => {
        const products = await getAllProducts.execute()
        expect(products).toHaveLength(2)
    })
})

