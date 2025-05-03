import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export default function ContactInfo() {

    const iconFontSize = "2rem"
    const wrapperClass = "text-zinc-600 flex items-center gap-8 text-md"

    return (
        <div className="flex flex-col gap-6 w-fit">
            <h2 className="text-zinc-700 text-3xl font-semibold tracking-wider">Contact Us</h2>

            <div id="address-wrapper" className={wrapperClass}>
                <HomeWorkIcon style={{ fontSize: iconFontSize }} className='text-orange-500'/>
                <p>700-1816 CROWNCHILD TRAIL NW SUITE 731, CALGARY, ALBERTA, T2M3Y7</p>
            </div>

            {/* <div id="phone-wrapper" className={wrapperClass}>
                <PhoneEnabledIcon style={{ fontSize: iconFontSize }} className='text-orange-500'/>
                <p>2026951224</p>
            </div> */}

            
            <div id="email-wrapper" className={wrapperClass}>
                <EmailIcon style={{ fontSize: iconFontSize }} className='text-orange-500'/>
                <p>vitalcsupplies@gmail.com</p>
            </div>
{/* 
            <div id="schedule-wrapper" className={wrapperClass}>
                <AccessTimeFilledIcon style={{ fontSize: iconFontSize }} className='text-orange-500'/>
                <div className='leading-9'>
                    Tue - Fri: 11am to 6pm <br/>
                    Sat: 11am to 4pm <br/>
                    Sun - Mon: CLOSED <br/>
                </div>
            </div> */}
        </div>
    )
}