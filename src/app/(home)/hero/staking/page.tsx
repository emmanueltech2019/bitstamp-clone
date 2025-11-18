import React from 'react'
import NavBar from '@/app/nav/NavBar'
import stakeImg from '../../../nav/img/9241380.png'
// import './bg.css'
import Image from 'next/image'
import Footer from '@/app/footer/Footer'

function page() {
    return (

        <div className='bg-[#f2f2f2]'>

            <section className='md:max-w-[95%] m-auto sm:flex sm:items-center'>
                <div className='px-6 pt-24 md:pt-60 overflow-x-hidden'>
                    <div className="head-text sm:w-[90%] md:w-[83%] lg:w-[70%]">
                        <h1 className='hero-text text-[#003b2f] font-bold text-[48px] vsm:text-[50px] lg:text-[65px] text-pretty leading-[15mm] vsm:leading-[18mm] lg:leading-[22mm]'>
                            <span>MirrorXTrade</span>
                            <mark className='bg-[#003b2f] px-4 text-[#f3f3f3]'>Earn</mark>
                            <span>&#45; Crypto Staking</span>
                        </h1>

                        <h3 className='font-GT text-[#003b2f text-[18px] md:text-[26px] font-bold mt-[2rem]'>
                            Unlock your crypto&#39;s potential
                        </h3>

                        <p className='text-[#003b2f] text-[18px] my-[1.5rem] text-left vsm:w-[90%]'>
                            Putting your crypto to work – the secure and easy way
                        </p>
                    </div>

                    <div className="start-staking my-4 smm:w-[470px]">
                        <button className="get-started text-[#F3F3F3] bg-[#003b2f] hover:bg-[#00C77B] hover:text-[#003b2f] w-full p-2 rounded font-semi-bold smm:w-[30%]">Start staking</button>
                    </div>

                    <div>
                        <small className='text-[#003b2f]'>MirrorXTrade Earn Staking is not available to customers in the UK, US, Singapore, Japan and Canada.</small>
                    </div>
                </div>

                <div className='w-[80%] m-auto pt-9'>
                    <Image src={stakeImg} alt="alt" />
                </div>
            </section>

            <section className='stake bg-[#f2f2f2]'>
                <div className='px-6 md:max-w-[95%] m-auto py-[5rem] md:py-[8rem] md:pt-[17rem]'>
                    <div className='w-[85%] m-auto bg-white rounded-lg'>
                        <table className='desktop w-full'>
                            <thead className='thead-des hidden md:block border-b p-4'>
                                <tr className='text-left'>
                                    <th className='w-[249px]'>Asset</th>
                                    <th className='w-[249px]'>Reward % APY</th>
                                    <th className='w-[249px]'>Duration Period</th>
                                    <th className='w-[249px]'>Reward Distribution</th>
                                    <th className='w-[249px]'></th>
                                </tr>
                            </thead>
                            <tbody className='tbody-des hidden md:block'>
                                <tr className='text-center border-b'>
                                    <td className='w-[280px] text-left p-4'>Ether</td>
                                    <td className='w-[280px] p-4'>3.10%</td>
                                    <td className='w-[280px] p-4'>Flexible</td>
                                    <td className='w-[280px] p-4'>Monthly</td>
                                    <td className='w-[280px] p-4'><button className="get-started text-[#F3F3F3] bg-[#003b2f] hover:bg-[#00C77B] hover:text-[#003b2f] w-[50%] p-2 rounded font-semi-bold">Stake</button></td>
                                </tr>
                                <tr className='text-center border-b'>
                                    <td className='w-[280px] text-left p-4'>Algorand</td>
                                    <td className='w-[280px] p-4'>1.60%</td>
                                    <td className='w-[280px] p-4'>Flexible</td>
                                    <td className='w-[280px] p-4'>Quaterly</td>
                                    <td className='w-[280px] p-4'><button className="get-started text-[#F3F3F3] bg-[#003b2f] hover:bg-[#00C77B] hover:text-[#003b2f] w-[50%] p-2 rounded font-semi-bold">Stake</button></td>
                                </tr>
                                <tr className='text-center border-b'>
                                    <td className='w-[280px] text-left p-4'>Cardano</td>
                                    <td className='w-[280px] p-4'>2.20%</td>
                                    <td className='w-[280px] p-4'>Flexible</td>
                                    <td className='w-[280px] p-4'>Weekly</td>
                                    <td className='w-[280px] p-4'><button className="get-started text-[#F3F3F3] bg-[#003b2f] hover:bg-[#00C77B] hover:text-[#003b2f] w-[50%] p-2 rounded font-semi-bold">Stake</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='w-full bg-white md:hidden rounded-lg'>
                        <table className='mobile w-full'>
                            <thead className='thead-mob '>
                                <tr className='text-left border-b'>
                                    <th className='w-[116px] p-4'>Asset</th>
                                    <th className='w-[116px] text-right p-4'>Reward % / Distribution</th>
                                    <th className='w-[116px] text-right p-4'>Duration Period</th>
                                </tr>
                            </thead>
                            <tbody className='tbody-mob'>
                                <tr className='text-left border-b'>
                                    <td className='w-[116px] p-5'>Ether</td>
                                    <td className='text-right p-4'>
                                        <p>3.10%</p>
                                        <p>Monthly</p>
                                    </td>
                                    <td className='text-right p-5'>Flexible</td>
                                </tr>
                                <tr className='border-b'>
                                    <td className='p-4'>Algorand</td>
                                    <td className='text-right p-4'>
                                        <p>1.60%</p>
                                        <p>Quaterly</p>
                                    </td>
                                    <td className='text-right p-4'>Flexible</td>
                                </tr>
                                <tr>
                                    <td className='p-4'>Cardano</td>
                                    <td className='text-right p-4'>
                                        <p>2.20%</p>
                                        <p>Weekly</p>
                                    </td >
                                    <td className='text-right p-4'>Flexible</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='text-left md:w-[85%] m-auto mt-3'>
                        <small className='text-[#003b2f]'>&#42;The rewards rate is based on the estimated protocol rate, which is subject to change. Enrollment in staking is available only in eligible jurisdictions and for eligible networks. Learn more below.</small>
                    </div>
                </div>
            </section>

            <section className='bg-[#fff]'>
                <div className='px-6 sm:max-w-[716px] m-auto py-[3rem] md:py-[6rem]'>
                    <h2 className='text-[#003b2f] text-[30px] sm:text-[48px] font-GT font-bold mb-[2rem]'>
                        <mark className='bg-[#003b2f] px-4 text-[#f3f3f3]'>Learn about</mark>
                        <span>Staking with MirrorXTrade Earn</span>
                    </h2>

                    <p className='text-[#003b2f] text-[17px]'>
                        Staking makes your assets work for you and enables
                        you to use your crypto to support operations on a
                        Proof-of-Stake (PoS) network by delegating your
                        crypto to a staking node operator that validates
                        transactions on the network. The underlying PoS
                        protocol issues rewards for your participation.
                        All rewards are determined by the protocol and
                        can change over time.
                    </p>
                    <p className='text-[#003b2f] text-[17px] my-4'>
                        When staking with MirrorXTrade Earn, you maintain full
                        ownership of your crypto assets. MirrorXTrade does not
                        impose any lock-up periods or conditions for staking
                        independently from the protocol, but lock-up periods
                        and conditions may apply and vary depending on the PoS
                        network. MirrorXTrade acts as a service provider and charges
                        a transparent commission of 15% on all rewards received
                        from the underlying protocol. The estimated rewards rate
                        reflects this commission.
                    </p>
                    <p className='text-[#003b2f] text-[17px]'>
                        Algorand staking is not available in the US,
                        Canada, Japan, Singapore and the UK.
                    </p>
                </div>
            </section>

            <section className='bg-[#f2f2f2]'>
                <div className='sm:max-w-[726px] m-auto text-center p-6 sm:p-[6rem]'>
                    <h2 className='text-[#003b2f] text-[30px] smm:text-[48px] font-GT font-bold mb-[2rem]'>
                        Get started
                    </h2>

                    <button type='submit' className='bg-[#003b2f] text-[#F3F3F3] p-2 rounded w-full smm:w-[200px] m-auto my-[1rem]'>Start staking now</button>
                    <p className='text-[#003b2f] text-[17px] my-4 w-full'>To find out more about MirrorXTrade Staking <strong className='underline'>click here to read our FAQ</strong></p>
                </div>
            </section>
            
        </div>
    )
}

export default page