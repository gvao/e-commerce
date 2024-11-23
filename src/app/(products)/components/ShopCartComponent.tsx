
// import Button from "@/app/components/Button";
import { Subtitle } from "@/app/components/Title"
import dependencies from "@/infra/Dependencies";
import ShopCartGateway from "@/infra/gateway/ShopCartGateway";

const shopCartGateway = dependencies.getDependency<ShopCartGateway>('shopCartGateway')

const ShopCartComponent = async () => {
    const items = await shopCartGateway.getShopCartItems()

    return (
        <div>
            <Subtitle>Carrinho de compras</Subtitle>

            <div>
                <p>Items</p>
                <ul>
                    {items.map((shopCartItem, i) => (
                        <li key={`storeProduct-${i}`} className="flex justify-between items-center gap-2 border" >
                            <div className="flex flex-col ">
                                <span>{shopCartItem.product.name}</span>
                                <span>R$ {shopCartItem.totalPrice}</span>
                            </div>

                            {/**
                             * 
                             <div>
                                <Button onClick={() => storeCart.increaseQuantity(storeCartItem.id)}>+</Button>
                                <span>Quantidade: {storeCartItem.quantity}</span>
                                <Button onClick={() => storeCart.decreaseQuantity(storeCartItem.id)}>-</Button>
                            </div>
                            * 
                            */}
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}

export default ShopCartComponent