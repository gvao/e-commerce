import GetAllProducts from "@/application/UseCases/GetAllProducts";
import Product from "@/Domain/Product";
import ProductRepository from "@/infra/repositories/ProductRepository";
import { NextResponse } from "next/server";

const productRepository = new ProductRepository()
const getAllProducts = new GetAllProducts(productRepository);

(async () => {
    for (let i = 0; i < 3; i++) {
        const product = Product.create({ name: `any_name_${i}`, price: 100 * i, src: '/s21-fe.jpg' })
        await productRepository.save(product)
    }
})()

export async function GET() {

    const products = await getAllProducts.execute()

    return NextResponse.json({
        products
    })
}