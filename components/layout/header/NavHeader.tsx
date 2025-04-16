import DropDownMenu from "@/components/navigation/DropDownMenu";
import { useRoutes } from "@/hooks/routes";
import Link from "next/link";


export default function NavHeader() {
    const {routes} = useRoutes()
    
    return (
        <nav className="hidden md:block">
            <ul className="flex gap-6">
                {routes.map((route, index) => (
                    <li key={index}>
                        {route.subRoutes.length > 0 ? 
                        (
                            <DropDownMenu route={route} />
                        ) :
                        (
                            <Link href={route.href}>
                                <div className="text-white text-md hover:text-orange-500">{route.name}</div>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}