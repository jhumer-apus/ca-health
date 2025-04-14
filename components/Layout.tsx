import { PropsWithChildren } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Footer from "./layout/Footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="bg-slate-900/10 flex">
      <Sidebar/>
      <div className="w-full">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
