import ConcernSection from "@/components/contact/ConcernSection"
import ProductIntro from "@/components/ProductIntro"
import MenStocking from "@/components/products/stockings/MenStocking"
import WomenStocking from "@/components/products/stockings/WomenStocking"
import Head from "next/head"

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
                    Compression stockings are specially designed socks or hosiery that apply gentle pressure to your legs and ankles. They help improve blood flow, reduce swelling, and prevent issues like varicose veins, deep vein thrombosis (DVT), and leg fatigue. Commonly used for medical, athletic, or everyday purposes, compression stockings come in different pressure levels and styles to meet individual needs.                
                </p>
            )
    }

    const title = `Compression Stocking | ${process.env.NEXT_PUBLIC_COMPANY}`;
    const description =`Compression stockings are tight-fitting socks that give your legs a gentle squeeze. They help with blood flow, reduce swelling, and can keep your legs from feeling tired or achy. People wear them for medical reasons, during workouts, or just to stay comfy — and they come in different styles and pressure levels depending on what you need.`;
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={description} />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={process.env.URL} />
                <meta property="og:image" content={process.env.URL + ""} />
            </Head>
            <main>
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

                <section className="bg-gray-900 p-12 flex flex-col gap-30">
                    <WomenStocking />
                    <MenStocking />
                </section>

                {/* <section className="bg-[url('/images/compressions/sport-compression.png')] bg-contain p-4 md:p-32">
                    <div className="m-auto md:max-w-[1000px] m-auto bg-zinc-900/90 p-8 md:p-12 rounded-xl">
                        <h2 className="text-6xl font-bold break-words text-center md:text-right">Sports Compression</h2><br/><br/>
                        <div className="text-lg max-w-150 ml-auto text-center md:text-right">The Compression Sock Training sports stocking has special functional zones with light compression to provide protection in stop-and-go sports. These are sports involving rapid turning and jumping movements, like football, basketball or tennis. The stocking’s taping zone helps to create a greater feeling of stability in the ankle, while its muscle-toning zone specifically stimulates the calf muscles during movement.</div>
                    </div>
                </section> */}

                <ConcernSection 
                    statement="Feel free to ask us which stockings are best suited for your needs. ~ Alberta Team"
                />            
             </main>
        </div>
    )
}