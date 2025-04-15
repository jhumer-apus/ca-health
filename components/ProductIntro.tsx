import { JSX } from "react"

interface Props {
    name: string,
    coverImagePath: string;
    intro: string | JSX.Element
}
export default function ProductIntro(props: Props) {

    const { name, intro, coverImagePath } = props

    console.log(coverImagePath)
    return (
        <section 
            className={` bg-cover bg-center h-full md:h-[800px] flex`}       
            style={{ backgroundImage: `url(${coverImagePath})` }}
        >
            <div id="left" className="w-full md:w-1/2 relative mt-20 p-4">
                <div className="bg-black/90 max-w-[500px] px-10 py-14 md:absolute md:bottom-0 md:right-0 w-full">
                    <p className="text-4xl font-bold text-center">{name}</p><br></br>
                    {intro}
                </div>
            </div>
        </section>
    )
}