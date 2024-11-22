import IShopCartItem from "../../Domain/ShopCartItem/interface";
import UseCase from "./interface";
import ShopCartItem from "../../Domain/ShopCartItem";
import GetAll from "../../application/repository/GetAll"    

export default class GetShopCartItems implements UseCase<Input, Output> {
    constructor(private shopCartItemRepository: Repository ){}

    async execute(): Promise<Output> {
        const shopCartItems = await this.shopCartItemRepository.getAll()
        return shopCartItems
    }
}

type Input = void
type Output = IShopCartItem[] | undefined
type Repository = GetAll<ShopCartItem>