import DeleteShopCartItemById from "@/application/UseCases/DeleteShopCartItemById"
import dependencies from "@/infra/Dependencies"
import { NextRequest, NextResponse } from "next/server"

const deleteShopCartItemById = dependencies.getDependency<DeleteShopCartItemById>('deleteShopCartItemById')

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = (await params)
    await deleteShopCartItemById.execute(id)
    return NextResponse.json({ message: 'Item deleted successfully'})
}