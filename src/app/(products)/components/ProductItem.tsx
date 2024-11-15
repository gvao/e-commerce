import Button from "@/app/components/Button"
import Image from "next/image"
import { Subtitle } from "@/app/components/Title"
import { IProduct } from "@/Domain/Product/IProduct"

const ProductItem = ({ product, ...props }: { product: IProduct }) =>
    <li {...props} className="bg-slate-900 flex flex-col gap-2 basis-[48%] sm:basis-[32%]" >

        <div className={`w-full bg-red-600`}>
            <Image src={product.src} alt={`image ${product.name}`} width={400} height={400} className="object-right" />
        </div>

        <div className="p-2">
            <Subtitle>{product.name}</Subtitle>
            <p className="px-2">R$ {product.price.toFixed(2)}</p>
        </div>

        <div className="flex justify-center py-4" >
            <Button>Adicionar</Button>
        </div>
    </li>

export default ProductItem