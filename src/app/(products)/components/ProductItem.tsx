'use client'

import Button from "@/app/components/Button"
import Image from "next/image"
import { Subtitle } from "@/app/components/Title"
import { IProductDto } from "@/Domain/Product/interface"
import Fetcher from "@/utils/Fetcher"
import ShopCartGateway from "@/infra/gateway/ShopCartGateway"

const ProductItem = ({ product, ...props }: { product: IProductDto }) => {

    const fetcher = new Fetcher(process.env.URL_BASE)
    const shopCartGateway = new ShopCartGateway(fetcher)
    
    const addQuantityInShopCartItem = (product: IProductDto) => {
        shopCartGateway.addShopCartItem({ quantity: 1, product })
    }

    return (
        <li {...props} className="bg-slate-900 flex flex-col gap-2 basis-[48%] sm:basis-[32%]" >

            <div className={`w-full`}>
                <Image src={product.src} alt={`image ${product.name}`} width={400} height={400} className="object-right" />
            </div>

            <div className="p-2">
                <Subtitle>{product.name}</Subtitle>
                <p className="px-2">R$ {product.price.toFixed(2)}</p>
            </div>

            <div className="flex justify-center py-4" >
                <Button onClick={() => addQuantityInShopCartItem(product)}>Adicionar</Button>
            </div>
        </li>
    )
}

export default ProductItem