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
        description: "Gradient compression garments are used to increase blood circulation and reduce swelling in those with circulation disorders and can also assist in athletic performance. Gradient compression socks, for example, apply the greatest amount of pressure near the ankle and decreases as it extends up the calf, stopping under the knee cap. Athletic gradient compression garments, usually made of spandex, offer support all over the body using the same principles to provide structural support. Athletes also use them as a recovery aid. That doesn’t mean that they are only meant for the athletically inclined.",
        imagePath: "images/compression.png",
        href:"/products/orthopedic-bracing"


    },
    {
        name: "Tens Machine",
        description: "DR-HO’S Pain Therapy System helps you get relief from pain. Developed by Dr. Michael Ho in his pain clinic, The Pain Therapy System is a TENS device that works to effectively relieve pain in as little as 20 minutes.",
        imagePath: "images/tens.png",
        href:"/products/orthopedic-bracing"

    }
]