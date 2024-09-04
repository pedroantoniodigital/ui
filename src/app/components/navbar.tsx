import Image from "next/image";

import { FaHandshake } from "react-icons/fa";

export function Navbar() {

    
    return (
        <main className="relative">
            <div className="fixed top-0 w-full">
                <div className="bg-green-500 py-0.5 w-full h-fit text-xs flex gap-2 items-center justify-center text-white"> 
                    <Image src="/static/images/brasil-logo.png" alt="a logo from the brazil country flag" width={20} height={15} />
                    <span className="font-semibold text-white">V UI</span> - A brazillian made ui component repo.
                </div>
                <div className=" w-full h-[55px] bg-white flex items-center justify-around border-b border-b-gray-200">
                    <div className="flex items-center justify-center gap-6">
                        <section className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">Docs</section>
                        <section className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">Components</section>
                        <section className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">Creator</section>
                    </div>
                    <div className="flex items-center justify-center gap-6">
                        <section className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">Discord</section>
                        <section className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">Instagram</section>
                        <section className="relative overflow-hidden text-sm  cursor-pointer border text-gray-500 px-3 py-2 rounded-md flex gap-2 items-center group">
                            <div className="absolute top-0 left-0 h-full w-0 bg-slate-100 transition-all duration-300 ease group-hover:w-full"></div>
                            
                            <span className="relative flex gap-2 items-center z-10 text-sm">
                            <FaHandshake size={20} /> Partner 
                            </span>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )

}