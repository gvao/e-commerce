import GetShopCartItems from "@/application/UseCases/GetShopCartItems";
import InsertShopCartItem from "@/application/UseCases/InsertShopCartItem";
import dependencies from "@/infra/Dependencies";
import { NextRequest, NextResponse } from "next/server";

const insertShopCartItem = dependencies.getDependency<InsertShopCartItem>('insertShopCartItem')
const getShopCartItems = dependencies.getDependency<GetShopCartItems>('getShopCartItems')

export async function GET() {
    const items = await getShopCartItems.execute()
    return NextResponse.json({ items })
}

export async function POST(request: NextRequest) {
    const { product, quantity } = await request.json()
    await insertShopCartItem .execute({ product, quantity })
    return NextResponse.json({ message: 'Create success' }, { status: 201 })
}

