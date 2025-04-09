import DropDownMenu from "@/components/navigation/DropDownMenu";
import { useRoutes } from "@/hooks/routes";
import { RouteType } from "@/types/route";
import Link from "next/link";


export default function NavHeader() {
    const {routes} = useRoutes()
    
    return (
        <nav>
            <ul className="flex gap-4">
                {routes.map((route, index) => (
                    <li key={index}>
                        <Link href={route.href}>
                            <div className="text-white text-md">

                                {route.subRoutes.length > 0 
                                    ?   (
                                            <DropDownMenu route={route} />
                                        ) 
                                    :   (
                                            <div>{route.name}</div>
                                        )
                                }
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}