import { StoreItemCreateProps } from "../../Domain/ShopCartItem/interface";
import UseCase from "./interface";
import ShopCartItem from "../../Domain/ShopCartItem";
import Save from "../repository/Save";

export default class InsertShopCartItem implements UseCase<Input, Output> {
    constructor(private shopCartItemRepository: Repository ){}

    async execute({ product, quantity }: Input): Promise<Output> {
        const shopCartItem = ShopCartItem.create({ product, quantity })
        await this.shopCartItemRepository.save(shopCartItem)
    }
}

type Input = StoreItemCreateProps
type Output = void
type Repository = Save<ShopCartItem>