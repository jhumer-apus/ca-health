import { RouteType } from "@/types/route";
import Link from "next/link";

interface Props {
    route: RouteType
}
export default function SubMenuItem(props: Props) {

    const { route } = props 
    return (
        <li>
            <Link href={route.href}>
                <div className="pl-8 py-4">
                    {route.name}
                </div>
            </Link>
        </li>
    )
}