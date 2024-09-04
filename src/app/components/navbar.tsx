import Image from "next/image";

import { FaDiscord, FaHandshake, FaInstagram } from "react-icons/fa";

export function Navbar() {

    
    return (
        <main className="relative">
            <div className="fixed top-0 w-full">
                <div className="bg-green-600 py-0.5 w-full h-fit text-xs flex gap-2 items-center justify-center text-white"> 
                    <Image src="/static/images/brasil-logo.png" alt="a logo from the brazil country flag" width={20} height={15} />
                    <span className="font-semibold text-white">V UI</span> - A brazillian made ui component repo.
                </div>
                <div className=" w-full h-[55px] bg-white flex items-center justify-around border-b border-b-gray-200">
                    <div className="flex items-center justify-center gap-6">
                        <section className=" text-gray-500 hover:text-gray-700 cursor-pointer">Docs</section>
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