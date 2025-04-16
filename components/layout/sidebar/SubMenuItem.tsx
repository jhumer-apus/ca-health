import Link from "next/link";

interface Props {
    route: any
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