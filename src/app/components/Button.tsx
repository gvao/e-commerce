import { ButtonHTMLAttributes } from "react"

const Button = ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) =>
    <button {...props} className="bg-slate-500 text-slate-950 shadow px-4 py-2 cursor-pointer" >
        {children}
    </button>

export default Button