
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";


export default function Contact({ isDark }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "2f58e11f-132d-4e5a-8863-5bb24855af9f");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            toast.success("Email Sent SuccessFully")
        } else {
            toast.error("Some Error Occured")
        }
        setFormData({
            name: "",
            email: "",
            message: "",
        })
    };

    return (
        <>
            <Toaster />
            <section className="py-20" id="contact">
                <div className="container mx-auto px-4 ">
                    <h2 data-aos="flip-left" className={`text-4xl font-bold  text-${isDark ? "white" : "black"} mb-10`}>
                        Contact Me
                    </h2>
                    <div className='flex flex-col gap-3'>
                        <div className='bg-[#b164fa]' style={{ width: "130px ", height: "5px", borderRadius: "10px" }} ></div>

                        <div style={{ width: "80px ", height: "5px", borderRadius: "10px" }} className=" bg-[#b164fa]"></div>
                    </div>
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 text-${isDark ? "white" : "black"} `}>

                        <div className={`flex flex-col justify-center space-y-6 text-${isDark ? "white" : "black"}`}>
                            <div className="flex items-center space-x-4">
                                <div className="text-xl p-2 bg-[#b164fa] rounded-full" style={{ boxShadow: "5px 5px 30px rgb(177, 100, 250)" }}>
                                    <FaPhoneAlt />
                                </div>

                                <div>
                                    <p className="font-semibold">Phone</p>
                                    <p>+91 7905263694</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="text-xl p-2 bg-[#b164fa] rounded-full" style={{ boxShadow: "5px 5px 30px rgb(177, 100, 250)" }}>
                                    <FaEnvelope />
                                </div>

                                <div>
                                    <p className="font-semibold">Email</p>
                                    <p >np6848586@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="text-xl p-2 bg-[#b164fa] rounded-full" style={{ boxShadow: "5px 5px 30px rgb(177, 100, 250)" }}>
                                    <FaMapMarkerAlt />
                                </div>

                                <div>
                                    <p className="font-semibold">Location</p>
                                    <p >Kanpur, India</p>
                                </div>
                            </div>
                        </div>


                        <div>
                            <form onSubmit={handleSubmit} className="space-y-6">

                                <div>
                                    <Label htmlFor="name" className="block text-lg font-medium ">
                                        Name
                                    </Label>
                                    <Input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-2 p-3 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
                                        required
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="email" className="block text-lg font-medium">
                                        Email
                                    </Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-2 p-3 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
                                        required
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="message" className="block text-lg font-medium ">
                                        Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="mt-2 p-3 w-full rounded-md text-black border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
                                        rows="4"
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full mt-4 py-3 bg-[#b164fa]  font-semibold rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                                >
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}
