import React, { useEffect, useRef, useState } from 'react';

export default function Skills({ isDark }) {
    const [isVisible, setIsVisible] = useState(false);

    const skillRefs = useRef([]);
    skillRefs.current = [];

    const addToRefs = (el) => {
        if (el && !skillRefs.current.includes(el)) {
            skillRefs.current.push(el);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        }, { threshold: 0.5 });

        skillRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section id="skills" className="py-16 px-6 ">
            <div className="container mx-auto">
                <h2 data-aos="flip-left" className={`text-3xl mt-9 font-semibold text-${isDark ? "white" : "gray-800"}  mb-8`}>My Skills</h2>
                <div className='flex flex-col gap-3'>
                    <div className='bg-[#b164fa]' style={{ width: "130px ", height: "5px", borderRadius: "10px" }} ></div>

                    <div style={{ width: "80px ", height: "5px", borderRadius: "10px" }} className=" bg-[#b164fa]"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">


                    <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-md" ref={addToRefs}>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">HTML</h3>
                        <div className="flex items-center mb-4">
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div
                                    className={`transition-all duration-1000 ease-in-out ${isVisible ? 'w-[90%]' : 'w-0'} bg-blue-500 h-4 rounded-full`}
                                ></div>
                            </div>
                            <span className="ml-3 text-sm">90%</span>
                        </div>
                    </div>


                    <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-md" ref={addToRefs}>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">CSS</h3>
                        <div className="flex items-center mb-4">
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div
                                    className={`transition-all duration-1000 ease-in-out ${isVisible ? 'w-[85%]' : 'w-0'} bg-green-500 h-4 rounded-full`}
                                ></div>
                            </div>
                            <span className="ml-3 text-sm">85%</span>
                        </div>
                    </div>


                    <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-md" ref={addToRefs}>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">JavaScript</h3>
                        <div className="flex items-center mb-4">
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div
                                    className={`transition-all duration-1000 ease-in-out ${isVisible ? 'w-[80%]' : 'w-0'} bg-yellow-500 h-4 rounded-full`}
                                ></div>
                            </div>
                            <span className="ml-3 text-sm">80%</span>
                        </div>
                    </div>


                    <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-md" ref={addToRefs}>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">React</h3>
                        <div className="flex items-center mb-4">
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div
                                    className={`transition-all duration-1000 ease-in-out ${isVisible ? 'w-[75%]' : 'w-0'} bg-teal-500 h-4 rounded-full`}
                                ></div>
                            </div>
                            <span className="ml-3 text-sm">75%</span>
                        </div>
                    </div>


                    <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-md" ref={addToRefs}>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Node.js</h3>
                        <div className="flex items-center mb-4">
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div
                                    className={`transition-all duration-1000 ease-in-out ${isVisible ? 'w-[70%]' : 'w-0'} bg-indigo-500 h-4 rounded-full`}
                                ></div>
                            </div>
                            <span className="ml-3 text-sm">70%</span>
                        </div>
                    </div>


                    <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-md" ref={addToRefs}>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">MongoDB</h3>
                        <div className="flex items-center mb-4">
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div
                                    className={`transition-all duration-1000 ease-in-out ${isVisible ? 'w-[65%]' : 'w-0'} bg-gray-600 h-4 rounded-full`}
                                ></div>
                            </div>
                            <span className="ml-3 text-sm">65%</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
