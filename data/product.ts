interface ProductType {
    name: string;
    description: string;
    imagePath: string; 
    href: string;
}

export const products: ProductType[] = [
    {
        name: "Orthopedic Bracing",
        description: "Whether you experience pain in the knees, back, hands, elbows or shoulders, Bauerfeind braces are designed to restore mobility and improve performance. They are made from an anatomically knitted breathable fabric with visco-elastic inserts. As the joint moves, they provide a therapeutic massage and stability. This stimulates the circulation and promotes the healing process.",
        imagePath: "images/bracing.png",
        href:"/products/orthopedic-bracing"
    },
    {
        name: "Compression Stockings",
        description: "Compression stockings are specially designed socks or hosiery that apply gentle pressure to your legs and ankles. They help improve blood flow, reduce swelling, and prevent issues like varicose veins, deep vein thrombosis (DVT), and leg fatigue. Commonly used for medical, athletic, or everyday purposes, compression stockings come in different pressure levels and styles to meet individual needs.",
        imagePath: "images/compression.png",
        href:"/products/compression-stockings"

    },
    {
        name: "Tens Machine",
        description: "DR-HO’S Pain Therapy System helps you get relief from pain. Developed by Dr. Michael Ho in his pain clinic, The Pain Therapy System is a TENS device that works to effectively relieve pain in as little as 20 minutes.",
        imagePath: "images/tens.png",
        href:"/products/tens"

    }
]