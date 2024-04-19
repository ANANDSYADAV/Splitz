import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiRapid } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import '../index.css'

function Creator() {
    return (
        <div className="bg-pink-100 absolute top-0 h-screen">
            <div className="my-10 w-[80%] m-auto flex flex-col gap-4">
                <div className="text-4xl font-extrabold font-serif">
                    <u>About Creator</u>
                </div>
                <div className="text-xl">I am a dynamic individual who is passionate about technology. Putting my cent percent into whatever I do. Dedicated to learning, building, and improving continuously.</div>
            </div>
            <div className="w-[80%] md:w-[90%] xl:w-[80%] m-auto mb-10 flex flex-col gap-10">

                <div className="flex gap-10 flex-col md:flex-row items-center">
                    <img src="https://images.pexels.com/photos/21853645/pexels-photo-21853645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="anand"
                        className="h-[300px] md:h-[360px] lg:h-[350px] w-[300px] rounded-lg"
                    />
                    <div className="flex flex-col gap-4 md:gap-2 lg:gap-6 w-[100%] md:w-[80%] text-center md:text-start">
                        <div>
                            <h1 className="font-semibold text-4xl gotu">Anand Yadav</h1>
                            <h2 className="text-slate-700 text-2xl">NIT Agartala | CSE'25</h2>
                        </div>
                        <div className="text-xl">
                            A dedicated web developer and tech enthusiast with an insatiable curiosity for all things digital. As a student of the digital age, I'm on a mission to blend my passion for technology with the art of crafting seamless digital experiences. Join me on this exhilarating journey as we shape the future of the digital landscape together!
                        </div>
                        <div className="flex gap-12 text-4xl text-black justify-center md:justify-start">
                            <a target="_blank" href="https://www.linkedin.com/in/anand-yadav-08b7b2230/">
                                <FaLinkedin className="bg-pink-100 cursor-pointer opacity-[0.6] hover:opacity-[1]" />
                            </a>
                            <a target="_blank" href="https://github.com/ANANDSYADAV">
                                <FaGithub className="bg-pink-100 cursor-pointer opacity-[0.6] hover:opacity-[1]" />
                            </a>
                            <a target="_blank" href="https://rapidapi.com/user/anandyad2004">
                                <SiRapid className="bg-pink-100 cursor-pointer opacity-[0.6] hover:opacity-[1]" />
                            </a>
                            <a target="_blank" href="https://www.npmjs.com/~anandsyadav">
                                <SiNpm className="bg-pink-100 cursor-pointer opacity-[0.6] hover:opacity-[1]" />
                            </a>
                            <a target="_blank" href="https://www.instagram.com/anandsyadav257/?hl=en">
                                <FaSquareInstagram className="bg-pink-100 cursor-pointer opacity-[0.6] hover:opacity-[1]" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Creator