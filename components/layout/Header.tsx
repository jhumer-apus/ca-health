import NavHeader from "./header/NavHeader";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {

  return (
    <div className="bg-black/50 w-full absolute p-4 top-0 z-10">
      <div className="flex items-center justify-around m-auto w-full md:w-[14/15]">
        <img src="logos/ca-logo.png" width={50} />
        <div className="">
          <NavHeader />
          <div className="flex gap-2 md:hidden">
            <MenuIcon />
            <p>Menu</p>
          </div>
        </div>
      </div>

    </div>
  );
}
