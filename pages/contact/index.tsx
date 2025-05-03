import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"


export default function Contact() {

    return (
        <div>
            <section className="h-100">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.1439482548517!2d-114.11885392305525!3d51.06889274264255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fa3a1f9f75f%3A0xf73f2944268e66b7!2sOne%20executive%20place%2C%201816%20Crowchild%20Trail%20NW%20%23731%2C%20Calgary%2C%20AB%20T2M%203Y7%2C%20Canada!5e0!3m2!1sen!2sph!4v1746269648429!5m2!1sen!2sph" 
                className="size-full"
                loading="lazy"
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