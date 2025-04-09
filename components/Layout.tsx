import { PropsWithChildren } from "react";
import Header from "./layout/Header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen bg-slate-900/10">
      <Header />
      {children}
    </div>
  );
}
