interface Props {
    imagePath: string;
    name: string
}

export default function ProductCard(props: Props) {
    const { imagePath, name } = props
    return (
        <div className="relative size-92">
            <img src={imagePath} />
            <button className="cursor-pointer absolute bottom-6 bg-zinc-800 hover:bg-zinc-700 transform left-1/2 -translate-x-1/2 text-white text-2xl py-4 px-8 whitespace-nowrap font-bold">
                {name}
            </button>
        </div>
    )
}