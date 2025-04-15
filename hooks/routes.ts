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
                    href: "compression-stocking",
                    subRoutes: []
                },
                { 
                    id: "tens", 
                    name: "TENS", 
                    href: "tens",
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