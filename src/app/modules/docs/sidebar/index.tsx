'use client'

import { useRouter } from "next/navigation"

export const DocsSidebar = () => {

    const { push } = useRouter()
    return (
        <div className="w-full h-full flex items-center py-4 flex-col gap-6 pl-12">
            <div className="flex flex-col   w-full">
                <span className="font-medium text-sm">Getting started</span>
                <div className="pt-4 flex flex-col gap-1 w-full">
                    <span className=" text-sm text-gray-600 hover:text-gray-800 hover:underline transition-all cursor-pointer" onClick={() => push('/docs')}>Introduction</span>
                    <span className=" text-sm text-gray-600">Creator</span>
                </div>
            </div>
            <div className="flex flex-col  w-full">
                <span className="font-medium text-sm">Components</span>
                <div className="pt-4 flex flex-col gap-1">
                    <span className=" text-sm text-gray-600">Introduction</span>
                    <span className=" text-sm text-gray-600">Creator</span>
                </div>
            </div>
        </div>

    )
}