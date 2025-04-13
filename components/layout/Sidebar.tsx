import { useRoutes } from "@/hooks/routes"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Fragment, useRef, useState } from "react";
import MenuItem from "./sidebar/MenuItem";
import SubMenuItem from "./sidebar/SubMenuItem";
import { useSidebarStore } from "@/store/navigation/sidebarStore";

export default function Sidebar() {
    const { routes } = useRoutes()
    const { currentMenuId, isShow, setIsShow } = useSidebarStore((state) => state) 
    
    const backDropRef = useRef(null)

    const handleBackDropRef = (e:any) => {
        if(backDropRef.current == e.target) {
            setIsShow(false)
        }
    }
    return (
        <div 
            ref={backDropRef}
            className={`transition-all fixed top-0 left-0 bg-slate-900/50 md:hidden z-20 h-full overflow-hidden ${isShow? "w-full": "w-0"}`}
            onClick={handleBackDropRef}
        >
            <nav className="w-72 h-full bg-white text-black">
                <div className="flex items-center gap-2 p-4 w-full bg-slate-100 cursor-pointer" onClick={() => setIsShow(false)}>
                    <HighlightOffIcon />
                    <p>CLOSE MENU</p>
                </div>
                <ul>
                    {routes.map((route, index:number) => (
                        <Fragment key={index}>
                            <MenuItem 
                                route={route} 
                            />
                            {route.subRoutes.length > 0 && (
                                <ul className={`transition-all overflow-hidden ${currentMenuId == route.id ? "max-h-[2000px]" : "max-h-0"} bg-slate-100`}>
                                    {route.subRoutes.map((subRoute,index:number) => (
                                        <SubMenuItem 
                                            key={index} 
                                            route={subRoute} 
                                        />
                                    ))}
                                </ul>
                            )}
                        </Fragment>
                    ))}
                </ul>
            </nav>
        </div>
    )
}