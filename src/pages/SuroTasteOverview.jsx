import React from "react";
import logo from "../assets/logo.png"; // sesuaikan path logo
import heroFood from "../assets/hero-food.png";
import prototype from "../assets/devices.png"; // sesuaikan path image hero
import profilePhoto from "../assets/perosnaa.jpg";

export default function SuroTasteOverview() {
    return (
        <div className="bg-cream text-green-dark font-sans">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
                    <img src={logo} alt="Logo" className="w-28 h-auto object-contain" />

                    <ul className="hidden md:flex items-center space-x-8 font-semibold text-[var(--green-700)]">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#problem">Problem</a></li>
                        <li><a href="#research">Research</a></li>
                        <li><a href="#prototype">Prototype</a></li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <header
                id="hero"
                className="relative min-h-screen pt-40 pb-40 bg-gradient-to-r from-[#fff8f3] to-[#f3fff5] overflow-hidden flex items-center"
            >
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12">

                    {/* Text */}
                    <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left">
                        <h1 className="font-museomoderno font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
                            <span className="text-[var(--orange)]">Explore Surabaya’s</span> <br />
                            <span className="text-[var(--green-700)]">Culinary Gems</span>
                        </h1>

                        <p className="text-[#13412b] text-lg leading-relaxed">
                            SuroTaste helps tourists discover authentic local cuisine with ease, offering personalized recommendations, interactive filters, and a virtual guide for hidden culinary spots.
                        </p>
                    </div>

                    {/* Hero Image */}
                    <div className="relative w-full lg:w-[600px] flex justify-center mt-10 lg:mt-0">
                        <div className="absolute -top-10 right-0 bg-[var(--green-dark)] w-[360px] h-[360px] rounded-full blur-3xl opacity-30"></div>
                        <img
                            src={heroFood}
                            alt="Hero Food"
                            className="relative z-10 w-[500px] lg:w-[600px] h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </header>


            <section
                id="problem"
                className="max-w-5xl mx-auto my-32 px-6 md:px-12"
            >
                <h2 className="text-4xl font-extrabold text-[var(--green-700)] mb-12 text-center">
                    Problem Statement
                </h2>


                <div className="bg-gradient-to-r from-[#fff8f3] to-[#f3fff5] rounded-3xl shadow-2xl p-10 md:p-16 ">
                    {/* Intro Paragraph */}
                    <p className="text-lg md:text-xl text-green-dark leading-relaxed">
                        Surabaya has a rich culinary heritage, featuring iconic dishes such as
                        <span className="font-semibold text-orange"> Rujak Cingur</span>,
                        <span className="font-semibold text-orange"> Rawon Setan</span>,
                        <span className="font-semibold text-orange"> Sate Klopo</span>,
                        <span className="font-semibold text-orange"> Sego Sambel</span>, and various traditional snacks.
                        However, these local culinary treasures often remain underexposed.
                    </p>

                    {/* Problem Points */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex gap-4 p-4 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-orange text-white font-bold text-lg">
                                1
                            </div>
                            <p className="text-green-dark leading-relaxed">
                                Fragmented digital promotion through scattered blogs, selective social media, and random reviews.
                            </p>
                        </div>

                        <div className="flex gap-4 p-4 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-orange text-white font-bold text-lg">
                                2
                            </div>
                            <p className="text-green-dark leading-relaxed">
                                Limited accessibility to authentic culinary information, particularly for international tourists.
                            </p>
                        </div>

                        <div className="flex gap-4 p-4 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-orange text-white font-bold text-lg">
                                3
                            </div>
                            <p className="text-green-dark leading-relaxed">
                                Language barriers make it challenging for non-Indonesian speakers to navigate and understand local cuisine.
                            </p>
                        </div>

                        <div className="flex gap-4 p-4 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-orange text-white font-bold text-lg">
                                4
                            </div>
                            <p className="text-green-dark leading-relaxed">
                                Local food SMEs struggle with digital platforms due to low digital literacy, limiting promotion opportunities.
                            </p>
                        </div>
                    </div>

                    {/* Conclusion */}
                    <p className="text-lg md:text-xl text-green-dark leading-relaxed mt-6">
                        As a result, tourists often gravitate towards “mainstream” options, missing out on the authentic Surabaya culinary experience.
                    </p>
                </div>
            </section>



            {/* Research Findings Section */}
            <section
                id="research"
                className="max-w-6xl mx-auto my-32 px-6 md:px-12"
            >
                <h2 className="text-4xl font-extrabold text-[var(--green-700)] mb-12 text-center">
                    Research Findings
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Card 1 */}
                    <div className="bg-gradient-to-r from-[#fff8f3] to-[#f3fff5] border-l-4 border-[var(--green-700)] rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-green-dark mb-2">Language Barriers</h3>
                        <p className="text-green-dark text-lg leading-relaxed">
                            International tourists often struggle to communicate with locals due to significant language differences and limited English or international language proficiency, leading to discomfort and confusion.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gradient-to-r from-[#fff8f3] to-[#f3fff5] border-l-4 border-[var(--green-700)] rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-green-dark mb-2">Limited Digital Exposure</h3>
                        <p className="text-green-dark text-lg leading-relaxed">
                            Many authentic culinary hubs like Peneleh, Bratang, and Urip Sumoharjo remain underpromoted digitally, while focus is on modern cafes and malls with easier social media access.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gradient-to-r from-[#fff8f3] to-[#f3fff5] border-l-4 border-[var(--green-700)] rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-green-dark mb-2">Challenges for Local SMEs</h3>
                        <p className="text-green-dark text-lg leading-relaxed">
                            Local food SMEs often lack digital literacy and support, making it hard to promote their products online and reach tourists seeking authentic Surabaya cuisine.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-gradient-to-r from-[#fff8f3] to-[#f3fff5] border-l-4 border-[var(--green-700)] rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-green-dark mb-2">Tourist Experience Gap</h3>
                        <p className="text-green-dark text-lg leading-relaxed">
                            Tourists miss out on authentic culinary experiences due to scattered information and lack of integrated digital guidance, often relying on mainstream or popular options instead.
                        </p>
                    </div>
                </div>
            </section>



            {/* User Persona */}
            {/* User Persona Section */}
            <section
                id="persona"
                className="max-w-5xl mx-auto my-32 px-6 md:px-12"
            >
                <h2 className="text-4xl font-extrabold text-[var(--green-700)] mb-12 text-center">
                    User Persona
                </h2>

                <div className="bg-gradient-to-r from-[#fff8f3] to-[#f3fff5] rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                    {/* Photo */}
                    <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[var(--green-700)]">
                        <img
                            src={profilePhoto}
                            alt="Nabila"
                            className="w-full h-full **object-contain p-2**"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex-1 space-y-4">
                        <h3 className="text-2xl font-bold text-green-dark">Nabila, 21 - Female</h3>
                        <p className="text-lg text-green-dark">
                            Accounting student from East Kalimantan who enjoys traveling and exploring Surabaya’s local food.
                        </p>

                        {/* Pain Points */}
                        <div>
                            <h4 className="font-semibold text-green-700 mb-2">😞 Pain Points</h4>
                            <ul className="list-inside space-y-1 text-green-dark text-lg">
                                <li>Hard to find clear and reliable culinary information.</li>
                                <li>High transport costs limit access to distant food spots.</li>
                                <li>Long queues discourage trying popular places.</li>
                                <li>Difficulty distinguishing authentic Surabaya food.</li>
                            </ul>
                        </div>

                        {/* Needs */}
                        <div>
                            <h4 className="font-semibold text-green-700 mb-2">🔍 Needs</h4>
                            <ul className="list-inside space-y-1 text-green-dark text-lg">
                                <li>Complete and accurate Surabaya culinary info.</li>
                                <li>Personalized recommendations based on taste.</li>
                                <li>Easy and affordable transport options.</li>
                                <li>Clear indicators of authentic local cuisine.</li>
                            </ul>
                        </div>

                        {/* Goals */}
                        <div>
                            <h4 className="font-semibold text-green-700 mb-2">🔥 Goals</h4>
                            <ul className="list-inside space-y-1 text-green-dark text-lg">
                                <li>Explore Surabaya culinary scene without hassle.</li>
                                <li>Find meals that match taste, price, and portion.</li>
                                <li>Experience authentic Surabaya cuisine.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* Final Solution Statement */}
            <section className="max-w-6xl mx-auto my-32 px-6 md:px-12">
                <h2 className="text-4xl font-extrabold text-[var(--green-700)] mb-12 text-center">
                    Final Solution
                </h2>

                <div className="bg-gradient-to-r from-[#fff8f3] to-[#f3fff5] border-l-4 border-[var(--orange)] rounded-3xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
                    <p className="text-green-dark text-lg md:text-xl leading-relaxed">
                        SuroTaste is a digital culinary platform for Surabaya that integrates a chatbot acting as a virtual local guide. It helps users discover authentic dishes through personalized recommendations, location and price filters, and real-time ratings.
                        <br /><br />
                        The chatbot provides instant guidance, including navigation to culinary spots, and features a unique “Mealplan” function to suggest tailored food options. SuroTaste centralizes scattered information and ensures a practical, enjoyable, and personalized culinary experience for every visitor.
                    </p>
                </div>
            </section>


            {/* Tools & Tech Stack */}
            <section id="tools" className="max-w-6xl mx-auto my-32 px-6 md:px-12">
                <h2 className="text-4xl font-extrabold text-[var(--green-700)] mb-16 text-center">
                    Tools & Tech Stack
                </h2>

                <div className="flex flex-wrap justify-center gap-12">
                    {/* React */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-[#61DAFB]/40 to-[#61DAFB]/20 hover:scale-110 transition-transform">
                            <i className="fab fa-react text-5xl text-[#61DAFB]"></i>
                        </div>
                        <span className="text-green-dark font-semibold text-lg">React.js</span>
                    </div>

                    {/* Node.js */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-[#339933]/40 to-[#339933]/20 hover:scale-110 transition-transform">
                            <i className="fab fa-node-js text-5xl text-[#339933]"></i>
                        </div>
                        <span className="text-green-dark font-semibold text-lg">Node.js</span>
                    </div>

                    {/* Express */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-400/40 to-gray-400/20 hover:scale-110 transition-transform">
                            <i className="fas fa-server text-5xl text-gray-700"></i>
                        </div>
                        <span className="text-green-dark font-semibold text-lg">Express</span>
                    </div>

                    {/* MySQL */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-[#4479A1]/40 to-[#4479A1]/20 hover:scale-110 transition-transform">
                            <i className="fas fa-database text-5xl text-[#4479A1]"></i>
                        </div>
                        <span className="text-green-dark font-semibold text-lg">MySQL</span>
                    </div>

                    {/* GitHub */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-black/40 to-black/20 hover:scale-110 transition-transform">
                            <i className="fab fa-github text-5xl text-black"></i>
                        </div>
                        <span className="text-green-dark font-semibold text-lg">GitHub</span>
                    </div>

                    {/* VSCode */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-[#007ACC]/40 to-[#007ACC]/20 hover:scale-110 transition-transform">
                            <i className="fas fa-code text-5xl text-[#007ACC]"></i>
                        </div>
                        <span className="text-green-dark font-semibold text-lg">VSCode</span>
                    </div>

                    {/* Figma */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-[#F24E1E]/40 to-[#F24E1E]/20 hover:scale-110 transition-transform">
                            <i className="fab fa-figma text-5xl text-[#F24E1E]"></i>
                        </div>
                        <span className="text-green-dark font-semibold text-lg">Figma</span>
                    </div>
                </div>
            </section>





            {/* Timeline */}
            <section id="timeline" className="max-w-6xl mx-auto my-24 px-6 md:px-12">
                <h2 className="text-4xl font-extrabold text-[var(--green-700)] mb-12 text-center">
                    Project Timeline
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Milestone 1 */}
                    <div className="rounded-2xl shadow-lg p-6 flex flex-col items-center bg-gradient-to-r from-[#fff8f3] to-[#f3fff5] hover:scale-105 transition-transform">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[var(--green-700)] text-white text-xl font-bold mb-4">
                            1
                        </div>
                        <h3 className="text-lg font-semibold text-green-dark mb-2">Aug - Sep</h3>
                        <p className="text-green-dark text-center text-sm">
                            Research & define problems in Surabaya's culinary scene.
                        </p>
                    </div>

                    {/* Milestone 2 */}
                    <div className="rounded-2xl shadow-lg p-6 flex flex-col items-center bg-gradient-to-r from-[#fff8f3] to-[#f3fff5] hover:scale-105 transition-transform">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[var(--green-700)] text-white text-xl font-bold mb-4">
                            2
                        </div>
                        <h3 className="text-lg font-semibold text-green-dark mb-2">October</h3>
                        <p className="text-green-dark text-center text-sm">
                            Design & create interactive prototypes for SuroTaste.
                        </p>
                    </div>

                    {/* Milestone 3 */}
                    <div className="rounded-2xl shadow-lg p-6 flex flex-col items-center bg-gradient-to-r from-[#fff8f3] to-[#f3fff5] hover:scale-105 transition-transform">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[var(--green-700)] text-white text-xl font-bold mb-4">
                            3
                        </div>
                        <h3 className="text-lg font-semibold text-green-dark mb-2">Nov - Dec</h3>
                        <p className="text-green-dark text-center text-sm">
                            Develop, test, and deploy the SuroTaste platform.
                        </p>
                    </div>
                </div>
            </section>



            {/* Prototype */}
            <section id="prototype" className="max-w-5xl mx-auto my-24 px-6 md:px-12 mb-24">
                {/* Section Title */}
                <h2 className="text-4xl font-extrabold text-[var(--green-700)] mb-8 text-center">
                    Prototype Preview
                </h2>

                {/* Section Description */}
                <p className="text-lg text-center text-green-dark mb-8">
                    Explore SuroTaste’s interactive prototype featuring personalized recommendations, chatbot guidance, and hidden culinary gems.
                </p>

                {/* Prototype Container */}
                <div className="relative bg-gradient-to-r from-[#fff8f3] to-[#f3fff5] rounded-2xl shadow-2xl p-6 flex flex-col items-center gap-6 hover:scale-105 transition-transform duration-300">

                    {/* Embedded Figma Prototype */}
                    <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl shadow-inner overflow-hidden">
                        <iframe
                            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/0vOh5bpdZs3U730E34WPmc/Design-Web-Surotaste?node-id=1-82&p=t&scaling=min-zoom"
                            className="w-full h-full"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* External Link Button */}
                    <a
                        href="https://www.figma.com/proto/0vOh5bpdZs3U730E34WPmc/Design-Web-Surotaste?node-id=1-82&p=f&t=ceCJlo6q7Xy1HsUN-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A82"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[var(--green-700)] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#1f5a32] hover:scale-105 transition-all"
                    >
                        View Prototype
                    </a>

                </div>
            </section>


        </div>
    );
}
