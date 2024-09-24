import { GoChevronRight } from "react-icons/go";

export default function Introduction() {

    return (
        <main className="flex h-[85dvh] flex-col items-center justify-center bg-white py-44 px-32 bg-[linear-gradient(to_bottom,rgba(128,128,128,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(128,128,128,0.04)_1px,transparent_1px)]  bg-[size:32px_32px] bg-[mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]">
            <section className="w-full flex flex-col gap-3 items-center justify-center">
                <div className="w-fit px-3 shadow border rounded-lg bg-white text-gray-500">Introduction</div>
                <div className="text-7xl max-w-[60%] text-center font-bold tracking-tight leading-[1.2] my-1 bg-gradient-to-r from-gray-500 to-gray-900 bg-clip-text text-transparent animate-float">
                    The newest and friendly facilitator for your project design
                </div>
                <p className="text-lg ">
                    Created <b>by the community, for the community.</b>
                </p>
                <div className="flex gap-2">
                    <button className="bg-green-600 min-w-[250px] flex gap-1 items-center justify-center hover:bg-opacity-85 transition-colors duration-300 p-3 text-sm text-white font-medium rounded-3xl px-6 group relative">
                        <span>Explore the components</span>
                        <span className="flex items-center">
                            <GoChevronRight className="group-hover:translate-x-1 transition-all duration-300" />
                        </span>
                        <span className="absolute inset-0 rounded-3xl ring-2 ring-green-600 ring-opacity-50 ring-offset-4 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></span>
                    </button>

                    <button className="p-3 font-medium min-w-[250px] flex gap-1 items-center justify-center hover:bg-gray-50 transition-colors bg-white duration-300 text-sm rounded-3xl px-6 border text-gray-500 group relative">
                        <span>Talk with me</span>
                        <span className="flex items-center">
                            <GoChevronRight className="group-hover:translate-x-1 transition-all duration-300" />
                        </span>
                        <span className="absolute inset-0 rounded-3xl ring-2  ring-gray-300 ring-opacity-50 ring-offset-4 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></span>
                    </button>
                </div>
            </section>
        </main>
    )
}