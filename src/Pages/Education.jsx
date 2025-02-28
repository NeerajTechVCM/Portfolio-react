import React from 'react';

export default function Education({ isDark }) {
    return (
        <section id="education" className="py-16 px-4 ">
            <div className="container mx-auto">
                <h2 data-aos="flip-left" className={`text-3xl mt-9 font-semibold text-${isDark ? "white" : "gray-800"}  mb-8`}>Education</h2>
                <div className='flex flex-col gap-3'>
                    <div className='bg-[#b164fa]' style={{ width: "130px ", height: "5px", borderRadius: "10px" }} ></div>

                    <div style={{ width: "80px ", height: "5px", borderRadius: "10px" }} className=" bg-[#b164fa]"></div>
                </div>
                <div className="space-y-8 mt-10">

                    <div data-aos="fade-right" className="flex  items-center justify-between bg-white p-6 rounded-lg shadow-md">
                        <div className="md:w-2/3 space-y-4">
                            <h3 className="text-2xl font-semibold text-gray-800">HighSchool</h3>
                            <p className="text-lg text-gray-600"><span className='text-lg font-semibold text-gray-800' >College Name:  </span>  P.V.N Public Inter College - 2019 - 2020</p>
                            <p className="text-md text-gray-600"><span className='text-lg font-semibold text-gray-800' >Board:  </span>UP Board</p>
                            <p className="text-md text-gray-600"><span className='text-lg font-semibold text-gray-800' >Percentage:  </span>84%</p>
                        </div>

                    </div>


                    <div data-aos="fade-left" className="flex  items-center justify-between bg-white p-6 rounded-lg shadow-md">
                        <div className="md:w-2/3 space-y-4">
                            <h3 className="text-2xl font-semibold text-gray-800">Intermediate</h3>
                            <p className="text-lg text-gray-600"><span className='text-lg font-semibold text-gray-800' >College Name:  </span>  P.V.N Public Inter College - 2021 - 2022</p>
                            <p className="text-md text-gray-600"><span className='text-lg font-semibold text-gray-800' >Board:  </span>UP Board</p>
                            <p className="text-md text-gray-600"><span className='text-lg font-semibold text-gray-800' >Percentage:  </span>80%</p>
                        </div>

                    </div>

                    <div data-aos="fade-right" className="flex  items-center justify-between bg-white p-6 rounded-lg shadow-md">
                        <div className="md:w-2/3 space-y-4">
                            <h3 className="text-2xl font-semibold text-gray-800">Bachelor Of Computer Application</h3>
                            <p className="text-lg text-gray-600"><span className='text-lg font-semibold text-gray-800' >College Name:  </span>  Vision College Of Management  - 2022 - 2025</p>
                            <p className="text-md text-gray-600"><span className='text-lg font-semibold text-gray-800' >University:  </span>CSJMU</p>
                            <p className="text-md text-gray-600"><span className='text-lg font-semibold text-gray-800' >CGPA:  </span>Till Now 8.33</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
