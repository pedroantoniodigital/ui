import { Navbar } from "@/app/components/navbar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-[100dvh] w-full bg-white">
      <Navbar />
      <div className=" w-full h-full px-24 flex mt-12 ">
        <div className=" w-1/4 border mt-16">
            eae
        </div>
        <div className="w-3/4">
            {children}
        </div>
      </div>
    </div>
  );
}
