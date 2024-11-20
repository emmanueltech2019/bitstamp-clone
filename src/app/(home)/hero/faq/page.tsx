"use client"
import React from 'react'
import { useState } from 'react'
import Accordion from './Components/Accordion'

function page() {

    // const [toggle, setToggle] = useState(false)

    // function toggleAccordion() {
    //     setToggle(!toggle)
    // }

    return (
        <div>
            <section className="bg-[#f2f2f2]">
                <div className='px-6 md:max-w-[95%] m-auto pt-[8rem] pb-[4rem]'>
                    <header className='mb-[3.6rem]'>
                        <h1 className='text-[#003b2f] text-[28px] smm:text-[48px] font-GT font-bold'>FAQ</h1>
                    </header>

                    <div className='grid grid-cols-2 smm:grid-cols-2 smm:gap-x-[4rem]'>
                        <div>
                            <Accordion title={<h2 className='font-GT font-bold text-[20px] text-[#003b2f]'>How to disable the Two-Factor Authentication code on your MirrorTradeX account?</h2>} answer={<div className='my-[2rem] text-[17px] text-[#003b2f] flex flex-col gap-5'>
                                <p>
                                    If you have issues with your Two-Factor Authentication code&#44; you can disable by contacting us where you proceed with your customer ID/email address and password login.
                                </p>
                                <p>
                                    When prompted to enter your 6-digit two-factor code, simply click the &#34;here&#34; link, below the code entry bar and follow the instructions.
                                </p>

                            </div>

                            } />
                            <Accordion title={<h2 className='font-GT font-bold text-[20px] text-[#003b2f]'>Can you prepare a Statement for my account balance and transactions?</h2>} answer={<div className="my-[2rem] text-[17px] text-[#003b2f] flex flex-col gap-5">
                                <p>
                                    We can issue a User Confirmation Statement for you, which declares that you are one of MirrorTradeX&#39;s verified users and includes the information stated below. If you wish us to prepare this statement for you, feel free to contact us via our ticket system&#58;
                                </p>
                                <p>
                                    We can also include the following information in the document&#58;
                                </p>
                                <ul className=' list-disc px-[1.3rem]'>
                                    <li>
                                        every transaction (every buy, sell, deposit, withdraw, etc.) on your MirrorTradeX account for the selected time period,
                                    </li>
                                    <li>
                                        your total MirrorTradeX account balance, broken down into specific currencies, on a specified date.
                                    </li>
                                </ul>
                                <p>
                                    In case you only need transactions and do not require UCS, you may also download them via our website. 
                                     then click on Open export options. There you will be able to choose a specific date range, currencies and transaction types.
                                </p>
                                <p>
                                    <strong>Disclaimer&#58;</strong> Please note that MirrorTradeX does not provide tax advice. You should consult a tax advisor for your own specific tax obligations.
                                </p>
                            </div>} />
                            <Accordion title={<h2 className='font-GT font-bold text-[20px] text-[#003b2f]'>How do I change my personal information on my MirrorTradeX account?</h2>} answer={
                                <div className="my-[2rem] text-[17px] text-[#003b2f] flex flex-col gap-5">
                                    <div>
                                        <p>
                                            If you wish to change any of your personal information on your MirrorTradeX account (your name, address, email, phone number, etc.) we will need to assist you with that. 
                                        </p>
                                        <p>
                                            We can confirm that&#58;
                                        </p>
                                        <ul className=' list-disc px-[1.3rem] text-[#003b2f]'>
                                            <li>We have no material exposure to Silvergate Bank.</li>
                                            <li>We had no connection to Silicon Valley Bank whatsoever.</li>
                                        </ul>
                                    </div>
                                    <p>
                                        We are reviewing alternative banking services from our network of banking partners. This will ensure that, in the event that the transfer services provided by Signature Bridge Bank are reduced, we can provide safe, reliable alternatives.
                                    </p>
                                    <p>
                                        Since 2011, we have provided safe, secure, and reliable access to crypto markets, and continue to do so. We have a broad network of banking partners, globally, that allow customers to smoothly transfer their fiat currency in to and out of the exchange.
                                    </p>
                                    <p>
                                        Your crypto is always yours &#95; customers&#39; crypto and fiat funds are stored separately, 1:1 in custody across our secure bank accounts and custodial partners. The safety and security of customers&#39; assets is and always has been our top priority.
                                    </p>
                                </div>
                            } />
                        </div>
                        <div>
                            <Accordion title={<h2 className='font-GT font-bold text-[20px] text-[#003b2f]'>Is MirrorTradeX affected by the recent banking situation?</h2>} answer={
                                <div className="my-[2rem] text-[17px] text-[#003b2f] flex flex-col gap-5">
                                    <p>
                                        MirrorTradeX and particularly our USD payment rails continue to operate normally despite the recent events in the banking sector. All fiat and crypto are accessible 24/7. We also continue to offer trading on all USD pairs currently available.
                                    </p>

                                </div>
                            } />
                            <Accordion title={<h2 className="font-GT font-bold text-[20px] text-[#003b2f]">Why do I have to wait after placing an Instant Purchase</h2>} answer={
                                <div className="my-[2rem] text-[17px] text-[#003b2f] flex flex-col gap-5">
                                    <p>
                                        While you can use the deposited funds for trading as soon as they have been credited to your MirrorTradeX account, you are unable to withdraw the deposited amount in any currency, as the funds are reserved for 7 business days (weekends and holidays excluded) due to deposit processing. This applies to ACH deposits and Instant Purchases, namely purchases with credit or debit card, (“Card Purchase”), Google Pay, Apple Pay, or other valid forms of payment.
                                    </p>
                                    <p>
                                        Once the deposit processing is completed, the reservation is automatically lifted and you should have no issues withdrawing the deposited amount in the currency of your choice.
                                    </p>
                                    <p>
                                        Alternatively, you may also fund your MirrorTradeX account via an alternative transfer method such as SEPA transfer or International Wire Transfer, for which we do not have a reservation period implemented, and you should be able to withdraw your funds as soon as they are credited to your MirrorTradeX account.
                                    </p>
                                </div>
                            } />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page