export default function MenStocking() {

    
    const menStockings = [
        {
            name: "1",
            imagePath: "/images/compressions/sigvaris/sigvaris-stocking-men.png"
        },
    ]

    return (
        <div id="women-stockins-wrapper" className="flex flex-col md:flex-row gap-8">

            <div className="w-full">
                <div className="w-fit m-auto">
                    <h2 className="text-4xl font-bold">MEN STOCKINGS</h2>
                    <div className="mt-8">
                        <p className="text-3xl">Available Brands:</p>
                        <ul className="list-disc pl-5 text-2xl leading-12 mt-4">
                            <li>Sigvaris</li>
                            <li>Juzo</li>
                            <li>Jobst</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="w-full">
                <div className="w-fit m-auto flex flex-col md:flex-row flex-wrap gap-4">
                    {menStockings.map((item, index:number) => (
                        <div key={index}>
                            <img src={item.imagePath} width={300}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}