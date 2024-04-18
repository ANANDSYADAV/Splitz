import { MdDataArray } from "react-icons/md";
import { MdCalculate } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";

function AboutSplitz() {
    return (
        <div className="w-screen">
            <div className='flex flex-col m-5 select-none items-center'>
                <div className='w-full h-screen mx-auto flex flex-col gap-12 text-4xl gotu font-extrabold items-center justify-center'>
                    <div>
                        <div>
                            This page gives a brief overview of Splitz.
                        </div>
                        <div>
                            The better you know it, the better you use it!
                        </div>
                    </div>
                    <img src="image3.png" alt="app" className='h-[350px] w-[600px]' />
                </div>
                <div className="h-screen w-screen bg-black flex flex-col gap-10 justify-center items-center">
                    <div className="flex flex-col gap-12 text-5xl gotu font-extrabold text-white">Features</div>

                    <div className="flex gap-8 justify-center">

                        <div className="bg-gray-400 w-[350px] h-[350px] rounded-e-3xl rounded-es-3xl p-5 text-3xl font-semibold roboto flex flex-col gap-5 text-green-900">
                            <MdDataArray className="text-7xl" />
                            Data saving
                            <div className="text-3xl font-medium font-serif text-white">
                                Saves the data entered by the user and works accordingly.
                            </div>
                        </div>

                        <div className="bg-gray-400 w-[350px] h-[350px] rounded-e-3xl rounded-es-3xl p-5 text-3xl font-semibold roboto flex flex-col gap-5 text-green-900">
                            <MdCalculate className="text-7xl" />
                            Calculation
                            <div className="text-3xl font-medium font-serif text-white">
                                Calculates appropriate part of each for person as per given data.
                            </div>
                        </div>

                        <div className="bg-gray-400 w-[350px] h-[350px] rounded-e-3xl rounded-es-3xl p-5 text-3xl font-semibold roboto flex flex-col gap-5 text-green-900">
                            <MdOutlinePayment className="text-7xl" />
                            Payment
                            <div className="text-3xl font-medium font-serif text-white">
                                Allows you to pay to other group mates via Razorpay payment gateway.
                            </div>
                        </div>

                    </div>
                </div>
                <div className="h-screen w-screen flex gap-12 justify-center items-center">
                    <div className="bg-slate-300 rounded-3xl py-12 px-10 flex flex-col gap-10 w-[35%]">
                        <div className="text-4xl gotu font-semibold">Well, by now, you know all the features provided by Splitz.</div>
                        <div className="text-2xl roboto">It makes it easy to track each contributor's part and helps you pay them without changing platforms.</div>
                    </div>
                    <div>
                        <img src="image2.png" alt="task_done" className="size-[500px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSplitz