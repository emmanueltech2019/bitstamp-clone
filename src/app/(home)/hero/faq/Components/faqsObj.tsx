import React from 'react';
import Link from 'next/link';
export const faqs = [
    {
        question: 'How to disable the Two-Factor Authentication code on your Bitstamp account?',
        answerP1: <div><p>If you have issues with your Two-Factor Authentication code, you can disable it on the following link&#58; https://www.bitstamp.net/onboarding/login/ where you proceed with your customer ID/email address and password login.</p> <p>When prompted to enter your 6-digit two-factor code, simply click the here link, below the code entry bar and follow the instructions.</p> <p>Should you require assistance with the procedure, feel free to send us an email with your issue, to the following address: support@bitstamp.net or call us on the phone numbers that are listed at the bottom of this page. We are here for you with live customer support.</p></div>,
    },

    {
        question: 'Can you prepare a Statement for my account balance and transactions?',
        answerP1: <div>
            <p>We can issue a User Confirmation Statement for you, which declares that you are one of Bitstamp&#39;s verified users and includes the information stated below. If you wish us to prepare this statement for you, feel free to contact us via our ticket system&#58;<Link href="href">https://www.bitstamp.net/support/</Link></p>
        </div>
    }
    
]