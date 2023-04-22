import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed flex justify-between w-full py-[20px] bg-black backdrop-filter backdrop-blur-lg bg-opacity-70 md:px-[50px]'>
            <div className="logo">R</div>
            <div className="menu ">
                <ul className='flex text-whiteHover font-Chivo text-[12px] gap-[30px]'>
                    <li><a className='hoverGan'><span className='text-primary'>1.</span> About</a></li>
                    <li><a className='hoverGan'><span className='text-primary'>2.</span> Experience</a></li>
                    <li><a className='hoverGan'><span className='text-primary'>3.</span> Project</a></li>
                    <li><a className='hoverGan'><span className='text-primary'>4.</span> Contact</a></li>
                    <li><a className='py-[8px] px-[20px] border-[2px] text-primary hover:bg-primaryDark rounded-[3px]'>Resume</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar