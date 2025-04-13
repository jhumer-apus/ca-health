import Link from "next/link";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSidebarStore } from "@/store/navigation/sidebarStore";
import { useRouter } from "next/router";


interface Props {
    route: any;
}
export default function MenuItem(props:Props){

    const { currentMenuId, setCurrentMenuId } = useSidebarStore((state) => state)
    const router = useRouter()


    const { route } = props

    const showSubMenu = (route:any) =>{
        if(route.id == currentMenuId) {
            setCurrentMenuId("")
        } else {
            setCurrentMenuId(route.id)
        }
    }

    const isActive = (route:any) => {
        return router.pathname == route.href
    }
    return (
        <li 
            className={`flex items-center justify-between border-b border-slate-200 cursor-pointer ${isActive(route)? "bg-slate-200": "" }`} 
        >
            <Link href={route.href}>
                <div className="p-4">
                    {route.name}
                </div>
            </Link>
            {route.subRoutes.length > 0 && (
                <div id="icon-wrapper" className="p-4" onClick={() => showSubMenu(route)}>
                    {currentMenuId == route.id? <RemoveIcon/>: <AddIcon />}
                </div>
            )}
        </li>
    )
}