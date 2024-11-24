import { IProductDto } from "../Product/interface"
import IShopCartItem, { IShopCartItemDto, StoreCartItemProps, StoreItemCreateProps } from "./interface"

export default class ShopCartItem implements IShopCartItem {
    id: string
    quantity: number
    product: IProductDto
    
    constructor({ id, product, quantity }: StoreCartItemProps) {
        this.id = id
        this.product = product
        this.quantity = quantity
    }

    get dto(): IShopCartItemDto {
        return {
            id: this.id,
            product: this.product,
            quantity: this.quantity,
            totalPrice: this.totalPrice,
        }
    }
    
    get totalPrice(): number {
        return this.product.price * this.quantity
    }

    increaseQuantity(quantity: number): void {
        this.quantity += quantity
    }
    decreaseQuantity(quantity: number): void {
        this.quantity -= quantity
    }

    static create({ product, quantity }: StoreItemCreateProps): ShopCartItem {
        const id = crypto.randomUUID()
        return new ShopCartItem({ id, product, quantity })
    }
}