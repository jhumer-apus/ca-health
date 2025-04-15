import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

export default function Footer() {
    console.log(process.env.NEXT_PUBLIC_LOGO)
    return (
        <footer className="bg-zinc-800 p-12">
            <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-40 w-fit m-auto">
                <div id="email-wrapper">
                    <div className="flex items-center gap-4">
                        <img src={process.env.NEXT_PUBLIC_LOGO} width={60}/>
                        <p className="text-4xl font-bold break-words">Tandem<br />Health</p>
                    </div>
                    <button className="transition-all cursor-pointer px-4 py-2 bg-gray-600 hover:bg-orange-500 rounded-xl my-4 flex items-center gap-2">
                        <ChatBubbleIcon />
                        <p>Email Us</p>
                    </button>
                </div>

                <div id="location-info-wrapper">
                    <p className="text-white text-3xl font-bold">Location & Info</p>
                    <p className='text-slate-300'>
                        3601 19 ST NE, Unit 1 <br/>
                        Calgary, AB<br/>
                        T2E 6S8<br/>
                        P: (403) 452-9592<br/>
                        E: info@tandemhealth.ca<br/>
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
                        Contact Us<br/>
                    </p>
                </div>
            </div>
        </footer>
    )
}