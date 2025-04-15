import ProductIntro from "@/components/ProductIntro"

export default function OrthopedicBracing() {

    const braces = [
        {
            name: "Knee Brace",
            imagePath: "/images/braces/knee-brace.png"
        },
        {
            name: "Back Brace",
            imagePath: "/images/braces/back-brace.png"
        },
        {
            name: "Ankle Brace",
            imagePath: "/images/braces/ankle-brace.png"
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
                    <p className="text-center text-zinc-600 text-lg">With our medical aids we help people regain their mobility and wellbeing. We demand high-quality products: Braces, orthoses, medical compression stockings and orthopedic orthoses from Bauerfeind are all “made in Germany”</p>
                </div>
                <div className="w-fit m-auto flex flex-col md:flex-row flex-wrap gap-12">
                    {braces.map((brace,index:number) => (
                        <div key={index} className="size-92 bg-red-100 relative shadow-2xl">
                            <img src={brace.imagePath} className=" w-full h-full "/>
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
                        <div className="text-center md:text-left w-80 text-zinc-400 leading-loose">Bauerfeind has the right sport braces, supports and compression products to keep you in the game and improve your performance. True medical-grade compression by Bauerfeind helps improve circulation to boost oxygenating blood flow and remove inflammation. This can help reduce post-exercise soreness and improve recovery times. Find the right brace for your activity below.</div>
                        <img src={process.env.NEXT_PUBLIC_LOGO} className="size-25"/>
                        <div className="flex flex-col gap-12 items-center md:items-start">
                            <p className="text-4xl font-semibold">
                                “Freedom to<br/>
                                To live life”
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