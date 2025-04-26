import Link from "next/link";

interface Props {
    imagePath: string;
    name: string;
    href: string;
    className? : string
}

export default function ProductCard(props: Props) {
    const { imagePath, name, href, className } = props
    console.log(className)
    return (
        <div className="relative size-92 shadow-2xl">

            <img src={imagePath}  className={`size-full ${className ?? ""}`}/>
            <Link href={href}>
                <button className="cursor-pointer absolute bottom-6 bg-zinc-800 hover:bg-zinc-700 transform left-1/2 -translate-x-1/2 text-white text-2xl py-4 px-8 whitespace-nowrap font-bold">
                    {name}
                </button>
            </Link>
        </div>
    )
}