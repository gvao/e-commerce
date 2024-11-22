import { IProduct } from "../Product/IProduct"
import IShopCartItem, { StoreCartItemProps, StoreItemCreateProps } from "./interface"

export default class ShopCartItem implements IShopCartItem {
    id: string
    quantity: number
    product: IProduct
    
    constructor({ id, product, quantity }: StoreCartItemProps) {
        this.id = id
        this.product = product
        this.quantity = quantity
    }
    
    get totalPrice(): number {
        return this.product.price * this.quantity
    }

    increaseQuantity(): void {
        this.quantity += 1
    }
    decreaseQuantity(): void {
        this.quantity -= 1
    }

    static create({ product, quantity }: StoreItemCreateProps): ShopCartItem {
        const id = crypto.randomUUID()
        return new ShopCartItem({ id, product, quantity })
    }
}