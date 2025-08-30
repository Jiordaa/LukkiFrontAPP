'use client'

import MainBanner from "@/pages/homePage/components/mainBanner/MainBanner";
import Footer from "@/components/Footer/Footer";
import Sales from "@/components/Sales/Sales";
import Categories from "@/components/Categories/Categories";
import Reviews from "@/components/Reviews/Reviews";
import Popular from "@/components/Popular/Popular";
import LearnMore from '@/components/LearnMore/LearnMore';
import DressWithLukki from "@/components/DressWithLukki/DressWithLukki";
import SubscribeOffers from "@/components/SubscribeOffers/SubscribeOffers";
import InfoBlock from "@/components/InfoBlock/InfoBlock";

/*const boxStyle = {
    backgroundColor: "#fff",
    width: "300px",
    height: "100px",
    borderRadius: 8,
};*/


export default function HomePage() {
    return (
            <main className="bg-white min-h-screen flex flex-col items-stretch p-0">
                <MainBanner />
                <Footer />


                {/*<PartnersBanner />*/}

                {/*<div*/}
                {/*    style={{*/}
                {/*        backgroundColor: "#2C3C18",*/}
                {/*        width: "100%",*/}
                {/*        maxWidth: 1920,*/}
                {/*        height: 150,*/}
                {/*        display: "flex",*/}
                {/*        justifyContent: "space-around",*/}
                {/*        alignItems: "center",*/}
                {/*        padding: "0 20px",*/}
                {/*        boxSizing: "border-box",*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <div style={boxStyle} />*/}
                {/*    <div style={boxStyle} />*/}
                {/*    <div style={boxStyle} />*/}
                {/*    <div style={boxStyle} />*/}
                {/*    <div style={boxStyle} />*/}
                {/*</div>*/}
            <Sales />
            <Categories />
            <Reviews />
            <Popular />
            <LearnMore />
             <DressWithLukki />
              <div className="bg-green-900 text-white text-center py-6">
                 <h2 className="font-antonio font-bold text-4xl">#DRESSWITHLUKKI</h2>
               </div>
             <SubscribeOffers />
             <InfoBlock />
            </main>
    );
}