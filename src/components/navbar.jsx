import React from 'react'

const Navbar = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="w-full absolute">
                <div className="max-w-7xl w-11/12 mx-auto px-4 py-4 flex justify-between text-white">
                    <div className='flex items-center cursor-pointer'>
                        <img
                            src="./assets/images/IITJ-Logo.png"
                            alt="netkit"
                            className="h-12"
                        />
                        <div className="text-2xl tracking-tighter">IITJ Family Tree</div>
                    </div>
                    <div className="max-w-3xl w-min flex justify-between whitespace-nowrap">
                        <ul className="w-full flex gap-x-6 justify-around items-center text-xl">
                            <li className="cursor-pointer border-b-2 border-transparent  hover:border-sky-500 px-2 py-1">
                                Home
                            </li>
                            <li className="cursor-pointer border-b-2 border-transparent  hover:border-sky-500 px-2 py-1">
                                Tree
                            </li>
                            <li className="cursor-pointer border-b-2 border-transparent  hover:border-sky-500 px-2 py-1">
                                About us
                            </li>
                            <li className="cursor-pointer border-b-2 border-transparent  hover:border-sky-500 px-2 py-1">
                                Contact us
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar