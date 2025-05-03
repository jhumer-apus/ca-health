import ConcernSection from "@/components/contact/ConcernSection";
import ProductIntro from "@/components/ProductIntro";
import Head from "next/head";

export default function Tens() {

    const title = `Tens | ${process.env.NEXT_PUBLIC_COMPANY}`;
    const description = "DR-HO’S Pain Therapy System is an easy way to get relief from aches and pains. Created by Dr. Michael Ho in his clinic, it uses TENS technology to help ease pain — and it can start working in just 20 minutes."
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={description} />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={process.env.URL} />
                <meta property="og:image" content={process.env.URL + ""} />
            </Head>
            <main>
                <ProductIntro 
                    name="TENS Machine" 
                    coverImagePath={"/images/tens.png"} 
                    intro={<p>DR-HO’S pain relief devices use TENS Therapy, EMS & DR-HO’S Patented AMP Technology to temporarily increase local blood circulation and symptomatically relieve chronic, intractable pain and pain associated with arthritis. Learn more about the science commissioned by Dr. Michael Ho to test the effectiveness of these devices.</p>}
                />
                <ConcernSection 
                    statement="Please ask us if this unit is right for you ~ Tandem Team"
                />
            </main>
        </div>
    )
}