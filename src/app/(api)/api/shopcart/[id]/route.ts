import DeleteShopCartItemById from "@/application/UseCases/DeleteShopCartItemById";
import GetShopCartItemById from "@/application/UseCases/GetShopCartItemById";
import dependencies from "@/infra/Dependencies";
import { NextRequest, NextResponse } from "next/server";

const getShopCartItemById = dependencies.getDependency<GetShopCartItemById>('getShopCartItemById')
const deleteShopCartItemById = dependencies.getDependency<DeleteShopCartItemById>('deleteShopCartItemById')

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = (await params)
    const item = await getShopCartItemById.execute(id)
    return NextResponse.json({ item });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = (await params)
    await deleteShopCartItemById.execute(id)
    return NextResponse.json({ message: 'Item deleted successfully'})
}