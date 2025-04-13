import NavHeader from "./header/NavHeader";
import ShowMenuButton from "./header/ShowMenuButton";

export default function Header() {  

  return (
    <div className="bg-black/50 w-full absolute p-4 top-0 z-10">
      <div className="flex items-center justify-between w-full m-auto md:w-8/12">
        <img src="logos/ca-logo.png" width={50} />
        <div className="">
          <NavHeader />
          <ShowMenuButton />
        </div>
      </div>

    </div>
  );
}
