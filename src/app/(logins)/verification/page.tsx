"use client"
import React,{ useState, FormEvent, useEffect, useRef } from 'react'
import './bg.css'
import Image from 'next/image'
import logo from '../../nav/img/logo.png'
import Link from 'next/link'
import axios from '../../../utils/axios';
import Swal from 'sweetalert2'


function Page() {
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

interface VerificationData {
  code: string;
}

  // const navigate = useNavigate(); // Initialize for routing
  const [formData, setFormData] = useState<VerificationData>({
    code: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); 
    console.log(formData)
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post('/user/verify', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      Toast.fire({
        icon: 'success',
        title: 'Account verified'
    }).then(() => {
      window.location.href='/dashboard'
    });
      // localStorage.setItem('token', response.data.token); 
    } catch (error: any) {
      console.error('Login error:', error.response?.data); 
      Toast.fire({
        icon: 'error',
        title: error.response?.data.message
    }).then(() => {
      window.location.reload()
    });
    }
  };


  // useEffect(() => {
  //   const getCode = async () => {
  //     try {
  //       const token = localStorage.getItem("token");
  //       const response = await axios.post('/user/everify', {},{
  //         headers: { Authorization: `Bearer ${token}` }
  //       });
  //       Toast.fire({
  //         icon:'success',
  //         title: 'Code sent to your email'
  //       })

  //     } catch (error: any) {
        
  //       console.error('Investment error:', error.response?.data);
  //     }
  //   };

  //   getCode();
  // }, []);
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current) return; // Prevent running twice in development

    const getCode = async () => {
      try {
        const token = localStorage.getItem("token");
        await axios.post('/user/everify', {}, {
          headers: { Authorization: `Bearer ${token}` }
        });
        Toast.fire({
          icon: 'success',
          title: 'Code sent to your email'
        });
      } catch (error:any) {
        console.error('Investment error:', error.response?.data.message);
      }
    };

    getCode();

    effectRan.current = true; // Set to true after effect has run

    // No need to reset effectRan.current in the cleanup function because
    // it should only run once during the component's lifecycle.
  }, []);
  return (
    <div className='bg-[#f2f2f2] px-5 py-6'>
      <header className='flex justify-between items-center'>
        <div className="logo">
          <Link href=""><Image src={logo} alt="alt" className='w-[135px]' /></Link>
        </div>

        <div className="register">
          <Link href={'./register'}><p className='text-[16px] text-[#217cf2] cursor-pointer'>Register</p></Link>
        </div>
      </header>

      <section className='login-form mt-[3rem] w-full'>
        <header className='text-center'>
          <h3 className='text-[20px] text-[#003b2f] my-3 font-GT'>Verify Email</h3>
          {/* <p className='text-[#6d6e7z1]'>Don&#39;t have an account? <Link href={'./register'}><span className='text-[#217cf2]'>Register now for free</span></Link></p> */}
          <p className='text-[#6d6e7z1]'>Enter code sent to email</p>
        </header>

        <div className='flex justify-center text-center my-[3rem] w-full'>
          <form className='flex flex-col gap-[2.5rem] w-[510px]' onSubmit={handleSubmit}>
          {/* {error && <div className="error">{error}</div>} */}
          
            <div className='relative w-full'>
              <input id='code' name="code" minLength={4} maxLength={4} required type="text" value={formData.code}  className='border-b border-[#a0a0a0] py-1 focus:outline-none bg-transparent focus:border-[#000] w-full peer' onChange={handleChange}/>
              <label htmlFor="code"  className='absolute text-[18px] text-[#6d6e71] font-light left-0 -top-1 peer-focus:text-[12px] peer-focus:-top-4 transition-all'>Code</label>
            </div>

{/*            
            <div className='terms'>
              <small className='text-[10px] text-[#6d6e71]'>This site is protected by hCaptcha and its <span className='text-[#217cf2] cursor-pointer'>Privacy Policy</span> and <span className='text-[#217cf2] cursor-pointer'>Terms of Service</span> apply</small>
            </div> */}
            {/* <Link href={"/dashboard"}> */}
              <button type='submit' className='bg-[#003b2f] text-[#F3F3F3] p-2 rounded w-[300px] m-auto'>Submit</button>
            {/* </Link> */}
          </form>
        </div>
      </section>
    </div>
  )
}

export default Page