import DecreaseQuantityShopCartItemById from "@/application/UseCases/DecreaseQuantityShopCartItemById"
import dependencies from "@/infra/Dependencies"
import { NextRequest, NextResponse } from "next/server"

const decreaseQuantityShopCartItemById = dependencies.getDependency<DecreaseQuantityShopCartItemById>('decreaseQuantityShopCartItemById')

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = (await params)
    const { quantity } = await req.json()
    await decreaseQuantityShopCartItemById.execute({ id, quantity })
    return NextResponse.json({ message: 'Quantity has been increased'})
}