import React from "react";

const Info = () => {
    return <div className="bg-amber-50 p-16 h-screen">
        <div className="bg-white rounded-xl shadow-lg  p-16 m-16 w-9/12 flex flex-row">
            <div className="w-2/3">
                <div className="text-6xl font-bold mb-6">Why join us</div>
                <div className="list-disc pl-5 mb-6 ">
                    <div><img src="vector.png" className="inline-block w-4 h-4 mr-2"/> Est et in pharetra magna
                        adipiscing
                        ornare aliquam.
                    </div>
                    <div><img src="vector.png" className="inline-block w-4 h-4 mr-2"/> Tellus arcu sed consequat ac
                        velit ut
                        eu blandit.
                    </div>
                    <div><img src="vector.png" className="inline-block w-4 h-4 mr-2"/> Ullamcorper ornare in et egestas
                        dolor
                        orci.
                    </div>
                </div>
                <div
                    className="text-center text-amber-800 sm:text-left text-lg sm:text-2xl border-solid rounded border-2 border-amber-800 py-4 px-8 w-1/4">
                    Sign up now
                </div>
            </div>
            <div className="w-1/3 h-1/2 relative">
                <img src="rectangle.png" className="z-2 w-96 h-full"/>
                <img src="info.jpg" className="z-4 absolute inset-0 py-9"/>
                <img src="play.png" className="z-6 absolute inset-1 mt-16 ml-10 px-16"/>
            </div>
        </div>

    </div>;
};

export default Info;
