import { IProduct } from "../Product/IProduct"

export default interface IShopCartItem {
    id: string
    quantity: number
    product: IProduct
    totalPrice: number

    increaseQuantity(): void
    decreaseQuantity(): void
}

export type StoreCartItemProps = Pick<IShopCartItem, 'id' | 'product' | 'quantity'>

export type StoreItemCreateProps = Omit<StoreCartItemProps, 'id'>