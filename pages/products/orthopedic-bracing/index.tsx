import ProductIntro from "@/components/ProductIntro"

export default function OrthopedicBracing() {

    const braces = [
        {
            name: "Knee Brace",
            imagePath: "/images/braces/knee-brace2.png"
        },
        {
            name: "Back Brace",
            imagePath: "/images/braces/back-brace2.png"
        },
        // {
        //     name: "Ankle Brace",
        //     imagePath: "/images/braces/ankle-brace.png"
        // },
        {
            name: "Wrist Brace",
            imagePath: "/images/braces/wrist-brace.png"
        },
        {
            name: "Shoulder Brace",
            imagePath: "/images/braces/shoulder-brace.png"
        }
    ]

    const prodIntro = {
        name: "Orthopedic Bracing",
        coverImagePath: "/images/bracing.png",
        intro: (
                <p className="text-lg text-gray-400 text-center">
                    “Whether you experience pain in the knees, back, hands, elbows or shoulders, Bauerfeind Train® braces are designed to restore mobility and improve performance.<br /><br/>

                    They are made from an anatomically knitted breathable fabric with visco-elastic inserts. As the joint moves, they provide a therapeutic massage and stability. This stimulates the circulation and promotes the healing process.” – Bauerfeind
                </p>
            )
    }
    return (
        <div>
            <ProductIntro name={prodIntro.name} intro={prodIntro.intro} coverImagePath={prodIntro.coverImagePath} />
            <section className="bg-white py-20">
                <div className="md:max-w-[1000px] m-auto p-8">
                    <p className="text-center text-zinc-600 text-4xl font-semibold">Bauerfeind Braces</p><br/>
                    <p className="text-center text-zinc-600 text-lg">Our medical aids support people in restoring their mobility and overall wellbeing. We are committed to high-quality products — all of our braces, orthoses, medical compression stockings, and orthopedic supports from Bauerfeind are proudly made in Germany.</p>
                </div>
                <div className="md:max-w-[1000px] m-auto flex flex-col md:flex-row flex-wrap gap-12">
                    {braces.map((brace,index:number) => (
                        <div key={index} className="size-92 bg-white relative shadow-2xl">
                            <img src={brace.imagePath} className="object-contain h-full m-auto"/>
                            <div className="absolute bg-stone-800 font-semibold text-3xl shadow-2xl w-64 text-center whitespace-nowrap  py-2 bottom-8 left-1/2 right-1/2 transform -translate-x-1/2 z-10">
                                {brace.name}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[url('/images/building.png')] bg-center h-fit">
                <div className="bg-zinc-900/90 w-full h-full p-20">
                    <div className="w-fit m-auto flex flex-col md:flex-row gap-8 md:gap-34 items-center">
                        <div className="text-center md:text-left w-80 text-zinc-400 leading-loose">Bauerfeind offers the perfect sports braces, supports, and compression products to help you stay active and enhance your performance. Their true medical-grade compression promotes better circulation, increasing oxygen-rich blood flow and reducing inflammation. This can lessen post-workout soreness and speed up recovery. Explore below to find the right brace for your sport.</div>
                        <div className="size-fit rounded-full overflow-hidden">
                            <img src={process.env.NEXT_PUBLIC_LOGO} className="size-25"/>
                        </div>
                        <div className="flex flex-col gap-12 items-center md:items-start">
                            <p className="text-4xl font-semibold">
                                {process.env.NEXT_PUBLIC_MOTTO}
                            </p>
                            <hr  className="w-25 font-bold bg-white h-1 "/>
                            <p className="text-xl italic">{process.env.NEXT_PUBLIC_COMPANY}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}