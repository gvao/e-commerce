import UseCase from "./interface";
import { Save } from "../repository"
import { IProductCreateProps } from "../../Domain/Product/interface";
import Product from "../../Domain/Product";

export class SaveProduct implements UseCase<Input, Output> {
    constructor(private productRepository: Repository) { }

    async execute({ name, price, src }: Input): Promise<Output> {
        const product = Product.create({ name, price, src });
        await this.productRepository.save(product)
    }
}

type Input = IProductCreateProps
type Output = void
type Repository = Save<Product>