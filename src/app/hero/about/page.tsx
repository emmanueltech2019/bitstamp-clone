import React from 'react'
import Image from 'next/image'
import securityImg from './img/customer_first_bd105177d2.webp'
import dedicationImg from './img/trusted_seal_19cccb92b3.webp'
import globalImg from './img/world_rocket_d45e9dcb7b.webp'



function page() {
    return (
        <div>
            <section className='bg-[#f2f2f2] overflow-x-hidden'>
                <div className='md:flex px-6 md:max-w-[95%] m-auto mt-24 md:mt-60'>
                    <div>
                        <div className="head-text sm:w-[90%] md:w-[83%] lg:w-[70%]">
                            <h1 className='hero-text text-white font-bold text-[48px] vsm:text-[50px] lg:text-[65px] text-pretty leading-[15mm] vsm:leading-[18mm] lg:leading-[22mm]'>
                                <mark className='bg-[#03fc9d] px-4 text-[#003b2f]'>Who we are</mark>
                            </h1>

                            <p className='text-[#003b2f] text-[18px] smm:text-[24px] font-GT font-bold my-[2rem] smm:w-[80%]'>Security. Transparency. Regulation. The Bitstamp Way since 2011.</p>
                        </div>

                        <div className='whoWeAre grid smm:grid-cols-2 md:grid-cols-3 gap-4 smm:gap-[4rem]'>
                            <div className="security my-5">
                                <Image src={securityImg} alt="alt"/>

                                <div className="securityText">
                                    <p className='text-[#003b2f] text-[17px]'>
                                    Security, transparency and regulation 
                                    are the pillars on which we have made 
                                    crypto securely accessible to everyone,
                                    and on which we now serve over 4 million 
                                    customers globally. Whether you&apos;re new 
                                    to crypto, a pro trader, or a financial 
                                    institution, we support you with a customer-first 
                                    approach.
                                    </p>
                                </div>
                            </div>

                            <div className="security my-5">
                                <Image src={dedicationImg} alt="alt"/>

                                <div className="securityText">
                                    <p className='text-[#003b2f] text-[17px]'>
                                    Our dedication to the secure evolution of the financial system is reflected by our AA rating as the world’s top-rated crypto exchange in CryptoCompare’s Exchange Benchmark report. We live by the mantra ‘Your crypto is always yours’ - all your assets are always available to you.
                                    </p>
                                </div>
                            </div>

                            <div className="security my-5">
                                <Image src={globalImg} alt="alt"/>

                                <div className="securityText">
                                    <p className='text-[#003b2f] text-[17px]'>
                                    Our global presence has allowed us to become one of the most regulated crypto exchanges in the world supported by around 500 people. We have offices in Luxembourg, Singapore, Slovenia, the UK and the USA and take pride in our live customer support.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page