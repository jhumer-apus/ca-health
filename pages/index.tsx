import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="text-white">
      <main className="">

        <section className="w-screen h-[650px] overflow-hidden">
          <iframe
            className="w-full h-full transform scale-170"
            allowFullScreen
            frameBorder={0}
            src="https://www.youtube.com/embed/bHbglNZeykA?start=44&end=60&loop=1&playlist=bHbglNZeykA&autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&playsinline=1&enablejsapi=1" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
          <div className="absolute inset-0 flex flex-col gap-8 items-center justify-center z-10">
            <div className="p-4 rounded flex flex-col gap-8">
              <p className="text-white text-8xl font-semibold">Tandem Health</p>
              <p className="text-center text-orange-500 text-2xl">"Freedom to live life"</p>
            </div>
            <button className="bg-gray-900/50 transition-all px-8 py-4 font-semibold border tracking-[3] border-white rounded-lg hover:cursor-pointer hover:bg-orange-400 text-2xl">BOOK YOUR APPOINTMENT</button>
          </div>
        </section>

        <section className="bg-white text-black flex justify-around">
          <div className="flex flex-col gap-8 w-[500px]">
            <p className="text-slate-800 text-6xl font-semibold">Welcome!</p>
            <p className="text-slate-400">We are a medical company that helps your life to be comfortable through the use of compression and ortheopedic equipment. </p>
            <button className="bg-orange-500 text-white rounded-full px-12 py-2 w-fit">Get Started</button>
          </div>
          <div>
            image
          </div>
        </section>
      </main>
    </div>
  );
}
