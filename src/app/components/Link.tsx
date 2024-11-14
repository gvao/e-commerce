import NextLink from "next/link"
import { AnchorHTMLAttributes } from "react"
const Link = ({ children, href }: AnchorHTMLAttributes<HTMLAnchorElement>) => <NextLink href={href || ''}>
    {children}
</NextLink>
export default Link