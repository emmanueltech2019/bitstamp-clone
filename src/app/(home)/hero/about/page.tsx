import React from 'react'
import Image from 'next/image'
import securityImg from './img/customer_first_bd105177d2.webp'
import dedicationImg from './img/trusted_seal_19cccb92b3.webp'
import globalImg from './img/world_rocket_d45e9dcb7b.webp'
import userImg from './img/user_bea636e20c.webp'
import bernImg from './img/bernice_smith_c0b7c01ef7.webp'
import jamImg from './img/james_sullivan_89f0810f14.webp'
import jeanImg from './img/jean_baptiste_graftieaux_1d9f81ea71.webp'
import mihImg from './img/miha_miklic_e3ecd6136f.webp'
import mihavidImg from './img/miha_vidmar_90a72d269a.webp'
import robImg from './img/robert_zagotta_d8593ff414.webp'
import stephImg from './img/stephen_david_bearpark_fc6cefb784.webp'
import Link from 'next/link'


function page() {
    return (
        <div>
            <section className='bg-[#f2f2f2] overflow-hidden'>
                <div className='md:flex ps-6 md:max-w-[95%] m-auto pb-[7.8rem]'>
                    <div className='lg:flex relative'>
                        <div className='lg:w-[70%]'>
                            <div className="head-text sm:w-[90%] md:w-[83%] lg:w-[70%] mt-24 md:mt-60">
                                <h1 className='hero-text text-white font-bold text-[48px] vsm:text-[50px] lg:text-[65px] text-pretty leading-[15mm] vsm:leading-[18mm] lg:leading-[22mm]'>
                                    <mark className='bg-[#003b2f] px-4 text-[#f3f3f3]'>Who we are</mark>
                                </h1>

                                <p className='text-[#003b2f] text-[18px] smm:text-[24px] font-GT font-bold my-[2rem] smm:w-[80%] lg:w-[59%]'>Security. Transparency. Regulation. The MirrorTradeX Way since 2011.</p>
                            </div>

                            <div className='whoWeAre grid smm:grid-cols-2 md:grid-cols-3 gap-4 smm:gap-[4rem]'>
                                <div className="security my-5">
                                    {/* <Image src={securityImg} alt="alt" /> */}

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
                                    {/* <Image src={dedicationImg} alt="alt" /> */}

                                    <div className="securityText">
                                        <p className='text-[#003b2f] text-[17px]'>
                                            Our dedication to the secure evolution of the financial system is reflected by our AA rating as the world’s top-rated crypto exchange in CryptoCompare’s Exchange Benchmark report. We live by the mantra ‘Your crypto is always yours’ - all your assets are always available to you.
                                        </p>
                                    </div>
                                </div>

                                <div className="security my-5">
                                    {/* <Image src={globalImg} alt="alt" /> */}

                                    <div className="securityText">
                                        <p className='text-[#003b2f] text-[17px]'>
                                            Our global presence has allowed us to become one of the most regulated crypto exchanges in the world supported by around 500 people. We have offices in Luxembourg, Singapore, Slovenia, the UK and the USA and take pride in our live customer support.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:block userimg absolute right-[-580px]">
                            {/* <Image src={userImg} alt="alt" /> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className='our-mission bg-[#fff]'>
                <div className='md:max-w-[95%] m-auto p-7 md:flex md:justify-between md:gap-[3rem] py-[7rem]'>
                    <header className='md:w-[340px]'>
                        <h2 className='text-[#003b2f] text-[30px] smm:text-[48px] font-GT font-bold mb-[2rem]'>
                            Our <mark className='bg-[#003b2f] text-[#f3f3f3] px-4'>mission</mark>
                        </h2>
                        <h4 className='font-GT text-[#003b2f] text-[18px] smm:text-[24px] font-bold'>
                            Shaping the new world of finance for the benefit of all.
                        </h4>
                    </header>

                    <div className="how mt-[2.8rem] md:mt-0 md:w-[50%]">
                        <div className="heading text-[20px] smm:text-[28px] text-[#003b2f] font-GT font-bold">
                            <h3>How we make crypto accessible to everyone</h3>
                        </div>

                        <div className='mt-[2.5rem] grid smm:grid-cols-2 md:grid-cols-1 gap-[3rem]'>
                            <div>
                                <h4 className='font-GT text-[#003b2f] text-[18px] smm:text-[24px] font-bold mb-[1rem]'>
                                    Industry-leading security
                                </h4>
                                <p className='text-[#003b2f] text-[17px]'>
                                    The protection of customer assets is crucial,
                                    and we have been a leader in the industry in
                                    security since our founding. All funds and crypto
                                    on MirrorTradeX are backed 100% and ready to be withdrawn
                                    at any time. They are stored in separate accounts from
                                    our corporate assets. Our commitment to advanced technology
                                    helps us maintain the industry-leading reliability standard
                                    with 99.9% uptime.
                                </p>
                            </div>

                            <div>
                                <h4 className='font-GT text-[#003b2f] text-[18px] smm:text-[24px] font-bold mb-[1rem]'>
                                    Transparency through internal and external audits
                                </h4>
                                <p className='text-[#003b2f] text-[17px]'>
                                    Our financial controls are reviewed annually by external parties and are also subject to regular internal audit reviews. This ensures that our control environment, along with all our procedures, is validated and continuously improved upon. Each year since 2016 MirrorTradeX has been audited by a big four global accounting firm. Find out more on The MirrorTradeX Way.
                                </p>
                            </div>

                            <div>
                                <h4 className='font-GT text-[#003b2f] text-[18px] smm:text-[24px] font-bold mb-[1rem]'>
                                    Regulation and compliance &#45; a never-ending process
                                </h4>
                                <p className='text-[#003b2f] text-[17px]'>
                                    MirrorTradeX holds 50 licenses and registrations in key jurisdictions globally, but we are also aware that being regulated is not just a matter of holding a certificate &#45; it is a daily process. In total we have around 180 people, roughly 29% of our staff, working in compliance, regulation, legal, risk management, security, and internal audit functions. They ensure we run things by the book.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className='our-team bg-[#003b2f]'>
                <div className='md:max-w-[93%] m-auto p-7 border-b-2 border-[#03fc9d1d] pb-[6rem]'>
                    <header className='mb-[6rem] mt-[2rem]'>
                        <h2 className='text-[#fff] text-[30px] smm:text-[48px] font-GT font-bold mb-[2rem]'>
                            <span>Our</span> <mark className='bg-[#03fc9d] text-[#003b2f] px-4'>executive</mark>
                            <span>team</span>
                        </h2>
                    </header>

                    <div className="team grid smm:grid-cols-2 lg:grid-cols-3 gap-[6em] smm:gap-[2em] smm:gap-y-[5rem]">
                        <div>
                            <Image src={jeanImg} alt="alt" className='rounded-md' />

                            <div className="text mt-[1.5rem] smm:grid-cols-2">
                                <Link href='#'>
                                    <h4 className='font-GT text-[#fff] text-[18px]'>Jean-Baptiste Graftieaux</h4>
                                </Link>
                                <strong className='text-[14px] text-[#6b807a]'>Global Chief Executive Officer</strong>

                                <p className='text-[17px] text-[#fff] my-[2rem]'>
                                    B brings his unique background of integrating digital platforms with financial services to help MirrorTradeX welcome investors of all types to participate in the future of finance.
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon text-[#fff]" width="32" height="32" data-v-f72832e9=""><path fill="currentColor" d="M12,0A12,12,0,1,0,24,12h0A12,12,0,0,0,12,0ZM8.64,17H6.3V9.52H8.64ZM7.41,8.6h0A1.31,1.31,0,0,1,7.15,6h.28a1.31,1.31,0,0,1,.28,2.6ZM18,17H15.35V13.15c0-1-.42-1.7-1.33-1.7a1.35,1.35,0,0,0-1.27.91,1.57,1.57,0,0,0-.06.61v4H10.07V9.52h2.62V10.7A2.41,2.41,0,0,1,15,9.46c1.67,0,3,1.08,3,3.39Z"></path></svg>
                            </div>
                        </div>

                        <div>
                            <Image src={stephImg} alt="alt" className='rounded-md' />

                            <div className="text mt-[1.5rem]">
                                <Link href='#'>
                                    <h4 className='font-GT text-[#fff] text-[18px]'>Stephen David Bearpark</h4>
                                </Link>
                                <strong className='text-[14px] text-[#6b807a]'>Chief Financial Officer</strong>

                                <p className='text-[17px] text-[#fff] my-[2rem]'>
                                    After gaining experience in various finance leadership roles, including corporate governance and control functions, Stephen is MirrorTradeX’s key person for financial expansion.
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon text-[#fff]" width="32" height="32" data-v-f72832e9=""><path fill="currentColor" d="M12,0A12,12,0,1,0,24,12h0A12,12,0,0,0,12,0ZM8.64,17H6.3V9.52H8.64ZM7.41,8.6h0A1.31,1.31,0,0,1,7.15,6h.28a1.31,1.31,0,0,1,.28,2.6ZM18,17H15.35V13.15c0-1-.42-1.7-1.33-1.7a1.35,1.35,0,0,0-1.27.91,1.57,1.57,0,0,0-.06.61v4H10.07V9.52h2.62V10.7A2.41,2.41,0,0,1,15,9.46c1.67,0,3,1.08,3,3.39Z"></path></svg>
                            </div>
                        </div>

                        <div>
                            <Image src={robImg} alt="alt" className='rounded-md' />

                            <div className="text mt-[1.5rem]">
                                <Link href='#'>
                                    <h4 className='font-GT text-[#fff] text-[18px]'>Robert Zagotta</h4>
                                </Link>
                                <strong className='text-[14px] text-[#6b807a]'>CEO, MirrorTradeX USA & Global Chief Commercial Officer, MirrorTradeX</strong>

                                <p className='text-[17px] text-[#fff] my-[2rem]'>
                                    With a unique mix of crypto and traditional financial services experience, Bobby brings an enviable track record of accelerating the transformation of businesses, and markets, globally.
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon text-[#fff]" width="32" height="32" data-v-f72832e9=""><path fill="currentColor" d="M12,0A12,12,0,1,0,24,12h0A12,12,0,0,0,12,0ZM8.64,17H6.3V9.52H8.64ZM7.41,8.6h0A1.31,1.31,0,0,1,7.15,6h.28a1.31,1.31,0,0,1,.28,2.6ZM18,17H15.35V13.15c0-1-.42-1.7-1.33-1.7a1.35,1.35,0,0,0-1.27.91,1.57,1.57,0,0,0-.06.61v4H10.07V9.52h2.62V10.7A2.41,2.41,0,0,1,15,9.46c1.67,0,3,1.08,3,3.39Z"></path></svg>
                            </div>
                        </div>

                        <div>
                            <Image src={mihImg} alt="alt" className='rounded-md' />

                            <div className="text mt-[1.5rem]">
                                <Link href='#'>
                                    <h4 className='font-GT text-[#fff] text-[18px]'>Miha Miklič</h4>
                                </Link>
                                <strong className='text-[14px] text-[#6b807a]'>Chief Technology Officer</strong>

                                <p className='text-[17px] text-[#fff] my-[2rem]'>
                                    Miha brings over a decade of experience in software development, strategic planning, and team leadership. Previously in the role of Deputy CTO, he led major technological initiatives, enhancing MirrorTradeX&#39;s operational efficiencies and pioneering key fintech innovations. Miha&#39;s leadership is pivotal in scaling our technical teams and advancing our technology to foster growth and adaptation in a rapidly evolving industry.
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon text-[#fff]" width="32" height="32" data-v-f72832e9=""><path fill="currentColor" d="M12,0A12,12,0,1,0,24,12h0A12,12,0,0,0,12,0ZM8.64,17H6.3V9.52H8.64ZM7.41,8.6h0A1.31,1.31,0,0,1,7.15,6h.28a1.31,1.31,0,0,1,.28,2.6ZM18,17H15.35V13.15c0-1-.42-1.7-1.33-1.7a1.35,1.35,0,0,0-1.27.91,1.57,1.57,0,0,0-.06.61v4H10.07V9.52h2.62V10.7A2.41,2.41,0,0,1,15,9.46c1.67,0,3,1.08,3,3.39Z"></path></svg>
                            </div>
                        </div>

                        <div>
                            <Image src={mihavidImg} alt="alt" className='rounded-md' />

                            <div className="text mt-[1.5rem]">
                                <Link href='#'>
                                    <h4 className='font-GT text-[#fff] text-[18px]'>Miha Vidmar</h4>
                                </Link>
                                <strong className='text-[14px] text-[#6b807a]'>Chief Product Officer</strong>

                                <p className='text-[17px] text-[#fff] my-[2rem]'>
                                    Miha is a Chief Product Officer in a complex financial ecosystem with a wide set of expertise, ranging from knowledge in software engineering as well as marketing. He has been stacking up skills in the fields of IT and banking for nearly two decades.
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon text-[#fff]" width="32" height="32" data-v-f72832e9=""><path fill="currentColor" d="M12,0A12,12,0,1,0,24,12h0A12,12,0,0,0,12,0ZM8.64,17H6.3V9.52H8.64ZM7.41,8.6h0A1.31,1.31,0,0,1,7.15,6h.28a1.31,1.31,0,0,1,.28,2.6ZM18,17H15.35V13.15c0-1-.42-1.7-1.33-1.7a1.35,1.35,0,0,0-1.27.91,1.57,1.57,0,0,0-.06.61v4H10.07V9.52h2.62V10.7A2.41,2.41,0,0,1,15,9.46c1.67,0,3,1.08,3,3.39Z"></path></svg>
                            </div>
                        </div>

                        <div>
                            <Image src={bernImg} alt="alt" className='rounded-md' />

                            <div className="text mt-[1.5rem]">
                                <Link href='#'>
                                    <h4 className='font-GT text-[#fff] text-[18px]'>Jean-Baptiste Graftieaux</h4>
                                </Link>
                                <strong className='text-[14px] text-[#6b807a]'>Bernice Smith</strong>

                                <p className='text-[17px] text-[#fff] my-[2rem]'>
                                    As the Chief People Officer, Bernice leads on developing the people and engagement agenda at MirrorTradeX, leading a diverse talent acquisition strategy and developing a dynamic distributed workforce culture as we enter new markets and our next decade of growth.
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon text-[#fff]" width="32" height="32" data-v-f72832e9=""><path fill="currentColor" d="M12,0A12,12,0,1,0,24,12h0A12,12,0,0,0,12,0ZM8.64,17H6.3V9.52H8.64ZM7.41,8.6h0A1.31,1.31,0,0,1,7.15,6h.28a1.31,1.31,0,0,1,.28,2.6ZM18,17H15.35V13.15c0-1-.42-1.7-1.33-1.7a1.35,1.35,0,0,0-1.27.91,1.57,1.57,0,0,0-.06.61v4H10.07V9.52h2.62V10.7A2.41,2.41,0,0,1,15,9.46c1.67,0,3,1.08,3,3.39Z"></path></svg>
                            </div>
                        </div>

                        <div>
                            <Image src={jamImg} alt="alt" className='rounded-md' />

                            <div className="text mt-[1.5rem]">
                                <Link href='#'>
                                    <h4 className='font-GT text-[#fff] text-[18px]'>James Sullivan</h4>
                                </Link>
                                <strong className='text-[14px] text-[#6b807a]'>Group General Counsel</strong>

                                <p className='text-[17px] text-[#fff] my-[2rem]'>
                                    James, a seasoned General Counsel with expertise in compliance, regulation, and operations across sectors like banking, cryptocurrency, funds, and real estate, oversees MirrorTradeX&#39;s legal compliance and brings over 15 years of extensive experience in financial services.
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon text-[#fff]" width="32" height="32" data-v-f72832e9=""><path fill="currentColor" d="M12,0A12,12,0,1,0,24,12h0A12,12,0,0,0,12,0ZM8.64,17H6.3V9.52H8.64ZM7.41,8.6h0A1.31,1.31,0,0,1,7.15,6h.28a1.31,1.31,0,0,1,.28,2.6ZM18,17H15.35V13.15c0-1-.42-1.7-1.33-1.7a1.35,1.35,0,0,0-1.27.91,1.57,1.57,0,0,0-.06.61v4H10.07V9.52h2.62V10.7A2.41,2.41,0,0,1,15,9.46c1.67,0,3,1.08,3,3.39Z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className='bg-[#003b2f]'>
                <div className='md:max-w-[97%] m-auto p-7 pb-[5rem]'>
                    <header className='mb-[3rem] mt-[3rem]'>
                        <h2 className='text-[#fff] text-[30px] smm:text-[48px] font-GT font-bold mb-[2rem]'>
                            Our Entities
                        </h2>
                    </header>

                    <div className="entities grid smm:grid-cols-2 md:grid-cols-4 gap-[4rem] lg:gap-[9rem]">
                        <div className='text-[#f2f2f2]'>
                            <strong className='text-[16px] '>MirrorTradeX Europe S.A.</strong>.
                            <p>
                                40, avenue Monterey
                                L-2163 Luxembourg
                                Luxembourg
                            </p>
                        </div>

                        <div className='text-[#f2f2f2]'>
                            <strong className='text-[16px] '>MirrorTradeX Ltd</strong>.
                            <p>
                                5 New Street Square
                                London EC4A 3TW
                                United Kingdom
                            </p>
                        </div>

                        <div className='text-[#f2f2f2]'>
                            <strong className='text-[16px] '>MirrorTradeX UK Limited</strong>.
                            <p>
                                5 New Street Square London EC4A 3TW United Kingdom
                            </p>
                        </div>

                        <div className='text-[#f2f2f2]'>
                            <strong className='text-[16px] '>MirrorTradeX USA Inc</strong>.
                            <p>
                                27 Union Square West, Suite 205
                                New York, NY 10003
                                United States
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#003b2f]'>
                <div className='md:max-w-[47%] m-auto p-7 pb-[3rem] lg:py-[8rem]'>
                    <h2 className='text-[#f3f3f3] text-[30px] smm:text-[48px] font-GT font-bold mb-[2rem] text-center'>
                        <mark className='bg-[#fff] px-[.7rem]'>Are you</mark>
                        <span> a believer?</span>
                    </h2>

                    <p className='text-[17px] text-[#f3f3f3] my-[2rem] text-center'>
                    We believe that opening the world of finance opens opportunities for everyone. That’s why we provide easy access to the world of crypto to empower everyone to benefit from the next generation of finance. If this strikes a chord with you – then come and join the MirrorTradeX team.
                    </p>

                    <div className='text-center w-full smm:w-[140px] m-auto'>
                        <button className='text-[#fff] bg-[#003b2f] w-full p-[.4rem] rounded hover:bg-[#f2f2f2] hover:text-[#003b2f]'>Join the team</button>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default page