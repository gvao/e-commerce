import IShopCartItem, { StoreItemCreateProps as ShopItemCreateProps } from "../../Domain/ShopCartItem/interface";
import { IProduct } from "@/Domain/Product/interface";
import UseCase from "./interface";
import ShopCartItem from "../../Domain/ShopCartItem";
import { GetById, Save } from "../repository";

export class InsertShopCartItem implements UseCase<Input, Output> {
    constructor(
        private shopCartItemRepository: ShopCartItemRepository,
        private productRepository: ProductRepository,
    ) { }

    async execute({ productId, quantity }: Input): Promise<Output> {
        const product = await this.productRepository.getById(productId)
        if (!product) return console.log(`product ${productId} not found`)
        const shopCartItem = ShopCartItem.create({ product: product.dto, quantity })
        await this.shopCartItemRepository.save(shopCartItem)
    }
}

type Input = { productId: string, quantity: number }
type Output = void

type ShopCartItemRepository = Save<IShopCartItem>
type ProductRepository = GetById<IProduct>