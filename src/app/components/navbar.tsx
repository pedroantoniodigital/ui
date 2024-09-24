'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

import { FaDiscord, FaInstagram } from "react-icons/fa";

export function Navbar() {
    const { push } = useRouter()
    
    return (
        <main className="relative">
            <div className="fixed top-0 w-full z-[1] ">
                <div className="bg-green-600 py-0.5 w-full h-[30px] text-sm flex gap-2 items-center justify-center text-white"> 
                    <Image src="/static/images/brasil-logo.png" alt="a logo from the brazil country flag" width={20} height={15} />
                    <span className="font-semibold text-white">V UI</span> - A brazillian made ui component repo.
                </div>
                <div className=" w-full h-[55px] bg-white/25 backdrop-blur-sm flex items-center justify-around ">
                    <div className="flex items-center justify-center text-sm gap-6">
                        <section onClick={() => push('/')} className="flex items-center gap-2 cursor-pointer">
                            <Image src="/static/images/brasil-logo.png" alt="a logo from the brazil country flag" width={20} height={15} />
                            <span className="font-semibold text-lg ">V UI</span>
                            <span className="font-semibold bg-gray-100 text-xs px-3 py-1 rounded-lg">Beta</span>
                        </section>
                        <button onClick={() => push('/docs')} className=" text-gray-500 hover:text-gray-700 cursor-pointer">Docs</button>
                        <section className=" text-gray-500 hover:text-gray-700 cursor-pointer">Components</section>
                        <section className=" text-gray-500 hover:text-gray-700 cursor-pointer">Creator</section>
                    </div>
                    <div className="flex items-center justify-center gap-6">
                        <section className=" hover:text-gray-700 transition-colors cursor-pointer border px-3 rounded-xl text-green-600 bg-green-50 border-green-600">v1.0.0</section>
                        <section className=" text-gray-500 hover:text-gray-700 cursor-pointer">
                            <FaDiscord size={22} />
                        </section>
                        <section className=" text-gray-500 hover:text-gray-700 cursor-pointer">
                            <FaInstagram size={22} />
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )

}