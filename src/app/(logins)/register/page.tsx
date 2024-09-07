"use client"

import React, { useState, FormEvent, useEffect, Suspense } from 'react'
import './bg.css'
import Image from 'next/image'
import logo from '../../nav/img/logo.png'
import Link from 'next/link'
import axios from '../../../utils/axios';
import { useSearchParams } from 'next/navigation'
import Swal from 'sweetalert2'


const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RegisterContent />
        </Suspense>
    );
}

function RegisterContent() {
    const searchParams = useSearchParams();

    interface RegisterData {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        cpassword: string;
        refferalEmail: string;
        recaptchaToken?: string;
        token?: string;
    }

    const [formData, setFormData] = useState<RegisterData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        refferalEmail: '',
        cpassword: "",
        token: ""
    });

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const value = searchParams.get('referrer');
        setFormData((prevData) => ({ ...prevData, refferalEmail: value || '' }));
    }, [searchParams]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null); // Clear any previous errors

        if(formData.password !== formData.cpassword){
            Toast.fire({
                icon: 'error',
                title: 'Passwords do not match'
            })
        }else{
        
            try {
                console.log(formData)
                const response = await axios.post('/user/register', { ...formData }); // Your login API endpoint
                // localStorage.setItem('token', response.data.token)
                localStorage.setItem('token', response.data.token); // Example token storage
                    Toast.fire({
                        icon: 'success',
                        title: response.data.message
                    }).then(()=>{
                        window.location.href='/dashboard' // Redirect example (replace with your route)
                    })
                // if (response.data.newUser.everified=="unverified") {
                //     Toast.fire({
                //         icon: 'warning',
                //         title: "Verify account first"
                //     }).then(()=>{
                //         window.location.href='/verification'
                //     })
                // }else{
                //     localStorage.setItem('token', response.data.token); // Example token storage
                //     Toast.fire({
                //         icon: 'success',
                //         title: response.data.message
                //     }).then(()=>{
                //         window.location.href='/dashboard' // Redirect example (replace with your route)
                //     })
                // }
            } catch (error: any) {
                console.error('Register error:', error.response?.data);
                Toast.fire({
                    icon: 'error',
                    title: error.response?.data.message
                })
            }
        }
    };


    return (
        <div className='bg-[#f2f2f2] px-5 py-6'>
            <header className='flex justify-between items-center'>
                <div className="logo">
                    <Link href="./hero"><Image src={logo} alt="alt" className='w-[185px]' /></Link>
                </div>
                <div className="register">
                    <Link href={'./login'}><p className='text-[16px] text-[#217cf2]'>Log in</p></Link>
                </div>
            </header>
            <section className='login-form mt-[3rem] w-full'>
                <header className='text-center'>
                    <h3 className='text-[28px] text-[#003b2f] my-1 font-GT'>Welcome to MirrorTradeX</h3>
                    <p className='text-[#6d6e71]'>To begin, create your account</p>
                </header>
                <div className='flex justify-center text-center my-[3rem] w-full'>
                    <form className='flex flex-col w-[510px] gap-[2.4rem]' onSubmit={handleSubmit}>
                        <div className='flex flex-row'>
                            <div className='relative w-full'>
                                <input id='first-name' required value={formData.firstName} onChange={handleChange} name='firstName' type="text" className='border-b border-[#a0a0a0] py-1 focus:outline-none bg-transparent focus:border-[#000] w-full peer' />
                                <label htmlFor="first-name" className='absolute text-[18px] text-[#6d6e71] font-light left-0 -top-1 peer-focus:text-[12px] peer-focus:-top-4 transition-all'>First Name</label>
                            </div>
                            <div className='relative w-full'>
                                <input id='last-name' value={formData.lastName} required onChange={handleChange} name='lastName' type="text" className='border-b border-[#a0a0a0] py-1 focus:outline-none bg-transparent focus:border-[#000] w-full peer' />
                                <label htmlFor="last-name" className='absolute text-[18px] text-[#6d6e71] font-light left-0 -top-1 peer-focus:text-[12px] peer-focus:-top-4 transition-all'>Last Name</label>
                            </div>

                        </div>
                        <div className='relative w-full'>
                            <input id='email' required value={formData.email} onChange={handleChange} name='email' type="email" className='border-b border-[#a0a0a0] py-1 focus:outline-none bg-transparent focus:border-[#000] w-full peer' />
                            <label htmlFor="email" className='absolute text-[18px] text-[#6d6e71] font-light left-0 -top-1 peer-focus:text-[12px] peer-focus:-top-4 transition-all'>Enter your email</label>
                        </div>
                        <div className='flex flex-row'>
                            <div className='relative w-full'>
                                <input id='password' required value={formData.password} type="password" onChange={handleChange} name='password' className='border-b border-[#a0a0a0] py-1 focus:outline-none bg-transparent focus:border-[#000] w-full peer' />
                                <label htmlFor="password" className='absolute text-[18px] text-[#6d6e71] font-light left-0 -top-1 peer-focus:text-[12px] peer-focus:-top-4 transition-all'>Password</label>
                            </div>
                            <div className='relative w-full'>
                                <input id='cpassword' required value={formData.cpassword} type="password" onChange={handleChange} name='cpassword' className='border-b border-[#a0a0a0] py-1 focus:outline-none bg-transparent focus:border-[#000] w-full peer' />
                                <label htmlFor="cpassword" className='absolute text-[18px] text-[#6d6e71] font-light left-0 -top-1 peer-focus:text-[12px] peer-focus:-top-4 transition-all'>Confirm Password</label>
                            </div>

                        </div>
                        <div className="relative w-full">
                            <input id='refferalEmail' value={formData.refferalEmail} onChange={handleChange} name='refferalEmail' type="text" className={`border-b border-[#a0a0a0] py-1 ${formData.refferalEmail ? 'bg-[#ddd] disabled' : 'bg-transparent'} focus:outline-none focus:border-[#000] w-full peer`} disabled={!!formData.refferalEmail} />
                            <label htmlFor="refferalEmail" className='absolute text-[18px] text-[#6d6e71] font-light left-0 -top-1 peer-focus:text-[12px] peer-focus:-top-4 transition-all'>Refferal Email (optional)</label>
                        </div>
                        <div className='terms'>
                            <small className='text-[10px] text-[#6d6e71]'>This site is protected by reCAPTCHA and its <span className='text-[#217cf2]'>Privacy Policy</span> and <span className='text-[#217cf2]'>Terms of Service</span> apply</small>
                        </div>
                        <button type='submit' className='bg-[#003b2f] text-[#F3F3F3] p-2 rounded w-[300px] m-auto'>Register</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Page
