import { StoreItemCreateProps as ShopItemCreateProps } from "../../Domain/ShopCartItem/interface";
import UseCase from "./interface";
import ShopCartItem from "../../Domain/ShopCartItem";
import {Save} from "../repository";
import Product from "../../Domain/Product";

export default class InsertShopCartItem implements UseCase<Input, Output> {
    constructor(private shopCartItemRepository: Repository ){}

    async execute({ product: productInput, quantity }: Input): Promise<Output> {
        const product = new Product({ id: productInput.id, name: productInput.name, price: productInput.price, src: productInput.src })
        const shopCartItem = ShopCartItem.create({ product: product.dto, quantity })
        await this.shopCartItemRepository.save(shopCartItem)
    }
}

type Input = ShopItemCreateProps
type Output = void
type Repository = Save<ShopCartItem>