



import Navigation from "@/src/components/layout/SideBar";
import Model from "@/src/components/lynko/Model-01";

export default function Home() {
  return (
    <>
    <Navigation/>
    <main className="h-screen w-full items-center justify-center">
        <Model/>
    </main>
    </>
  );
}
