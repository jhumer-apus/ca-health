import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
export default function ContactUsButton() {
    return (
        <div className='shadow-2xl w-fit'>
            <button className="bg-orange-800 font-semibold flex items-center gap-2 py-3 px-6 rounded-md cursor-pointer">
                <ChatBubbleOutlineIcon />
                <p>Contact us</p>
            </button>
        </div>
    )
}