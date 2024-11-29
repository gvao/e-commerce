import Price from "@/Domain/ValueObject/Price";

export interface IProduct {
    id: string;
    name: string;
    price: Price;
    src: string;

    dto: IProductDto
}

export type IProductDto = {
    id: string;
    name: string;
    price: number;
    src: string;
}

export type IProductProps = Pick<IProductDto, 'id' | 'name' | 'src' | 'price'>
export type IProductCreateProps = Omit<IProductProps, "id">