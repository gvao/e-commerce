import { IShopCartItemDto } from "../../Domain/ShopCartItem/interface";
import UseCase from "./interface";
import ShopCartItem from "../../Domain/ShopCartItem";
import { GetAll } from "../../application/repository"

export class GetShopCartItems implements UseCase<Input, Output> {
    constructor(private shopCartItemRepository: Repository) { }

    async execute(): Promise<Output> {
        const shopCartItems = await this.shopCartItemRepository.getAll()
        return shopCartItems?.map(shopCartItem => shopCartItem.dto)
    }
}

type Input = void
type Output = IShopCartItemDto[] | undefined
type Repository = GetAll<ShopCartItem>