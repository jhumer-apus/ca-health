import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"


export default function Contact() {

    return (
        <div>
            <section className="h-100">
                <iframe 
                    loading="lazy" 
                    src="https://maps.google.com/maps?q=3601%2019%20St%20NE%2C%20%231&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near" title="3601 19 St NE, #1" 
                    aria-label="3601 19 St NE, #1"
                    className="size-full"
                >
                </iframe>
            </section>
            <section className="bg-white px-8 py-12">
                <div className="flex flex-col md:flex-row gap-8 justify-between m-auto ml-0 md:ml-30">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </section>
        </div>
    )
}