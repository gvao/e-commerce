'use client'

import { redirect } from "next/navigation"
import { ChildrenProps } from "../types/ChildrenProps"
import { MouseEventHandler, } from "react"

const Popup = ({ children, pathOnClose }: ChildrenProps & { pathOnClose: string }) => {
    const closePopup: MouseEventHandler<HTMLElement> = ({ target }: { target: unknown }) => {
        const elem = target as HTMLElement
        if (elem.dataset?.out) {
            redirect(pathOnClose)
        }
    }
    return (
        <div onClick={closePopup} className="fixed z-50 top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50" >
            <div className="flex items-center justify-center w-full h-full" data-out="true" >
                <div className="p-4 bg-white text-slate-900 shadow-md rounded-md relative">
                    <div
                        className="cursor-pointer aspect-square absolute -top-2 -right-2 bg-white rounded-full w-6 h-6 text-center"
                        data-out="true"
                    >X</div>
                    <p>{children}</p>
                </div>
            </div>
        </div>
    )
}

export default Popup