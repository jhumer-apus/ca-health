import ProductIntro from "@/components/ProductIntro";

export default function Tens() {

    return (
        <div>
            <ProductIntro 
                name="TENS Machine" 
                coverImagePath={"/images/tens.png"} 
                intro={<p>DR-HO’S pain relief devices use TENS Therapy, EMS & DR-HO’S Patented AMP Technology to temporarily increase local blood circulation and symptomatically relieve chronic, intractable pain and pain associated with arthritis. Learn more about the science commissioned by Dr. Michael Ho to test the effectiveness of these devices.</p>}
            />
        </div>
    )
}