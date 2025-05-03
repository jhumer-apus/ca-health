import { products } from "@/data/product";
import Head from "next/head";
import Link from "next/link";

export default function Products() {
    return (
        <div>
            <main>
                <section className="bg-[url('/images/welcome.png')] bg-cover bg-center h-96 flex">
                    <div id="left" className="w-full md:w-1/2 relative">
                        <div className="bg-black/70 max-w-[500px] text-5xl font-bold p-4 absolute bottom-0 md:right-0 w-full">
                            Our Products
                        </div>
                    </div>
                </section>
                
                <section className="bg-white p-12">
                    <div className="m-auto w-fit flex flex-col md:flex-row flex-wrap gap-6">
                        {products.map((prod,index:number) => (
                            <div key={index} className="flex flex-col gap-6 w-84">
                                <Link href={prod.href}>
                                    <button className="text-white bg-stone-700 p-2 w-full font-bold text-xl hover:bg-orange-500 cursor-pointer">{prod.name}</button>
                                </Link>
                                <div className="w-full h-64 shadow-2xl overflow-hidden">
                                    <img 
                                        src={prod.imagePath}
                                        alt={prod.name}
                                        className="object-contain max-h-64 m-auto"
                                    />
                                </div>
                                <div className="text-slate-500">
                                    {prod.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}