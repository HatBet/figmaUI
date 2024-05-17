import React from "react";

const Dashboard = () => {
    return <div className="bg-amber-50  p-2 h-screen">
        <div className="flex flex-row justify-between gap-80">
            <div className="justify-center py-16 pl-16 m-10 gap-48 w-3/5 h-2/4  container">
                <div className="text-7xl gap-9 text-slate-900 font-bold">Collectible Sneakers</div>
                <div className="text-lg text-slate-900 py-3 ">Sit elit feugiat turpis sed integer integer accumsan
                    turpis.
                    Sed suspendisse nec
                    lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
                </div>
                <div className="text-amber-900 py-3">
                    <span className="border-solid border-2 border-amber-900 py-3 px-12 rounded">Sign up now</span>
                    <span className="px-3"> Watch Demo</span>
                </div>
            </div>
            <div className="justify-center gap-48 w-2/5 h-3/4 pr-16 relative overflow-y-auto lg:overflow-y-visible">
                <img src="bgshoes.png" className="z-2 h-2/5 py-16 px-5 lg:px-28"/>
                <img src="/shoes.png"
                     className="w-full h-full z-3 absolute inset-0 top-0"/>
            </div>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-0">
            <div className="w-full md:w-1/3">
                <div className="p-4 px-6">
                    <div>
                        <img src="trophy.png"/>
                    </div>
                    <div className="font-bold text-xl">Nibh viverra</div>
                    <div className="text-lg">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat
                        turpis natoque leo, massa.
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/3">
                <div className="p-4 px-6">
                    <div>
                        <img src="tunnel.png"/>
                    </div>
                    <div className="font-bold text-xl">Cursus amet</div>
                    <div className="text-lg">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat
                        turpis natoque leo, massa.
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/3">
                <div className="p-4 px-6">
                    <div>
                        <img src="Icon.png"/>
                    </div>
                    <div className="font-bold text-xl">Ipsum fermentum</div>
                    <div className="text-lg">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat
                        turpis natoque leo, massa.
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Dashboard;
