import Product from "../../Domain/Product";
import ShopCartItem from "../../Domain/ShopCartItem";
import { describe, expect, it } from "vitest";

describe('ShopCartItem', () => {
    const inputProduct = { name: 'any_name', price: 100, src: 'any_src' }
    const product = Product.create(inputProduct)
    const shopCartItem = ShopCartItem.create({ quantity: 2, product: product.dto })

    it('check property', () => {
        expect(shopCartItem.id).toBeDefined()
        expect(shopCartItem.quantity).toBe(2)
        expect(shopCartItem.totalPrice).toBe(200)
    })

    it('get dto in ShopCartItem', () => {
        expect(shopCartItem.dto).toEqual({
            id: shopCartItem.id,
            product: product.dto,
            quantity: 2,
            totalPrice: 200,
        })
    })
})