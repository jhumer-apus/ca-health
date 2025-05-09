export default function WomenStocking() {

    
    const womenStockings = [
        {
            name: "1",
            imagePath: "/images/compressions/sigvaris/sigvaris-stocking-women.png"
        },
        {
            name: "2",
            imagePath: "/images/compressions/sigvaris/sigvaris-stocking-women2.png"
        },
    ]

    return (
        <div id="women-stockins-wrapper" className="">
            <div className="w-full">
                <div className="w-fit m-auto">
                    <h2 className="text-4xl font-bold text-center">WOMEN STOCKINGS</h2>
                    <div className="mt-8">
                        <p className="text-3xl text-center">Available Brands:</p>
                        <ul className="text-2xl leading-12 mt-4 w-fit m-auto flex gap-10">
                            <li>Sigvaris</li>
                            <li>Juzo</li>
                            <li>Jobst</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="w-fit m-auto flex flex-col md:flex-row flex-wrap gap-4">
                    {womenStockings.map((item,index:number) => (
                        <div key={index}>
                            <img src={item.imagePath} width={300}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}