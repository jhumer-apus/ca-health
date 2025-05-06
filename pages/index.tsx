import RedirectButton from "@/components/RedirectButton";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import Head from "next/head";


export default function Home() {
  const products = [
    {
      name: "Custom Bracing",
      imagePath: "/images/bracing.png",
      href:"/products/orthopedic-bracing"
    },
    {
      name: "TENS Devices",
      imagePath: "/images/tens/back-tens.png",
      href:"products/tens",
      className:"rotate-270"
    },
    {
      name: "Compression",
      imagePath: "/images/compression.png",
      href:"/products/compression-stockings"
    }
  ]

  const title = "Vital Care Supplies Inc.";
  const description ="Trusted source for quality compression stockings, orthopedic supports, and medical wellness products in Canada.";

  return (
    <div className="text-white">
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
      <main className="">
        <section className="w-full h-[650px] overflow-hidden bg-black">
          <video width="full" autoPlay loop muted className="transform -translate-y-1/5 hidden md:block" >
            <source src="video/running.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex flex-col gap-8 items-center justify-center p-8">
            <div className="p-4 rounded flex flex-col gap-8">
              <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center">{process.env.NEXT_PUBLIC_COMPANY}</p>
              <p className="text-center text-orange-500 text-2xl font-semibold">{`"${process.env.NEXT_PUBLIC_MOTTO}"`}</p>
            </div>
            <Link href="/contact">
              <button className="bg-gray-700/30 transition-all px-8 py-4 font-semibold border tracking-[2] border-white rounded-lg hover:cursor-pointer hover:bg-orange-400 text-xl md:text-2xl">BOOK YOUR APPOINTMENT</button>
            </Link>
          </div>
        </section>

        <section className="bg-white text-black flex flex-col md:flex-row md:justify-around gap-8 px-4 py-8 md:py-40">
          <div id="welcome-wrapper-text" className="flex flex-col gap-8 w-full md:w-1/2">
            <div className="m-auto md:w-[500px]">
              <p className="text-slate-800 text-6xl font-semibold text-center md:text-left whitespace-normal">Welcome!</p><br></br>
              <p className="text-slate-400 text-center md:text-left whitespace-normal">We are a medical company dedicated to making your life more comfortable with the use of compression and orthopedic equipment.</p><br></br>
              <RedirectButton label="Get Started" href="/contact" className="hover:bg-gray-500 m-auto md:ml-0"/>
            </div>
          </div>
          <div id="welcome-wrapper-image" className="w-full md:w-1/2">
            <img src="/images/welcome.png" className="w-full rounded-4xl"/>
          </div>
        </section>

        <section className="bg-[#2d2d2d] px-8 py-40 overflow-hidden">
          <div className="m-auto flex flex-col md:flex-row w-fit gap-8">
            <div className="text-left w-full md:w-[600px] flex flex-col gap-8">
              <p className="text-6xl font-bold ">Our Featured Product</p>
              <p className="text-lg">“Whether you experience pain in the knees, back, hands, elbows or shoulders, Bauerfeind Train braces are designed to restore mobility and improve performance. They are made from an anatomically knitted breathable fabric with visco-elastic inserts. As the join moves, they provide a therapeutic massage and stability. This stimulates the circulation and promotes the healing process.” – Bauerfeind </p>
              <RedirectButton label="Get Fitted" href="/contact" className="hover:bg-black "/>
            </div>
            <div id="box" className="hidden md:block w-[600px] h-[400px] bg-[#2d2d2d] shadow-[0_0_60px_4px_rgba(0,255,255,.8)]">
            </div>
          </div>
        </section>

        <section className="bg-white py-12 text-zinc-700">
          <div className="text-center m-auto max-w-[850px]">
            <p className="text-5xl font-bold">Our Products</p><br></br>
            <p>We provide a broad selection of medical products, including custom orthotics, TENS units, compression stockings, and custom-fitted braces — all designed to deliver the highest level of support for our clients.</p>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-4 w-fit m-auto mt-10">
            {products.map((prod, index:number) => (
              <ProductCard key={index} imagePath={prod.imagePath} name={prod.name} href={prod.href} className={prod.className}/>
            ))}
          </div>
        </section>

        <section className="bg-[url('/images/together.png')] bg-cover bg-center flex justify-end py-12 px-4">
            <div className="md:w-1/2 py-12 px-4">
              <div className="bg-white p-12 text-black h-full w-full md:w-fit md:my-12">
                <p className="text-4xl font-semibold">Our News & Blog</p>
                <hr className="bg-slate-400 my-8 w-32 h-2" />
                <div className="flex flex-col gap-6 text-xl text-slate-500">
                  <p>The holidays are around the corner, here are our holiday hours!  🎄❄️☃️</p>
                  <p>December 24, 2025: 11am – 4pm</p>
                  <p>December 25 & 26, 2025: Closed</p>
                  <p>December 27 – 31, 2025: Regular Hours</p>
                  <p>Happy Holidays!</p>
                </div>
                <RedirectButton label="Book Now" href="/contact" className="mt-20 hover:bg-black"/>
              </div>
            </div>
        </section>
      </main>
    </div>
  );
}
