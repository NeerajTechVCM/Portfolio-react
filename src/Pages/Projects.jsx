import React from "react";
import tic from '../assets/tic.png'
import calc from '../assets/calc.png'
import chat from '../assets/chat.png'
import quiz from '../assets/quiz.png'
import rest from '../assets/rest.png'
import simon from '../assets/simon.jpg'
import swiggy from '../assets/swiggy.png'
import todo from '../assets/todo.png'
import notes from '../assets/notes.jpg'
export default function Projects({ isDark }) {
    const projects = [
        {
            id: 1,
            title: "Tic Tac Toe",
            description: "I'm Building the tic tac toe Game using Html Css Javascrip.",
            image: tic,
        },
        {
            id: 2,
            title: "Todo List",
            description: "I'm Building the Todo List using Html Css Javascript.",
            image: todo,
        },
        {
            id: 3,
            title: "Simon Game",
            description: "I'm Building the Simon Game using Html Css Javascript.",
            image: simon,
        },
        {
            id: 4,
            title: "Quiz App",
            description: "I'm Building the Quiz App using Html Css Javascript.",
            image: quiz,
        },
        {
            id: 5,
            title: "Calculator",
            description: "I'm Building the Calculator using Html Css Javascript.",
            image: calc,
        },
        {
            id: 6,
            title: "Restaurant website",
            description: "I'm Building static website using html css js and bootstrap.",
            image: rest,
        },
        {
            id: 7,
            title: "Swiggy Home Page Clone",
            description: "I'm Building Swiggy Home page clone using html css js and bootstrap.",
            image: swiggy,
        },
        {
            id: 8,
            title: "Chat App",
            description: "I'm Building Chat App using MERN.",
            image: chat,
            link:"https://chat-app-1-q0ke.onrender.com/"
        },
        {
            id: 9,
            title: "Notes App",
            description: "I'm Building the Notes app using MERN.",
            image: notes,
            link:"https://notes-x9gg.onrender.com"
        },

    ];

    return (
        <section
            id="projects"
            className="pt-[60px] py-16 px-6 "  
        >
            <div className="container mx-auto">
                <h2 data-aos="flip-left" className={`text-3xl mt-9 font-semibold text-${isDark ? "white" : "gray-800"} mb-8`}>
                    My Projects
                </h2>
                <div className='flex flex-col gap-3'>
                    <div className='bg-[#b164fa]' style={{ width: "130px ", height: "5px", borderRadius: "10px" }} ></div>

                    <div style={{ width: "80px ", height: "5px", borderRadius: "10px" }} className=" bg-[#b164fa]"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 place-items-center">
                    {projects.map((project) => (
                      <a href={project.link}>
                          <div
                            data-aos="fade-up"
                            key={project.id}
                            className="group relative bg-white rounded-lg overflow-hidden shadow-md w-60 h-60"
                        >

                            <img
                                src={project.image}
                                alt={project.title}
                                className=" w-full h-full object-contain transition-all duration-500 group-hover:opacity-50"
                            />

                            {/* Project Overlay Text */}
                            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="text-white text-center transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                                    <p className="mt-2 text-sm">{project.description}</p>
                                </div>
                            </div>
                        </div>
                      </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
