import GetShopCartItems from "@/application/UseCases/GetShopCartItems";
import InsertShopCartItem from "@/application/UseCases/InsertShopCartItem";
import ShopCartItemRepository from "@/infra/repositories/ShopCartItemRepository";
import { NextRequest, NextResponse } from "next/server";

const shopCartItemRepository = new ShopCartItemRepository
const insertItemShopCart = new InsertShopCartItem(shopCartItemRepository)
const getShopCartItems = new GetShopCartItems(shopCartItemRepository)

export async function GET() {
    const items = await getShopCartItems.execute()
    
    return NextResponse.json({
        items
    })
}

export async function POST(request: NextRequest) {
    const { product, quantity } = await request.json()
    await insertItemShopCart.execute({ product, quantity })
    return new NextResponse('Create success', { status: 201 })
}

