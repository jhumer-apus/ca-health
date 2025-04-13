import { useSidebarStore } from '@/store/navigation/sidebarStore';
import MenuIcon from '@mui/icons-material/Menu';


export default function ShowMenuButton() {
    const { setIsShow } = useSidebarStore((state) => state) 

    return (
        <div className="flex gap-2 md:hidden" onClick={() => setIsShow(true)}>
            <MenuIcon />
            <p>Menu</p>
        </div>
    )
}