interface ProductType {
    name: string;
    description: string;
    imagePath: string; 
    href: string;
}

export const products: ProductType[] = [
    {
        name: "Orthopedic Bracing",
        description: "Whether you experience pain in the knees, back, hands, elbows or shoulders, Bauerfeind braces are designed to restore mobility and improve performance. They are made from an anatomically knitted breathable fabric with visco-elastic inserts. As the joint moves, they provide a therapeutic massage and stability. This stimulates the circulation and promotes the healing process. – Bauerfeind",
        imagePath: "images/bracing.png",
        href:"/products/orthopedic-bracing"
    },
    {
        name: "Compression Stockings",
        description: "Compression stockings are tight-fitting socks that give your legs a gentle squeeze. They help with blood flow, reduce swelling, and can keep your legs from feeling tired or achy. People wear them for medical reasons, during workouts, or just to stay comfy — and they come in different styles and pressure levels depending on what you need.",
        imagePath: "images/compression.png",
        href:"/products/compression-stockings"

    },
    {
        name: "Tens Machine",
        description: "DR-HO’S Pain Therapy System is an easy way to get relief from aches and pains. Created by Dr. Michael Ho in his clinic, it uses TENS technology to help ease pain — and it can start working in just 20 minutes.",
        imagePath: "images/tens.png",
        href:"/products/tens"

    }
]