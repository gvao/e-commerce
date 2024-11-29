import { IProduct, IProductDto } from "@/Domain/Product/interface"
import UseCase from "./interface"
import {GetAll} from "../repository"

export class GetAllProducts implements UseCase<Input, Output> {
    constructor(private productRepository: GetAll<IProduct>) { }

    async execute(): Promise<Output> {
        const products = await this.productRepository.getAll()
        return products?.map(product => product.dto)
    }

}

type Input = void
type Output = IProductDto[] | undefined