export interface RouteType {
    id: string | number;
    name: string;
    href: string;
    subRoutes: RouteType[]
}