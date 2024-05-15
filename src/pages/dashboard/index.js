import React from "react";

const Dashboard = () => {
    return <div className="bg-amber-50 flex gap-80 p-2 h-screen">
        <div className="justify-center py-16 pl-16 m-10 gap-48 w-3/5 h-2/4  container">
            <div className="text-7xl gap-9 text-slate-900 font-bold">Collectible Sneakers</div>
            <div className="text-lg text-slate-900 py-3 ">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec
                lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
            </div>
            <div className="text-amber-900 py-3">
                <span className="border-solid border-2 border-amber-900 py-3 px-12 rounded">Sign up now</span>
                <span className="px-3"> Watch Demo</span>
            </div>

        </div>
        <div className="justify-center gap-48 w-2/5 h-3/4 pr-16">
            <div className="box-border border-none rounded h-40 w-40 border-4 m-16 bg-amber-400 z-2">
                <img src="/shoes.png" className="w-80 z-10"/>
            </div>
        </div>
    </div>;
};

export default Dashboard;
