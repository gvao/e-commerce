import { ChildrenProps } from "../../types/ChildrenProps";

export default async function Layout({ children, }: Readonly<ChildrenProps>) {


    return <>
        <header>
            header
        </header>

        {children}
    </>
}