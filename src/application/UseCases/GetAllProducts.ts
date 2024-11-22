import { IProduct } from "@/Domain/Product/IProduct"
import UseCase from "./interface"
import GetAll from "../repository/GetAll"

export default class GetAllProducts implements UseCase<Input, Output> {
    constructor(private productRepository: GetAll<IProduct>) { }

    async execute(): Promise<Output> {
        const products = await this.productRepository.getAll()
        return products
    }

}

type Input = void
type Output = IProduct[] | undefined