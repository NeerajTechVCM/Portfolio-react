import { Button } from '@/components/ui/button';
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import profile from '../assets/profile.jpg'
import resume from '../assets/neeraj.pdf'
export default function Home({ isDark }) {
    return (
        <section id="home" className={`py-5 mt-1  flex justify-center items-center text-${isDark ? "white" : "black"}`}>
            <div className="container mx-auto px-3 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
                    <div className="flex flex-col justify-center">
                        <h4 className="mt-5 text-3xl">Hi THERE,</h4>
                        <br />
                        <h2 className="text-4xl mt-4">
                            I'm <span className=' text-xl text-[#b164fa]'>
                                <TypeAnimation
                                    sequence={[

                                        ' Neeraj Pal',
                                        1000,
                                        'Frontend Developer',
                                        1000,

                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{ fontSize: '2em', display: 'inline-block' }}
                                    repeat={Infinity}
                                />
                            </span>
                        </h2>
                        <br />
                        <p className="text-xl mt-4">Hii Everyone, I'm a Front-end Developer</p>
                        <br />
                        <div className="flex space-x-4 mt-5">
                            <a
                                href="https://www.facebook.com/profile.php?id=100037428103852"
                                className=" text-xl text-white p-2 bg-[#b164fa] rounded-full" style={{ boxShadow: "5px 5px 30px rgb(177, 100, 250)" }}
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="https://www.instagram.com/watashi_wa_maodesu"
                                className=" text-xl text-white p-2 bg-[#b164fa] rounded-full" style={{ boxShadow: "5px 5px 30px rgb(177, 100, 250)" }}
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://wa.me/<7905263694>"
                                className=" text-xl text-white p-2 bg-[#b164fa] rounded-full" style={{ boxShadow: "5px 5px 30px rgb(177, 100, 250)" }}
                            >
                                <FaWhatsapp />
                            </a>
                            <a
                                href="https://github.com/NeerajTechVCM"
                                className=" text-xl text-white p-2 bg-[#b164fa] rounded-full" style={{ boxShadow: "5px 5px 30px rgb(177, 100, 250)" }}
                            >
                                <FaGithub />
                            </a>
                        </div>

                        <Button className="mt-5 bg-[#b164fa] w-24">

                            <a href={resume} className="text-white">
                                View CV
                            </a>
                        </Button>
                    </div>

                    <div className="flex justify-center items-center mt-5">
                        <div className="relative">
                            <img
                                src={profile}

                                alt="Profile"
                                className="w-60 h-60 rounded-full shadow-lg object-cover image-full"
                                style={{ boxShadow: "5px 5px 35px rgb(177, 100, 250)" }}

                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
