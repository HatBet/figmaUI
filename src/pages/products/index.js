import React from "react";

const Products = () => {
    const productsList = [
        {id: 0, title: 'title', description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'},
        {id: 1, title: 'title', description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'},
        {id: 2, title: 'title', description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'}
    ];

    return (
        <div className="bg-slate-900  sm:flex-row items-center justify-between p-3 px-16 h-screen">
            <div className="flex flex-row">
                <div className="text-white text-center sm:text-left text-4xl sm:text-8xl font-bold p-8 sm:p-16">
                    The best of the best
                </div>
                <div
                    className="text-white text-center sm:text-left text-lg sm:text-2xl border-solid rounded border-2 border-white m-8 sm:m-16 p-4 sm:p-8">
                    Sign up now
                </div>
            </div>
            <div className="flex flex-row mt-8 sm:mt-0 space-x-6">
                {productsList.map((item) => (
                    <div key={item.id} className="flex-col bg-gray-800 rounded-lg p-4 mb-4 ">
                        <img src="product.jpg" alt="Product" className="w-full h-48 object-cover mb-2"/>
                        <div>
                            <span className="text-lg text-white font-semibold">{item.title}</span>
                            <p className="text-white">{item.description}</p>
                            <button className="text-white text-center font-semibold py-2 px-16 border-amber-400 border-2 rounded mt-2">
                                Buy now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;

