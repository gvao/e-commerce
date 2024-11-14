import ProductItem from "./ProductItem"
import { products } from "../constants/products"

export default function ProductList() {
    return <>
        <ul className="flex gap-3 justify-between items-center p-4 px-8 flex-wrap" >
            {products.map(product => (
                <ProductItem product={product} key={product.id} />
            ))}
        </ul>
    </>
}