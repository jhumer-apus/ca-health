import { useRouter } from "next/router";
import NavHeader from "./header/NavHeader";
import ShowMenuButton from "./header/ShowMenuButton";

export default function Header() {  
  const router = useRouter()

  const isHome = router.pathname == "/"
  return (
    <header className={`w-full ${isHome ? "absolute bg-black/70 ": "bg-zinc-900 "} p-4 top-0 z-10`}>
      <div className="flex items-center justify-between w-full m-auto md:w-8/12">
        <img src={process.env.NEXT_PUBLIC_LOGO} width={50} />
        <div className="">
          <NavHeader />
          <ShowMenuButton />
        </div>
      </div>
    </header>
  );
}
