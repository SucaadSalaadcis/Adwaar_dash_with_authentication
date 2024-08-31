// src/App.js
import React from "react";

import { IoChatbubblesOutline } from "react-icons/io5";
import { IoStatsChartSharp } from "react-icons/io5";
import { SiSoundcharts } from "react-icons/si";
import { FaRegThumbsUp } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { GiChart } from "react-icons/gi";



function Contact() {

    const cards = [
        {
            image: "https://img.freepik.com/free-photo/technology-technical-assistance-repair-conceopt_53876-121031.jpg?t=st=1725028741~exp=1725032341~hmac=bcae76ae6f8a075413254e5e42f960ca579a0a374fa1b50a3153f0d7dcab5ecd&w=740",
            title: "Tech",
            description: "Experience the beauty of a Tech in the Adwaar company.",
        },

    ];

    const smallcards = [
        {
            icon: <IoChatbubblesOutline />,
            title: "Total veiw",
            price: "143.210",
            chart: <SiSoundcharts className="text-yellow-400" />,
        },
        {
            icon: <FaRegThumbsUp />,
            title: "Total veiw",
            price: "129.340",
            chart: <IoStatsChartSharp className="text-blue-400" />,
        },
        {
            icon: <CiShare2 />,
            title: "Total veiw",
            price: "349.87",
            chart: <GiChart className="text-purple-500" />,
        },

    ];

    return (

        <>
            <div>
                <div className=" mt-20  flex items-center justify-center ml-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                        {smallcards.map((card, index) => (
                            <div className="p-5 bg-white shadow-xl">
                                <h5 className="text-xl  font-light  text-gray-400 gap-7 pt-4 ">
                                    {card.title}
                                </h5>
                                <div className="flex">
                                    <span className="text-4xl mt-5"> {card.icon} </span>
                                    <span className="text-2xl ml-2 mt-6"> {card.price} </span>
                                    <span className="text-7xl ml-10"> {card.chart} </span>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* cards */}
            <div className=" mt-20  flex items-center justify-center ml-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="p-5  shadow-xl"
                        >
                            <img
                                className="w-full h-48 object-cover"
                                src={card.image}
                                alt={card.title}
                            />
                            <div className="p-5">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                                    {card.title}
                                </h5>
                                <p className="mt-2 text-gray-600">{card.description}</p>
                                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                                    Learn More
                                </button>
                            </div>

                        </div>

                    ))}
                    {/* pictures */}
                    <div className="p-5 bg-white shadow-2xl h-[200px]">
                          <h1 className="font-semibold">New Followers</h1>
                        <div className="avatar mt-3">
                            <div className="w-32 rounded">
                                <img src="https://img.freepik.com/free-photo/young-african-american-woman-toothy-smiling_23-2148183289.jpg?t=st=1725068870~exp=1725072470~hmac=e6bc25591f81d13c669a82da6dbc0bc20e18d138bc69588ef3c9db86e1447d1a&w=740" />

                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-20 rounded">
                                <img
                                    src="https://img.freepik.com/premium-photo/smiling-afro-guy-gesturing-thumbs-up-approving-something-studio-shot_922936-31476.jpg?w=740"
                                    alt="Tailwind-CSS-Avatar-component" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-16 rounded">
                                <img
                                    src="https://img.freepik.com/free-photo/close-up-portrait-carefree-happy-joyful-woman-celebrating-holidays-wishing-everyone-good-new-year-showing-peace-sign-smiling-joyfully-express-posivity-joy-wearing-sweater_1258-35453.jpg?t=st=1725068626~exp=1725072226~hmac=3d5011a18a9a7231af9abf31843e275a4a3d7217243cd7a8747f218ed01b1670&w=740"
                                    alt="Tailwind-CSS-Avatar-component" />
                            </div>
                        </div>
                        <div className="avatar">

                            <div className="w-8 rounded">
                                <img
                                    src="https://img.freepik.com/premium-photo/man-with-curly-hair-casual-pink-shirt-giving-thumbs-up-with-friendly-demeanor-against_139623-657.jpg?w=740"
                                    alt="Tailwind-CSS-Avatar-component" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>



        </>
    );
}

export default Contact;
