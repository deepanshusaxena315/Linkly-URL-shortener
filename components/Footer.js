import React from 'react'

const Footer = () => {
    return (
        <div className='text-white bg-[#4c044b] flex justify-around fixed bottom-0 w-full py-1'>
            <div className="logo font-bold text-2xl ">Linkly
                </div>
            <div className='flex '>
                Created with <img width={29} src="/heart.png" alt="" /> by&nbsp; <span className='hover:font-bold'> <a href="http://www.linkedin.com/in/deepanshu-saxena-60bbb1286"> Deepanshu </a></span>
            </div>
        </div>
    )
}

export default Footer