import { Geist, Geist_Mono } from "next/font/google";
import RedirectButton from "@/components/RedirectButton";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const products = [
    {
      name: "Custom Bracing",
      imagePath: "/images/bracing.png",
    },
    {
      name: "TENS Devices",
      imagePath: "/images/tens.png",
    },
    {
      name: "Compression",
      imagePath: "/images/compression.png",
    }
  ]
  return (
    <div className="text-white">
      <main className="">
        <section className="w-full h-[650px] overflow-hidden">
          <iframe
            className="w-full h-full transform scale-170"
            allowFullScreen
            frameBorder={0}
            src="https://www.youtube.com/embed/bHbglNZeykA?start=44&end=60&loop=1&playlist=bHbglNZeykA&autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&playsinline=1&enablejsapi=1" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
          <div className="absolute inset-0 flex flex-col gap-8 items-center justify-center">
            <div className="p-4 rounded flex flex-col gap-8">
              <p className="text-white text-8xl font-semibold text-center">Tandem Health</p>
              <p className="text-center text-orange-500 text-2xl">"Freedom to live life"</p>
            </div>
            <button className="bg-gray-700/30 transition-all px-8 py-4 font-semibold border tracking-[2] border-white rounded-lg hover:cursor-pointer hover:bg-orange-400 text-2xl">BOOK YOUR APPOINTMENT</button>
          </div>
        </section>

        <section className="bg-white text-black flex flex-col md:flex-row md:justify-around gap-8 px-4 py-8 md:py-40">
          <div id="welcome-wrapper-text" className="flex flex-col gap-8 w-full md:w-1/2">
            <div className="m-auto md:w-[500px]">
              <p className="text-slate-800 text-6xl font-semibold text-center md:text-left whitespace-normal">Welcome!</p><br></br>
              <p className="text-slate-400 text-center md:text-left whitespace-normal">We are a medical company that helps your life to be comfortable through the use of compression and ortheopedic equipment.</p><br></br>
              <RedirectButton label="Get Started" href="" className="hover:bg-gray-500"/>
            </div>
          </div>
          <div id="welcome-wrapper-image" className="w-full md:w-1/2">
            <img src="/images/welcome.png" className="w-full"/>
          </div>
        </section>

        <section className="bg-[#2d2d2d] px-8 py-40 overflow-hidden">
          <div className="m-auto flex flex-col md:flex-row w-fit gap-8">
            <div className="text-left w-full md:w-[600px] flex flex-col gap-8">
              <p className="text-6xl font-bold ">Our Featured Product</p>
              <p className="text-lg">“Whether you experience pain in the knees, back, hands, elbows or shoulders, Bauerfeind Train braces are designed to restore mobility and improve performance. They are made from an anatomically knitted breathable fabric with visco-elastic inserts. As the join moves, they provide a therapeutic massage and stability. This stimulates the circulation and promotes the healing process.” – Bauerfeind </p>
              <RedirectButton label="Get Fitted" href="" className="hover:bg-black"/>
            </div>
            <div id="box" className="hidden md:block w-[600px] h-[400px] bg-[#2d2d2d] shadow-[0_0_60px_4px_rgba(0,255,255,.8)]"></div>
          </div>
        </section>

        <section className="bg-white py-12 text-zinc-700">
          <div className="text-center m-auto max-w-[850px]">
            <p className="text-5xl font-bold">Our Products</p><br></br>
            <p>We offer a wide range of medical products from custom orthotics, TENS units, compression stockings, and custom fitted braces. All to offer our clients the best possible support. </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-fit m-auto mt-10">
            {products.map(prod => (
              <ProductCard imagePath={prod.imagePath} name={prod.name} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
