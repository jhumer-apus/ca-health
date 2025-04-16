import ContactUsButton from "./ContactUsButton";

interface Props {
    statement: string
}
export default function ConcernSection(props: Props) {

    const { statement } = props 
    return (
        <section className="p-4">
            <div className="max-w-[1100px] m-auto py-4 flex flex-col md:flex-row justify-between gap-8 items-center">
                <ContactUsButton />
                <p className="text-black text-2xl italic">{statement}</p>
            </div>
        </section>
    )
}