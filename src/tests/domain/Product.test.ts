import Product from "../../Domain/Product";
import { describe, expect, it } from "vitest";

describe('Product', () => {
    const input = { name: 'any_name', price: 1, src: 'any_src' }
    const product = Product.create(input)
    it('expect proprieties', () => {
        expect(product.id).toBeDefined()
        expect(product.name).toBe(input.name)
        expect(product.price.value).toBe(input.price)
        expect(product.src).toBe(input.src)
    })

    it('get dto in product', () => {
        expect(product.dto).toEqual({
            id: product.id,
            name: input.name,
            price: input.price,
            src: input.src,
        })
    })
})