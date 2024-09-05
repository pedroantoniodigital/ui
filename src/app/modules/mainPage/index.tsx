export default function Introduction() {

    return (
        <main className="flex h-[85dvh] flex-col items-center justify-center bg-white py-44 px-32 bg-[linear-gradient(to_bottom,rgba(128,128,128,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(128,128,128,0.04)_1px,transparent_1px)]  bg-[size:32px_32px] bg-[mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]">
            <section className="w-full flex flex-col gap-3 items-center justify-center">
                <div className="w-fit px-3 shadow border rounded-lg bg-white text-gray-500">Introduction</div>
                <div className="text-7xl max-w-[60%] text-center font-bold tracking-tight leading-[1.2] my-1 bg-gradient-to-r from-gray-500 to-gray-900 bg-clip-text text-transparent animate-float">
                    The newest and friendly facilitator for your project design
                </div>
                <p className="text-lg font-medium text-gray-400">
                    Created by the community, for the community.
                </p>
                <div className="flex gap-2">
                    <button className="bg-green-600 hover:bg-opacity-85 transition-colors duration-300 p-3 text-sm text-white font-medium rounded-md">
                        Explore the components
                    </button>
                    <button className="p-3 font-medium hover:bg-gray-100 transition-colors bg-white duration-300 text-sm rounded-md border text-gray-500">
                        Talk with me
                    </button>
                </div>
            </section>
        </main>
    )
}