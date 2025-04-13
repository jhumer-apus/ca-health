import { PropsWithChildren } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="bg-slate-900/10 flex">
      <Sidebar/>
      <div className="w-full">
        <Header />
        {children}
      </div>
    </div>
  );
}
