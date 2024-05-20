"use client"
import React from 'react'
import { useState } from 'react'
import Accordion from './Components/Accordion'
import Link from 'next/link'

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
                            <Accordion title={<h2 className='font-GT font-bold text-[20px] text-[#003b2f]'>How to disable the Two-Factor Authentication code on your Bitstamp account?</h2>} answer={<div className='my-[2rem] text-[17px] text-[#003b2f] flex flex-col gap-5'>
                                <p>
                                    If you have issues with your Two-Factor Authentication code&#44; you can disable it on the following link&#58;<Link href=" https://www.bitstamp.net/onboarding/login/ " className='text-[#217cf2]'> https://www.bitstamp.net/onboarding/login/ </Link>where you proceed with your customer ID/email address and password login.
                                </p>
                                <p>
                                    When prompted to enter your 6-digit two-factor code, simply click the &#34;here&#34; link, below the code entry bar and follow the instructions.
                                </p>
                                <p>
                                    Should you require assistance with the procedure, feel free to send us an email with your issue, to the following address&#58;<Link href="support@bitstamp.net" className='text-[#217cf2]'> support@bitstamp.net </Link>
                                    or call us on the phone numbers that are listed at the bottom of this page. We are here for you with live customer support.
                                </p>
                            </div>

                            } />
                            <Accordion title={<h2 className='font-GT font-bold text-[20px] text-[#003b2f]'>Can you prepare a Statement for my account balance and transactions?</h2>} answer={<div className="my-[2rem] text-[17px] text-[#003b2f] flex flex-col gap-5">
                                <p>
                                    We can issue a User Confirmation Statement for you, which declares that you are one of Bitstamp&#39;s verified users and includes the information stated below. If you wish us to prepare this statement for you, feel free to contact us via our ticket system&#58;
                                    <Link href="https://www.bitstamp.net/support/" className='text-[#217cf2]'> https://www.bitstamp.net/support/</Link>
                                </p>
                                <p>
                                    We can also include the following information in the document&#58;
                                </p>
                                <ul className=' list-disc px-[1.3rem]'>
                                    <li>
                                        every transaction (every buy, sell, deposit, withdraw, etc.) on your Bitstamp account for the selected time period,
                                    </li>
                                    <li>
                                        your total Bitstamp account balance, broken down into specific currencies, on a specified date.
                                    </li>
                                </ul>
                                <p>
                                    In case you only need transactions and do not require UCS, you may also download them via our website. Login to your account first and follow this link&#58;<br />
                                    <Link href="https://www.bitstamp.net/account/transactions/" className='text-[#217cf2]'>https://www.bitstamp.net/account/transactions/</Link>, then click on Open export options. There you will be able to choose a specific date range, currencies and transaction types.
                                </p>
                                <p>
                                    <strong>Disclaimer&#58;</strong> Please note that Bitstamp does not provide tax advice. You should consult a tax advisor for your own specific tax obligations.
                                </p>
                            </div>} />
                            <Accordion title={<h2 className='font-GT font-bold text-[20px] text-[#003b2f]'>How do I change my personal information on my Bitstamp account?</h2>} answer={
                                <div className="my-[2rem] text-[17px] text-[#003b2f] flex flex-col gap-5">
                                    <div>
                                        <p>
                                            If you wish to change any of your personal information on your Bitstamp account (your name, address, email, phone number, etc.) we will need to assist you with that. Please contact us by <Link href="opening a support ticket" className='text-[#217cf2]'>opening a support ticket</Link> or via our email address&#58;<Link href="support@bitstamp.net." className='text-[#217cf2]'>support@bitstamp.net.</Link>
                                        </p>
                                        <p>
                                            We can confirm that&#58;
                                        </p>
                                        <ul className=' list-disc px-[1.3rem] text-[#003b2f]'>
                                            <li>We have no material exposure to Silvergate Bank.</li>
                                            <li>We had no connection to Silicon Valley Bank whatsoever.</li>
                                            <li>All Signature Bank customers are now customers of Signature Bridge Bank, which has the full backing of the US Government, and is operating as normal as of opening of business Monday 13th March. The corporate and customer deposits that we have with Signature Bridge Bank are safe and remain accessible to customers. You can read the FDIC announcement on Sunday 12th March <Link href="href" className='text-[#217cf2]'>here</Link></li>
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
                            <Accordion title={<h2 className='font-GT font-bold text-[20px] text-[#003b2f]'>Is Bitstamp affected by the recent banking situation?</h2>} answer={
                                <div className="my-[2rem] text-[17px] text-[#003b2f] flex flex-col gap-5">
                                    <p>
                                        Bitstamp and particularly our USD payment rails continue to operate normally despite the recent events in the banking sector. All fiat and crypto are accessible 24/7. We also continue to offer trading on all USD pairs currently available.
                                    </p>

                                </div>
                            } />
                            <Accordion title={<h2 className="font-GT font-bold text-[20px] text-[#003b2f]">Why do I have to wait after placing an Instant Purchase</h2>} answer={
                                <div className="my-[2rem] text-[17px] text-[#003b2f] flex flex-col gap-5">
                                    <p>
                                        While you can use the deposited funds for trading as soon as they have been credited to your Bitstamp account, you are unable to withdraw the deposited amount in any currency, as the funds are reserved for 7 business days (weekends and holidays excluded) due to deposit processing. This applies to ACH deposits and Instant Purchases, namely purchases with credit or debit card, (“Card Purchase”), Google Pay, Apple Pay, or other valid forms of payment.
                                    </p>
                                    <p>
                                        Once the deposit processing is completed, the reservation is automatically lifted and you should have no issues withdrawing the deposited amount in the currency of your choice.
                                    </p>
                                    <p>
                                        Alternatively, you may also fund your Bitstamp account via an alternative transfer method such as SEPA transfer or International Wire Transfer, for which we do not have a reservation period implemented, and you should be able to withdraw your funds as soon as they are credited to your Bitstamp account.
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