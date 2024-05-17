import React from "react";
const Navbar = () => {
    const menuItems = [
        { id: 0, title: 'Products' },
        { id: 1, title: 'Solutions' },
        { id: 2, title: 'Pricing' },
        { id: 3, title: 'Resources' },
        { id: 4, title: 'Log In' },
    ];

    return (
        <header className="bg-amber-50 text-amber-900 py-4 font-roboto">
            <div className="container mx-auto flex justify-between items-center px-6">
                <div className="text-3xl font-bold">
                    <a href="#" className="hover:text-amber-300">Collers</a>
                </div>

                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        {menuItems.map(item => (
                            <li key={item.id}>
                                <a href="#" className="hover:text-amber-300">{item.title}</a>
                            </li>
                        ))}
                        <li>
                            <span className="border-solid border-2 border-amber-900 p-2 rounded">Sign up now</span>
                        </li>
                    </ul>
                </nav>

                <div className="block md:hidden">
                    <button className="text-xl focus:outline-none">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zm0-5h18V6H3v2z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
