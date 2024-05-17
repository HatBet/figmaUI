import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {

    return <footer className="bg-slate-900 py-20">
        <div className="container mx-auto px-1">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center sm:text-left">
                    <ul className="text-gray-300">
                        <li className="font-semibold text-white py-2">Product</li>
                        <li className="py-2">Pricing</li>
                        <li className="py-2">Overview</li>
                        <li className="py-2">Browse</li>
                        <li className="py-2">Accessibility</li>
                        <li className="py-2">Five</li>
                    </ul>
                </div>
                <div className="text-center sm:text-left">
                    <ul className="text-gray-300">
                        <li className="font-semibold text-white py-2">Solutions</li>
                        <li className="py-2">Brainstorming</li>
                        <li className="py-2">Ideation</li>
                        <li className="py-2">Wireframing</li>
                        <li className="py-2">Research</li>
                        <li className="py-2">Design</li>
                    </ul>
                </div>
                <div className="text-center sm:text-left">
                    <ul className="text-gray-300">
                        <li className="font-semibold text-white py-2">Support</li>
                        <li className="py-2">Contact Us</li>
                        <li className="py-2">Developers</li>
                        <li className="py-2">Documentation</li>
                        <li className="py-2">Integrations</li>
                        <li className="py-2">Reports</li>
                    </ul>
                </div>
                <div className="text-center sm:text-left">
                    <ul className="text-gray-300">
                        <li className="font-semibold text-white py-2">Get The App</li>
                        <li className="py-2"><span>
                            <img src="appStoreButton.png" />
                        </span></li>
                        <li className="py-2"><img src="googlePlay.png"/>
                        </li>
                        <li className="py-2"></li>
                        <li className="py-2"></li>
                        <li className="py-2">Follow Us</li>
                        <li className="py-2"> <img src="socialMediaIcon.png" /> </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between text-left mt-3 px-2">
                <span className="text-gray-300">Collers @ 2023. All rights reserved.</span>
                <ul className="flex flex-col sm:flex-row justify-between text-gray-300 mt-4 space-y-2 sm:mt-0 sm:space-y-0 sm:space-x-6 pl-2">
                    <li className="py-2">Teams</li>
                    <li className="py-2">Privacy</li>
                    <li className="py-2">Contact</li>
                    <li className="py-2 flex"><img src="world.png" />EN</li>
                </ul>
            </div>
        </div>
    </footer>;
};

export default Footer;
