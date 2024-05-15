import React from 'react'
import './bg.css'
import Image from 'next/image'
import logo from '../img/bitstamp_logo-removebg-preview.png'
import Link from 'next/link'

function page() {
    return (
        <div className='bg-[#f2f2f2] px-5 py-6'>
            <header className='flex justify-between items-center'>
                <div className="logo">
                    <Link href="./hero"><Image src={logo} alt="alt" className='w-[135px]' /></Link>
                </div>

                <div className="register">
                <Link href={'./login'}><p className='text-[16px] text-[#217cf2]'>Log in</p></Link>
                </div>
            </header>


            <section className='login-form mt-[3rem] w-full'>
                <header className='text-center'>
                    <h3 className='text-[28px] text-[#003b2f] my-1 font-GT'>Welcome to Bitstamp</h3>
                    <p className='text-[#6d6e71]'>To begin, create your account</p>
                </header>

                <div className='flex justify-center text-center my-[3rem] w-full'>
                    <form className='flex flex-col w-[510px] gap-[2.4rem]'>
                        <div className="names grid gap-[2.4rem] md:grid-cols-2 md:gap-5">
                            <div className='relative w-full'>
                                <input id='first-name' type="text" className='border-b border-[#a0a0a0] py-1 focus:outline-none bg-transparent focus:border-[#000] w-full peer' />
                                <label htmlFor="first-name" className='absolute text-[18px] text-[#6d6e71] font-light left-0 -top-1 peer-focus:text-[12px] peer-focus:-top-4 transition-all'>First name</label>
                            </div>
                            <div className='relative w-full'>
                                <input id='last-name' type="text" className='border-b border-[#a0a0a0] py-1 focus:outline-none bg-transparent focus:border-[#000] w-full peer' />
                                <label htmlFor="last-name" className='absolute text-[18px] text-[#6d6e71] font-light left-0 -top-1 peer-focus:text-[12px] peer-focus:-top-4 transition-all'>Last name</label>
                            </div>
                        </div>

                        <div className='grid gap-[2.4rem] md:grid-cols-1'>
                            <div className='relative'>
                                <input id='email' type="email" className='border-b border-[#a0a0a0] py-1 focus:outline-none bg-transparent focus:border-[#000] w-full peer' />
                                <label htmlFor="email" className='absolute text-[18px] text-[#6d6e71] font-light left-0 -top-1 peer-focus:text-[12px] peer-focus:-top-4 transition-all'>Enter your email</label>
                            </div>
                            <div className='relative md:w-[50%]'>
                                <input id='date' type="email" className='border-b border-[#a0a0a0] py-1 focus:outline-none bg-transparent focus:border-[#000] w-full peer' />
                                <label htmlFor="date" className='absolute text-[18px] text-[#6d6e71] font-light left-0 -top-1 peer-focus:text-[12px] peer-focus:-top-4 transition-all'>Enter your date of birth</label>
                            </div>
                        </div>
                        <div className='terms'>
                            <small className='text-[10px] text-[#6d6e71]'>This site is protected by hCaptcha and its <span className='text-[#217cf2]'>Privacy Policy</span> and <span className='text-[#217cf2]'>Terms of Service</span> apply</small>
                        </div>
                        <button type='submit' className='bg-[#003b2f] text-[#03fc9d] p-2 rounded w-[300px] m-auto'>Log in</button>
                    </form>
                </div>
            </section>


        </div>
    )
}

export default page