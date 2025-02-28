import React from 'react';
import profile from '../assets/profile.jpg'

export default function About({ isDark }) {
    return (
        <section id="about" className="py-16 px-4 ">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between space-y-12 lg:space-y-0">

                <div className="lg:w-1/2 space-y-6">
                    <h2 data-aos="flip-left" className={`text-3xl font-semibold mt-9  text-${isDark ? "white" : "gray-800"}`}>About Me</h2>
                    <div className='flex flex-col gap-3'>
                        <div className='bg-[#b164fa]' style={{ width: "130px ", height: "5px", borderRadius: "10px" }} ></div>

                        <div style={{ width: "80px ", height: "5px", borderRadius: "10px" }} className=" bg-[#b164fa]"></div>
                    </div>
                    <p className={`text-lg text-black text-${isDark ? "white" : "black"} `}>
                        Hi, I'm <span className="font-semibold text-blue-600">Neeraj Pal</span>. I'm a passionate Front-end Developer who loves creating interactive and user-friendly web applications.
                        With a strong foundation in HTML, CSS, JavaScript, and React, I focus on building responsive, efficient, and scalable websites.
                    </p>
                    <p className={`text-lg text-black text-${isDark ? "white" : "black"} `}>
                        I enjoy solving complex problems and continuously improving my skills. When I'm not coding, I like to explore new technologies, contribute to open-source projects, and learn about the latest trends in web development.
                    </p>
                </div>

                <div className="lg:w-1/2 flex justify-center lg:justify-end " >
                    <img
                        src={profile}

                        alt="Profile"
                        className="w-48 h-48 hidden md:block rounded-full shadow-lg object-cover image-full"
                        style={{ boxShadow: "5px 5px 35px rgb(177, 100, 250)" }}

                    />
                </div>
            </div>
        </section>
    );
}
