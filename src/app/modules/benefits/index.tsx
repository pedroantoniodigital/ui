import { FaLaptopCode } from "react-icons/fa";

export default function Benefits() {

    return (
        <div className="bg-white h-fit flex gap-6 justify-center p-8">
            <div className="rounded-lg h-[160px] w-[350px] flex flex-col gap-2 bg-green-300/20 backdrop-blur-3xl ring-1 ring-black/5 px-8  justify-center animate-float">
                <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white">
                        <FaLaptopCode size={22} />
                    </div>
                    <span className="text-green-600 font-bold text-lg">
                        Open Source
                    </span>
                </div>
                <p className="text-gray-500">
                    Eu nao sei oque escrever então finge que tem alguma coisa legal aqui para eu nao ficar triste
                </p>
            </div>
            <div className="rounded-lg h-[160px] w-[350px] flex flex-col gap-2 bg-green-300/20 backdrop-blur-3xl ring-1 ring-black/5 px-8  justify-center animate-float">
                <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white">
                        <FaLaptopCode size={22} />
                    </div>
                    <span className="text-green-600 font-bold text-lg">
                        Open Source
                    </span>
                </div>
                <p className="text-gray-500">
                    Eu nao sei oque escrever então finge que tem alguma coisa legal aqui para eu nao ficar triste
                </p>
            </div>
            <div className="rounded-lg h-[160px] w-[350px] flex flex-col gap-2 bg-green-300/20 backdrop-blur-3xl ring-1 ring-black/5 px-8  justify-center animate-float">
                <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white">
                        <FaLaptopCode size={22} />
                    </div>
                    <span className="text-green-600 font-bold text-lg">
                        Open Source
                    </span>
                </div>
                <p className="text-gray-500">
                    Eu nao sei oque escrever então finge que tem alguma coisa legal aqui para eu nao ficar triste
                </p>
            </div>
        </div>
    )
}