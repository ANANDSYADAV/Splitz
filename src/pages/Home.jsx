import '../index.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='h-screen w-full select-none'>
            <div className='h-full w-full bg-green-600 flex justify-center items-center gap-5'>
                <div className='flex flex-col gap-8 justify-center items-center'>
                    <div className="text-white roboto text-6xl font-extrabold">Welcome to Splitz</div>
                    <div className="text-white roboto text-4xl font-bold">One platform, all your split-wise solutions!</div>
                    <Link to='/use_splitz' className='w-[150px] px-5 py-2 bg-gray-400 text-center font-semibold text-xl rounded-2xl hover:bg-pink-400 text-black cursor-pointer'>Get started</Link>
                </div>
                <div>
                    <img src="image1.png" alt="coins" className="h-[500px] w-[450px]" />
                </div>
            </div>
            
        </div>
    )
}

export default Home