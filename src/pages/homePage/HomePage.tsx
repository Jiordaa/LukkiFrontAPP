'use client'

import MainBanner from "@/pages/homePage/components/mainBanner/MainBanner";

const boxStyle = {
    backgroundColor: "#fff",
    width: "300px",
    height: "100px",
    borderRadius: 8,
};


export default function HomePage() {
    return (
            <main className="bg-white min-h-screen flex flex-col items-center p-0">
                <MainBanner />

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
            </main>
    );
}