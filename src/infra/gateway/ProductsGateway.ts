import { IProduct, IProductCreateProps } from "@/Domain/Product/interface"
import Fetcher from "@/utils/Fetcher"

export default class ProductsGateway {
    constructor(private fetcher: Fetcher) { }

    async getAllProducts(): Promise<IProduct[]> {
        const { products } = await this.fetcher.request('/api/products')
        return products
    }

    async addNewProduct({ name, price, src }: IProductCreateProps): Promise<void> {
        await this.fetcher.request('/api/products', { name, price, src })
    }
}