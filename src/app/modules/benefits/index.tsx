import { FaLaptopCode } from "react-icons/fa";

export default function Benefits() {

    return (
        <div className="bg-white h-fit flex gap-6 justify-center p-8">
            <div className="rounded-lg h-[250px] border w-[350px] flex flex-col gap-2 bg-white justify-center p-4 px-6 animate-float" style={{ animationDelay: '0.1s' }} >
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white">
                    <FaLaptopCode size={22} />
                </div>
                <span className="text-green-600 font-bold text-lg">
                    Open Source
                </span>
                <p className="text-gray-500">
                    Empower your projects with the freedom to explore, adapt, and innovate. Our components are fully open source, ensuring transparency and flexibility at every step.
                </p>
            </div>
            <div className="rounded-lg h-[250px] border w-[350px] flex flex-col gap-2 bg-green-600 justify-center p-4 px-6 animate-float" style={{ animationDelay: '0.2s' }}>
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-green-600">
                    <FaLaptopCode size={22} />
                </div>
                <span className="text-white font-bold text-lg">
                    100% customizable
                </span>
                <p className="text-gray-100">
                    Tailor every detail to your vision. With our fully customizable components, you have the power to create exactly what you need, down to the last pixel.
                </p>
            </div>
            <div className="rounded-lg h-[250px] border w-[350px] flex flex-col gap-2 bg-white justify-center p-4 px-6 animate-float" style={{ animationDelay: '0.3s' }}>
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white">
                    <FaLaptopCode size={22} />
                </div>
                <span className="text-green-600 font-bold text-lg">
                    Totally free
                </span>
                <p className="text-gray-500">
                    Our components are completely free, allowing you to build and grow without limitations.
                </p>
            </div>

        </div>
    )
}