import { Navbar } from "@/app/components/navbar";
import { DocsSidebar } from "@/app/modules/docs/sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-[100dvh] w-full bg-white">
      {/* <Navbar /> */}
      <div className=" w-full h-full px-72 flex mt-12 justify-center">
        <div className=" w-1/5 mt-16 ">
           <DocsSidebar />
        </div>
        <div className="w-4/5 mt-16">
            {children}
        </div>
      </div>
    </div>
  );
}
