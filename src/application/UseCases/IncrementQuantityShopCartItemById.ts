import IShopCartItem from "@/Domain/ShopCartItem/interface"
import { GetById, Save } from "../repository"
import UseCase from "./interface"

export default class IncrementQuantityShopCartItemById implements UseCase<Input, Output> {
    constructor(private repository: repository) { }

    async execute({ id, quantity }: Input): Promise<void> {
        const shopCartItem = await this.repository.getById(id)
        if(!shopCartItem) throw new Error(`shopCartItem not found`)
        shopCartItem?.increaseQuantity(quantity)
        await this.repository.save(shopCartItem)
    }
}

type repository = GetById<IShopCartItem> & Save<IShopCartItem>

type Input = {
    id: string,
    quantity: number,
}
type Output = void