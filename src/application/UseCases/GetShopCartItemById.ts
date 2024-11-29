import ShopCartItem from "@/Domain/ShopCartItem";
import UseCase from "./interface";
import { GetById } from "../repository/GetById";
import { IShopCartItemDto } from "@/Domain/ShopCartItem/interface";

export class GetShopCartItemById implements UseCase<Input, Output> {
    constructor(private repository: Repository) { }
    async execute(id: string): Promise<Output> {
        const shopCartItem = await this.repository.getById(id)
        return shopCartItem?.dto
    }
}

type Input = string
type Output = IShopCartItemDto | undefined
type Repository = GetById<ShopCartItem>