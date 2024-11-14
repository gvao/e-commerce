import { PageProps } from "@/app/types/PageProps";
import Title from "../../components/Title";
import ProductList from "../components/ProductList";
import Link from "@/app/components/Link";
import Button from "@/app/components/Button";
import Popup from "@/app/components/Popup";
import StoreCart from "../components/StoreCart";
// import { redirect } from "next/navigation";

export default async function HomePage({ searchParams }: PageProps<void, { storeCart: string }>) {

  const search = (await searchParams)
  const showStoreCart = search?.storeCart === 'true';

  return <>

    <div className="flex justify-between" >

      <Title>E-commerce</Title>

      <Link href={`?storeCart=${!showStoreCart}`}>
        <Button>Carrinho de compras</Button>
      </Link>
    </div>

    {showStoreCart && (
      <Popup pathOnClose="/products" >
        <StoreCart />
      </Popup>

    )}


    <ProductList />
  </>
}

