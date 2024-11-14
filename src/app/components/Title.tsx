import { ChildrenProps } from "../types/ChildrenProps"

export const Title = ({ children }: ChildrenProps) => <>
    <h1 className="text-xl font-bold p-2" >
        {children}
    </h1>
</>

export const Subtitle = ({ children }: ChildrenProps) => 
    <h2 className="text-lg font-semibold p-2" >
        {children}
    </h2>

export default Title
