import NavHeader from "./header/NavHeader";

export default function Header() {

  return (
    <div className="bg-black/50 w-full flex items-center justify-around py-2 fixed top-0 z-10">
      {/* Logo or other content */}
      <img src="logos/ca-logo.png" width={50} />
      <NavHeader />
    </div>
  );
}
