import GetShopCartItemById from "@/application/UseCases/GetShopCartItemById";
import dependencies from "@/infra/Dependencies";
import { NextRequest, NextResponse } from "next/server";

const getShopCartItemById = dependencies.getDependency<GetShopCartItemById>('getShopCartItemById')

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = (await params)
    const item = await getShopCartItemById.execute(id)
    return NextResponse.json({ item });
}