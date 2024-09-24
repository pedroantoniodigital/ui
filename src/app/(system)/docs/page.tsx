'use client'

/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/navigation";
import { GoChevronRight } from "react-icons/go";

export default function Introduction() {
    const { push } = useRouter()

    return (
        <main className="w-full h-fit px-20 flex flex-col gap-2 py-4">
            <section className="flex gap-1 text-sm items-center text-gray-500">
                <span>Docs</span>
                <GoChevronRight />
                <span className="text-black">Home</span>
            </section>
            <h3 className="text-3xl font-bold">
                What is V UI?
            </h3>
            <h1 className="text-sm font-light">
                Let’s dive into the idea!
            </h1>
            <span className="text-sm mt-2">
                V UI is a collection of components, crafted with love by yours truly (yes, the amazing creator you’ll meet). 
                This open-source project features components I originally made for my own use, but thought, <b>"Hey, why not share them with the world?"</b>
            </span>
            <span className="text-sm mt-2">
                I also wanted to highlight that there are <b>talented Brazilian developers</b> who are passionate about this kind of design and concept. This site showcases a bit of our <b>work</b> and <b>creativity</b>!
            </span>
            <h3 className="text-3xl font-bold mt-4">
                But... why though?
            </h3>
            <span className="text-sm mt-2">
                Well, I believe that even though I’m more of a back-end kind of person, <b>sharing my ideas and design concepts could help me (and maybe you!) level up in future projects</b>. Plus, chatting with the community and exchanging ideas is always a <b>good time!</b>
            </span>
            <span className="text-sm mt-5">
                So, setting aside this introduction, <b onClick={() => push('/docs/getting-started/creator')} className="underline cursor-pointer">click here</b> to understand more about this brazillian happy developer.
            </span>
        </main>
    );
}
