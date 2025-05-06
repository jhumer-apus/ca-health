import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-zinc-800 p-12">
            <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-40 w-fit m-auto">
                <div id="email-wrapper">
                    <div className="flex items-center gap-4">
                        <div className='rounded-full overflow-hidden bg-red-100'>
                            <img src={process.env.NEXT_PUBLIC_LOGO} width={60}/>
                        </div>
                        <p className="text-4xl font-bold break-words whitespace-wrap">{process.env.NEXT_PUBLIC_COMPANY}</p>
                    </div>
                    <Link href="/contact">
                        <button className="transition-all cursor-pointer px-4 py-2 bg-gray-600 hover:bg-orange-500 rounded-xl my-4 flex items-center gap-2">
                            <ChatBubbleIcon />
                            <p>Email Us</p>
                        </button>
                    </Link>
                </div>

                <div id="location-info-wrapper">
                    <p className="text-white text-3xl font-bold">Location & Info</p>
                    <p className='text-slate-300 max-w-96 break-words'>
                        A: 700-1816 CROWNCHILD TRAIL NW SUITE 731, CALGARY, ALBERTA, T2M3Y7<br/>
                        {/* P: (403) 452-9592<br/> */}
                        E: vitalcsupplies@gmail.com<br/>
                    </p>
                </div>

                <div id="location-info-wrapper">
                    <p className="text-white text-3xl font-bold">Hours</p>
                    <p className='text-slate-300'>
                        Tue – Fri: 11am to 6pm<br/>
                        Sat: 11am to 4pm<br/>
                        Sun – Mon: CLOSED<br/>
                    </p>
                </div>

                <div id="products-info-wrapper">
                    <p className="text-white text-3xl font-bold">Products</p>
                    <p className='text-slate-300'>
                        Orthopedic Bracing<br/>
                        Compression Stockings<br/>
                        TENS Devices<br/>
                    </p>
                </div>
            </div>
        </footer>
    )
}