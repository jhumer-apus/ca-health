export const useRoutes = () => {
    const routes = [
        { 
            id: "home", 
            name: "Home", 
            href: "/",
            subRoutes: []
        },
        { 
            id: "products", 
            name: "Products", 
            href: "/products",
            subRoutes: [
                { 
                    id: "orthopedic-bracing", 
                    name: "Orthopedic Bracing", 
                    href: "/products/orthopedic-bracing",
                    subRoutes: []
                },
                { 
                    id: "compression-stocking", 
                    name: "Compression Stocking", 
                    href: "/products/compression-stockings",
                    subRoutes: []
                },
                { 
                    id: "tens", 
                    name: "TENS", 
                    href: "/products/tens",
                    subRoutes: []
                },
            ]
        },
        { 
            id: "contact", 
            name: "Contact", 
            href: "",
            subRoutes: []
        }
    ];

    return { routes }
}