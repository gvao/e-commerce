import { IProductDto } from "../Product/interface"

export default interface IShopCartItem {
    id: string
    quantity: number
    product: IProductDto
    totalPrice: number

    increaseQuantity(quantity: number): void
    decreaseQuantity(quantity: number): void

    dto: IShopCartItemDto
}

export type StoreCartItemProps = Pick<IShopCartItem, 'id' | 'product' | 'quantity'>
export type StoreItemCreateProps = Omit<StoreCartItemProps, 'id'>
export type IShopCartItemDto = {
    id: string
    quantity: number
    product: IProductDto
    totalPrice: number
}