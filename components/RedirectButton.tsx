import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';

interface Props {
    label: string;
    href: string
    className?:string
}
export default function RedirectButton(props : Props) {

    const { label, href ,className } = props
    return (
        <Link href={href}>
            <button className={`transition-all cursor-pointer ${className} bg-orange-500 text-white rounded-full px-8 py-2 w-fit flex items-center gap-2`}>
                <p>{label} </p>
                <ArrowForwardIosIcon style={{ fontSize: '16px' }}/>
            </button>
        </Link>

    )
}