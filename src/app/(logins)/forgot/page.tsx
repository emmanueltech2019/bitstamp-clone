import React from 'react'
import './bg.css'
import Image from 'next/image'
import logo from '../../nav/img/logo.png'
import Link from 'next/link'


function page() {
    return (
        <div className='bg-[#f2f2f2] px-5 py-6'>
            <header className='flex justify-between items-center'>
                <div className="logo">
                    <Link href="./hero"><Image src={logo} alt="alt" className='w-[135px]' /></Link>
                </div>

                <div className="login">
                    <Link href={'./login'}><p className='text-[16px] text-[#217cf2] cursor-pointer'>Log in</p></Link>
                </div>
            </header>

            <section className='login-form mt-[3rem] w-full'>
                <header className='text-center'>
                    <h3 className='text-[26px] text-[#003b2f] my-3 font-GT font-bold'>Lost Login Information</h3>
                    <p className='text-[18px] text-[#6d6e71]'>Enter your email below.</p>
                </header>

                <div className='flex justify-center text-center my-[7rem] w-full'>
                    <form className='flex flex-col gap-[2.5rem] w-[510px]'>
                        <div className='relative w-full'>
                            <input id='email' type="email" className='border-b border-[#a0a0a0] py-1 focus:outline-none bg-transparent focus:border-[#000] w-full peer' />
                            <label htmlFor="email" className='absolute text-[18px] text-[#6d6e71] font-light left-0 -top-1 peer-focus:text-[12px] peer-focus:-top-4 transition-all'>Email</label>
                        </div>

                        <div className='terms'>
                            <small className='text-[10px] text-[#6d6e71]'>This site is protected by hCaptcha and its <span className='text-[#217cf2] cursor-pointer'>Privacy Policy</span> and <span className='text-[#217cf2] cursor-pointer'>Terms of Service</span> apply</small>
                        </div>
                        <button type='submit' className='bg-[#003b2f] text-[#F3F3F3] p-2 rounded w-[300px] m-auto'>Recover</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default page