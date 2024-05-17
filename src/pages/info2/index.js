import React from "react";

const Info2 = () => {
    return <div className="bg-amber-50 p-16 h-screen">
        <div className="flex justify-between">
            <div className="text-6xl font-bold gap-32">Because they love us</div>
            <div className="flex">
                <img src="button-one.png"/>
                <img src="button-two.png"/>
            </div>
        </div>
        <div className="relative">
            <img src="Rectangle28.png" className="p-3 z-0 w-full"/>
            <img src="Slider.png" className="z-10 p-16 w-screen absolute inset-0"/>
        </div>
    </div>;
};

export default Info2;
