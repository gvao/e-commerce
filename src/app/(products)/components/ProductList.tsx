import ProductItem from "./ProductItem"
import Fetcher from "@/utils/Fetcher"
import ProductsGateway from "@/infra/gateway/ProductsGateway"

export default async function ProductList() {
    const fetcher = new Fetcher(process.env.URL_BASE)
    const productsGateway = new ProductsGateway(fetcher)
    const products = await productsGateway.getAllProducts()

    if (products.length === 0) {
        return <p className="text-center">Nenhum produto encontrado.</p>
    }

    return <>
        <ul className="flex gap-3 justify-between items-center p-4 px-8 flex-wrap" >
            {products.map(product => (
                <ProductItem product={product} key={product.id} />
            ))}
        </ul>
    </>
}