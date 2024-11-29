import UseCase from "./interface";
import { DeleteById } from "../repository";

export class DeleteShopCartItemById implements UseCase<Input, Output> {
    constructor(private repository: Repository) {}
    async execute(id: string): Promise<void> {
        await this.repository.deleteById(id)
    }
}

type Input = string
type Output = void
type Repository = DeleteById