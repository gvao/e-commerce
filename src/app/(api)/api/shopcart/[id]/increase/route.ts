import IncreaseQuantityShopCartItemById from "@/application/UseCases/IncreaseQuantityShopCartItemById"
import dependencies from "@/infra/Dependencies"
import { NextRequest, NextResponse } from "next/server"

const increaseQuantityShopCartItemById = dependencies.getDependency<IncreaseQuantityShopCartItemById>('increaseQuantityShopCartItemById')

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = (await params)
    const { quantity } = await req.json()
    await increaseQuantityShopCartItemById.execute({ id, quantity })
    return NextResponse.json({ message: 'Quantity has been increased'})
}