import ContactUsButton from "@/components/ContactUsButton"
import ProductIntro from "@/components/ProductIntro"

export default function CompressionStockings() {

    const compressionStockings = [
        {
            name: "Thigh-High",
            imagePath: "/images/compressions/thigh-high.png"
        },
        {
            name: "Knee-High",
            imagePath: "/images/compressions/knee-high.png"
        },
        {
            name: "PantyHose",
            imagePath: "/images/compressions/pantyhose.png"
        }
    ]

    const prodIntro = {
        name: "Compression Stockings",
        coverImagePath: "/images/compression2.png",
        intro: (
                <p className="text-lg text-gray-400 text-center">
                   Gradient compression garments are used to increase blood circulation and reduce swelling in those with circulation disorders and can also assist in athletic performance. Gradient compression socks, for example, apply the greatest amount of pressure near the ankle and decreases as it extends up the calf, stopping under the knee cap. 
                </p>
            )
    }
    return (
        <div>
            <ProductIntro name={prodIntro.name} intro={prodIntro.intro} coverImagePath={prodIntro.coverImagePath} />
            <section className="bg-white py-20 px-8">
                <div className="w-fit m-auto flex flex-col md:flex-row flex-wrap gap-12">
                    {compressionStockings.map((stock,index:number) => (
                        <div key={index} className="w-92 shadow-2xl flex flex-col gap-8">
                            <div className="bg-stone-800 font-semibold text-3xl shadow-2xl text-center whitespace-nowrap py-2">
                                {stock.name}
                            </div>
                            <img src={stock.imagePath} className=" w-full h-full "/>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[url('/images/compressions/sport-compression.png')] bg-contain p-4 md:p-32">
                <div className="m-auto md:max-w-[1000px] m-auto bg-zinc-900/90 p-8 md:p-12 rounded-xl">
                    <h2 className="text-6xl font-bold break-words text-center md:text-right">Sports Compression</h2><br/><br/>
                    <div className="text-lg max-w-150 ml-auto text-center md:text-right">The Compression Sock Training sports stocking has special functional zones with light compression to provide protection in stop-and-go sports. These are sports involving rapid turning and jumping movements, like football, basketball or tennis. The stocking’s taping zone helps to create a greater feeling of stability in the ankle, while its muscle-toning zone specifically stimulates the calf muscles during movement.</div>
                </div>
            </section>

            <section className="p-8">
                <div className="max-w-[1300px] m-auto py-12 flex flex-col md:flex-row justify-between gap-8 itemx-center">
                    <ContactUsButton />
                    <p className="text-black text-2xl italic">Please ask us which stockings is best suited for your needs ~ Tandem Team</p>
                </div>
            </section>
        </div>
    )
}