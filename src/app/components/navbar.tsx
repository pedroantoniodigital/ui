import Image from "next/image";

import { FaHandshake } from "react-icons/fa";

export function Navbar() {

    
    return (
        <main className="relative">
            <div className="fixed top-0 w-full">
                <div className="bg-gradient-to-r from-white to-green-300 text-green-700 py-0.5 w-full h-fit text-xs flex gap-2 items-center justify-center"> 
                    <Image src="/static/images/brasil-logo.png" alt="a logo from the brazil country flag" width={20} height={15} />
                    <span className="font-semibold">V UI</span> - A brazillian made ui component repo.
                </div>
                <div className=" w-full h-[60px] bg-white flex items-center justify-around border-b border-b-gray-200">
                    <div className="flex items-center justify-center gap-3">
                        <section className="text-sm">Docs</section>
                        <section className="text-sm">Components</section>
                        <section className="text-sm">Creator</section>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <section className="text-sm">Discord</section>
                        <section className="text-sm">Instagram</section>
                        <section className="relative overflow-hidden text-sm  cursor-pointer bg-green-700 text-white px-4 py-2 rounded-2xl flex gap-2 items-center group">
                            <div className="absolute top-0 left-0 h-full w-0 bg-green-600 transition-all duration-300 ease group-hover:w-full"></div>
                            
                            <span className="relative flex gap-2 items-center z-10">
                                Work with me <FaHandshake size={20} />
                            </span>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )

}