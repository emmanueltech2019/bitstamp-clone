"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Video from 'next-video'
import vidFrame from '../../(home)/hero/img/mockup-app.png'
import heroVid from '../../videos/simple_app_798e07c086.mp4'
import newImg from '../../nav/img/recurring.png'
import easeImg from './img/ease_of_trading_e2d0069e0b.webp'
import provenImg from './img/proven_reliability_3643ecefba.webp'
import instImg from './img/institutional_grade_32894f37ec.webp'
import crytoCatImg from '../../nav/img/item1.png'
import mobileAppsImg from '../../(home)/hero/img/mockup1.png'
import tradingImg from './img/trading_tools_e82bf5c7fd.webp'
import guyImage from './img/guy.png'
import dukasImage from './img/Dukascopy_888acd9202.webp'
import swissImage from './img/Swissquote_5fc90c4cef.webp'
import registerImg from './img/register_a0962b5bb3.webp'
import fundImg from './img/fund_43d0a9aed3.webp'
import tradeImg from './img/trade_777dbac7e3.webp'
import Link from 'next/link'



function page() {
  const CoinLibWidget = () => {
    return (
      <div
        style={{
          height: '669px',
          backgroundColor: '#ddd',
          overflow: 'hidden',
          boxSizing: 'border-box',
          border: '1px solid #fff',
          borderRadius: '4px',
          textAlign: 'right',
          lineHeight: '14px',
          fontSize: '12px',
          fontFeatureSettings: 'normal',
          textSizeAdjust: '100%',
          boxShadow: 'inset 0 -20px 0 0 #fff',
          padding: '0px',
          margin: '0px',
          width: '100%',
        }}
      >
        <div style={{ height: '649px', padding: '0px', margin: '0px', width: '100%' }}>
          <iframe
            src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=10&pref_coin_id=1505&graph=yes"
            width="100%"
            height="645px"
            style={{ border: '0', margin: '0', padding: '0' }}
          ></iframe>
        </div>
        <div
          style={{
            color: '#fff',
            lineHeight: '14px',
            fontWeight: '400',
            fontSize: '11px',
            boxSizing: 'border-box',
            padding: '2px 6px',
            width: '100%',
            fontFamily: 'Verdana, Tahoma, Arial, sans-serif',
          }}
        ></div>
      </div>
    );
  };
  
  return (
    <div className='bg-[#003b2f] pt-20 md:pt-36 overflow-x-hidden'>
      <section className='md:flex px-6 md:max-w-[95%] m-auto'>
        <div>
          <div className="head-text sm:w-[90%] md:w-[83%] lg:w-[70%]">
            <h1 className='hero-text text-white font-bold text-[48px] vsm:text-[50px] lg:text-[65px] text-pretty leading-[15mm] vsm:leading-[18mm] lg:leading-[22mm] animate__animated animate__pulse'>
              <mark className='bg-[#03fc9d] px-4 text-[#003b2f] '>Trade Beyond Borders</mark>
              <span> Unlocking Global Market Potentials</span>
            </h1>

            <p className='text-[#f2f2f2] text-[19px] mt-8 text-left vsm:w-[90%]'>
              Designed for simplicity, MirrorTradeX helps you feel good about crypto.
              Trusted Crypto Exchange Since 2011.
            </p>
          </div>

          <div className="buttons my-7">
            <Link href={"/login"}>
            <button className="get-started bg-[#03fc9d] text-[#003b2f] hover:bg-[#f2f2f2] w-full p-2 rounded font-semi-bold smm:w-[30%]">Get started</button>
            </Link>

            <div className='flex gap-3 my-6'>
              <svg viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="app-download-button__image w-[100px] h-30 vsm:w-[140px]" data-v-c2e37bad=""><g clipPath="url(#a)"><path d="M130.197 40H4.729A4.74 4.74 0 0 1 0 35.267V4.726A4.733 4.733 0 0 1 4.729 0h125.468C132.803 0 135 2.12 135 4.726v30.541c0 2.605-2.197 4.733-4.803 4.733Z" fill="#A6A6A6"></path><path d="M134.032 35.268a3.825 3.825 0 0 1-2.367 3.54 3.83 3.83 0 0 1-1.467.29H4.729a3.835 3.835 0 0 1-3.839-3.83V4.725A3.84 3.84 0 0 1 4.729.89h125.468a3.83 3.83 0 0 1 3.542 2.367c.193.466.292.964.292 1.468l.001 30.543Z" fill="#000"></path><path d="M30.128 19.784c-.029-3.223 2.639-4.791 2.761-4.864-1.511-2.203-3.853-2.504-4.676-2.528-1.967-.207-3.875 1.177-4.877 1.177-1.022 0-2.565-1.157-4.228-1.123-2.14.033-4.142 1.272-5.24 3.196-2.266 3.923-.576 9.688 1.595 12.859 1.086 1.553 2.355 3.287 4.016 3.226 1.625-.067 2.232-1.036 4.193-1.036 1.943 0 2.513 1.036 4.207.997 1.744-.028 2.842-1.56 3.89-3.127 1.255-1.78 1.759-3.533 1.779-3.623-.041-.014-3.387-1.291-3.42-5.154Zm-3.2-9.478c.874-1.093 1.472-2.58 1.306-4.089-1.265.056-2.847.875-3.758 1.944-.806.942-1.526 2.486-1.34 3.938 1.421.106 2.88-.717 3.792-1.793Zm26.717 21.198h-2.271l-1.244-3.909h-4.324l-1.185 3.909H42.41l4.284-13.308h2.646l4.305 13.308Zm-3.89-5.549L48.63 22.48c-.119-.355-.342-1.191-.671-2.507h-.04c-.2.838-.41 1.674-.632 2.507l-1.105 3.475h3.573Zm14.907.633c0 1.632-.441 2.922-1.323 3.869-.79.843-1.771 1.264-2.942 1.264-1.264 0-2.172-.454-2.725-1.362h-.04v5.055H55.5V25.067c0-1.026-.027-2.079-.079-3.159h1.875l.119 1.521h.04c.711-1.146 1.79-1.718 3.238-1.718 1.132 0 2.077.447 2.833 1.342.758.896 1.136 2.074 1.136 3.535Zm-2.172.078c0-.934-.21-1.704-.632-2.31-.461-.632-1.08-.948-1.856-.948-.526 0-1.004.176-1.431.523-.428.35-.708.807-.839 1.373-.066.264-.099.48-.099.65v1.6c0 .698.214 1.287.642 1.768.428.481.984.721 1.668.721.803 0 1.428-.31 1.875-.928.448-.619.672-1.435.672-2.449Zm13.209-.078c0 1.632-.441 2.922-1.324 3.869-.789.843-1.77 1.264-2.941 1.264-1.264 0-2.172-.454-2.724-1.362h-.04v5.055h-2.132V25.067c0-1.026-.027-2.079-.079-3.159h1.875l.119 1.521h.04c.71-1.146 1.789-1.718 3.238-1.718 1.131 0 2.076.447 2.834 1.342.755.896 1.134 2.074 1.134 3.535Zm-2.172.078c0-.934-.211-1.704-.633-2.31-.461-.632-1.078-.948-1.855-.948a2.22 2.22 0 0 0-1.432.523c-.428.35-.707.807-.838 1.373-.065.264-.099.48-.099.65v1.6c0 .698.214 1.287.64 1.768.428.48.984.721 1.67.721.803 0 1.428-.31 1.875-.928.448-.619.672-1.435.672-2.449Zm14.512 1.106c0 1.132-.393 2.053-1.182 2.764-.867.777-2.074 1.165-3.625 1.165-1.432 0-2.58-.276-3.449-.829l.494-1.777c.936.566 1.963.85 3.082.85.803 0 1.428-.182 1.877-.544.447-.362.67-.848.67-1.454 0-.54-.184-.995-.553-1.364-.367-.369-.98-.712-1.836-1.029-2.33-.869-3.494-2.142-3.494-3.816 0-1.094.408-1.991 1.225-2.689.814-.699 1.9-1.048 3.258-1.048 1.211 0 2.217.211 3.02.632l-.533 1.738c-.75-.408-1.598-.612-2.547-.612-.75 0-1.336.185-1.756.553a1.581 1.581 0 0 0-.533 1.205c0 .526.203.961.611 1.303.355.316 1 .658 1.936 1.027 1.145.461 1.986 1 2.527 1.618.539.616.808 1.387.808 2.307Zm7.049-4.264h-2.35v4.659c0 1.185.414 1.777 1.244 1.777.381 0 .697-.033.947-.099l.059 1.619c-.42.157-.973.236-1.658.236-.842 0-1.5-.257-1.975-.77-.473-.514-.711-1.376-.711-2.587v-4.837h-1.4v-1.6h1.4v-1.757l2.094-.632v2.389h2.35v1.602Zm10.603 3.119c0 1.475-.422 2.686-1.264 3.633-.883.975-2.055 1.461-3.516 1.461-1.408 0-2.529-.467-3.365-1.401-.836-.934-1.254-2.113-1.254-3.534 0-1.487.43-2.705 1.293-3.652.861-.948 2.023-1.422 3.484-1.422 1.408 0 2.541.467 3.396 1.402.818.907 1.226 2.078 1.226 3.513Zm-2.212.069c0-.885-.189-1.644-.572-2.277-.447-.766-1.086-1.148-1.914-1.148-.857 0-1.508.383-1.955 1.148-.383.634-.572 1.405-.572 2.317 0 .885.189 1.644.572 2.276.461.766 1.105 1.148 1.936 1.148.814 0 1.453-.39 1.914-1.168.393-.645.591-1.412.591-2.296Zm9.142-2.913a3.716 3.716 0 0 0-.672-.059c-.75 0-1.33.283-1.738.85-.355.5-.533 1.132-.533 1.895v5.035h-2.131l.02-6.574c0-1.106-.027-2.113-.08-3.021h1.857l.078 1.836h.059c.225-.631.58-1.139 1.066-1.52a2.578 2.578 0 0 1 1.541-.514c.197 0 .375.014.533.039v2.033Zm9.535 2.469c.005.324-.021.648-.078.967h-6.396c.025.948.334 1.673.928 2.173.539.447 1.236.671 2.092.671.947 0 1.811-.151 2.588-.454l.334 1.48c-.908.396-1.98.593-3.217.593-1.488 0-2.656-.438-3.506-1.313-.848-.875-1.273-2.05-1.273-3.524 0-1.447.395-2.652 1.186-3.613.828-1.026 1.947-1.539 3.355-1.539 1.383 0 2.43.513 3.141 1.539.563.815.846 1.823.846 3.02Zm-2.033-.553c.014-.632-.125-1.178-.414-1.639-.369-.593-.936-.889-1.699-.889-.697 0-1.264.289-1.697.869-.355.461-.566 1.014-.631 1.658l4.441.001ZM49.05 10.009c0 1.177-.353 2.063-1.058 2.658-.653.549-1.581.824-2.783.824-.596 0-1.106-.026-1.533-.078V6.982c.557-.09 1.157-.136 1.805-.136 1.145 0 2.008.249 2.59.747.652.563.979 1.368.979 2.416Zm-1.105.029c0-.763-.202-1.348-.606-1.756-.404-.407-.994-.611-1.771-.611-.33 0-.611.022-.844.068v4.889c.129.02.365.029.708.029.802 0 1.421-.223 1.857-.669.436-.446.656-1.096.656-1.95Zm6.964.999c0 .725-.207 1.319-.621 1.785-.434.479-1.009.718-1.727.718-.692 0-1.243-.229-1.654-.689-.41-.459-.615-1.038-.615-1.736 0-.73.211-1.329.635-1.794.424-.465.994-.698 1.712-.698.692 0 1.248.229 1.669.688.4.446.601 1.022.601 1.726Zm-1.087.034c0-.435-.094-.808-.281-1.119-.22-.376-.533-.564-.94-.564-.421 0-.741.188-.961.564-.188.311-.281.69-.281 1.138 0 .435.094.808.281 1.119.227.376.543.564.951.564.4 0 .714-.191.94-.574.194-.317.291-.693.291-1.128Zm8.943-2.352-1.475 4.714h-.96l-.611-2.047c-.152-.5-.279-1.01-.379-1.523h-.019a11.14 11.14 0 0 1-.379 1.523l-.649 2.047h-.971l-1.387-4.714h1.077l.533 2.241c.129.53.235 1.035.32 1.513h.019c.078-.394.207-.896.389-1.503l.669-2.25h.854l.641 2.202c.155.537.281 1.054.378 1.552h.029c.071-.485.178-1.002.32-1.552l.572-2.202h1.029v-.001Zm5.433 4.714H67.15v-2.7c0-.832-.316-1.248-.95-1.248a.946.946 0 0 0-.757.343 1.217 1.217 0 0 0-.291.808v2.796h-1.048v-3.366c0-.414-.013-.863-.038-1.349h.921l.049.737h.029c.122-.229.304-.418.543-.569.284-.176.602-.265.95-.265.44 0 .806.142 1.097.427.362.349.543.87.543 1.562v2.824Zm2.89 0h-1.047V6.556h1.047v6.877Zm6.17-2.396c0 .725-.207 1.319-.621 1.785-.434.479-1.01.718-1.727.718-.693 0-1.244-.229-1.654-.689-.41-.459-.615-1.038-.615-1.736 0-.73.211-1.329.635-1.794.424-.465.994-.698 1.711-.698.693 0 1.248.229 1.67.688.4.446.601 1.022.601 1.726Zm-1.088.034c0-.435-.094-.808-.281-1.119-.219-.376-.533-.564-.939-.564-.422 0-.742.188-.961.564-.188.311-.281.69-.281 1.138 0 .435.094.808.281 1.119.227.376.543.564.951.564.4 0 .713-.191.939-.574.195-.317.291-.693.291-1.128Zm6.16 2.362h-.941l-.078-.543h-.029c-.322.433-.781.65-1.377.65-.445 0-.805-.143-1.076-.427a1.34 1.34 0 0 1-.369-.96c0-.576.24-1.015.723-1.319.482-.304 1.16-.453 2.033-.446V10.3c0-.621-.326-.931-.979-.931-.465 0-.875.117-1.229.349l-.213-.688c.438-.271.979-.407 1.617-.407 1.232 0 1.85.65 1.85 1.95v1.736c0 .471.023.846.068 1.124Zm-1.088-1.62v-.727c-1.156-.02-1.734.297-1.734.95 0 .246.066.43.201.553.14.125.324.19.512.184.23 0 .445-.073.641-.218a.893.893 0 0 0 .38-.742Zm7.043 1.62h-.93l-.049-.757h-.029c-.297.576-.803.864-1.514.864-.568 0-1.041-.223-1.416-.669-.375-.446-.562-1.025-.562-1.736 0-.763.203-1.381.611-1.853.395-.44.879-.66 1.455-.66.633 0 1.076.213 1.328.64h.02V6.556h1.049v5.607c0 .459.012.882.037 1.27Zm-1.086-1.988v-.786a1.193 1.193 0 0 0-.408-.965 1.03 1.03 0 0 0-.701-.257c-.391 0-.697.155-.922.466-.223.311-.336.708-.336 1.193 0 .466.107.844.322 1.135.227.31.533.465.916.465.344 0 .619-.129.828-.388.202-.239.301-.527.301-.863Zm10.049-.408c0 .725-.207 1.319-.621 1.785-.434.479-1.008.718-1.727.718-.691 0-1.242-.229-1.654-.689-.41-.459-.615-1.038-.615-1.736 0-.73.211-1.329.635-1.794.424-.465.994-.698 1.713-.698.691 0 1.248.229 1.668.688.4.446.601 1.022.601 1.726Zm-1.086.034c0-.435-.094-.808-.281-1.119-.221-.376-.533-.564-.941-.564-.42 0-.74.188-.961.564-.188.311-.281.69-.281 1.138 0 .435.094.808.281 1.119.227.376.543.564.951.564.4 0 .715-.191.941-.574.193-.317.291-.693.291-1.128Zm6.721 2.362h-1.047v-2.7c0-.832-.316-1.248-.951-1.248a.942.942 0 0 0-.756.343 1.212 1.212 0 0 0-.291.808v2.796h-1.049v-3.366c0-.414-.012-.863-.037-1.349h.92l.049.737h.029c.128-.234.316-.43.543-.569.285-.176.602-.265.951-.265.439 0 .805.142 1.096.427.363.349.543.87.543 1.562v2.824Zm7.053-3.929h-1.154v2.29c0 .582.205.873.611.873.188 0 .344-.016.467-.049l.027.795c-.207.078-.479.117-.814.117-.414 0-.736-.126-.969-.378-.234-.252-.35-.676-.35-1.271V9.504h-.689v-.785h.689v-.864l1.027-.31v1.173h1.154l.001.786Zm5.548 3.929h-1.049v-2.68c0-.845-.316-1.268-.949-1.268-.486 0-.818.245-1 .735-.034.123-.051.25-.049.377v2.835h-1.047V6.556h1.047v2.841h.02c.33-.517.803-.775 1.416-.775.434 0 .793.142 1.078.427.355.355.533.883.533 1.581v2.803Zm5.723-2.58c0 .188-.014.346-.039.475h-3.143c.014.466.164.821.455 1.067.266.22.609.33 1.029.33.465 0 .889-.074 1.271-.223l.164.728c-.447.194-.973.291-1.582.291-.73 0-1.305-.215-1.721-.645-.418-.43-.625-1.007-.625-1.731 0-.711.193-1.303.582-1.775.406-.504.955-.756 1.648-.756.678 0 1.193.252 1.541.756.281.4.42.895.42 1.483Zm-1-.271a1.407 1.407 0 0 0-.203-.805c-.182-.291-.459-.437-.834-.437a.993.993 0 0 0-.834.427 1.58 1.58 0 0 0-.311.815h2.182Z" fill="#fff"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h135v40H0z"></path></clipPath></defs></svg>
              <svg viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="app-download-button__image w-[100px] h-30 vsm:w-[140px]" data-v-c2e37bad=""><g clipPath="url(#a)"><path d="M134 35.27a3.831 3.831 0 0 1-3.83 3.83H4.73a3.83 3.83 0 0 1-3.84-3.83V4.72A3.84 3.84 0 0 1 4.73.89H130.2a3.84 3.84 0 0 1 3.8 3.83v30.55Z" fill="#010101"></path><path d="M130 0H5a5 5 0 0 0-5 5v30a5 5 0 0 0 5 5h125a5.002 5.002 0 0 0 5-5V5a5.002 5.002 0 0 0-5-5Zm0 .8a4.21 4.21 0 0 1 4.2 4.2v30a4.198 4.198 0 0 1-4.2 4.2H5A4.2 4.2 0 0 1 .8 35V5A4.21 4.21 0 0 1 5 .79h125" fill="#A6A5A5"></path><path d="M130 0H5a5 5 0 0 0-5 5v30a5 5 0 0 0 5 5h125a5.002 5.002 0 0 0 5-5V5a5.002 5.002 0 0 0-5-5Zm0 .8a4.21 4.21 0 0 1 4.2 4.2v30a4.198 4.198 0 0 1-4.2 4.2H5A4.2 4.2 0 0 1 .8 35V5A4.21 4.21 0 0 1 5 .79h125" fill="#A6A5A5"></path><path d="M47.5 10.24a2.72 2.72 0 0 1-.75 2 2.89 2.89 0 0 1-2.2.88A3.09 3.09 0 0 1 41.43 10a3.09 3.09 0 0 1 3.12-3.13 3.27 3.27 0 0 1 1.25.23c.38.138.723.364 1 .66l-.55.56a1.85 1.85 0 0 0-.72-.53 2.43 2.43 0 0 0-.94-.19 2.27 2.27 0 0 0-1.66.68 2.35 2.35 0 0 0-.71 1.72 2.35 2.35 0 0 0 .67 1.72 2.271 2.271 0 0 0 1.66.68 2.21 2.21 0 0 0 1.45-.51 1.999 1.999 0 0 0 .69-1.38h-2.14v-.72h2.91c.027.148.04.3.04.45ZM52.11 7v.74h-2.73v1.9h2.46v.72h-2.46v1.9h2.73V13h-3.5V7h3.5Zm3.25.74V13h-.77V7.74h-1.68V7H57v.74h-1.64ZM60.79 13H60V7h.77l.02 6Zm3.42-5.26V13h-.77V7.74h-1.68V7h4.13v.74h-1.68ZM74.57 10a3 3 0 0 1-.88 2.23 3 3 0 0 1-2.2.9 3 3 0 0 1-2.19-.9 3 3 0 0 1-.89-2.23 3 3 0 0 1 .89-2.23 3.11 3.11 0 0 1 4.39 0 3 3 0 0 1 .88 2.23Zm-5.38 0a2.37 2.37 0 0 0 .66 1.72 2.32 2.32 0 0 0 3.28 0 2.352 2.352 0 0 0 .66-1.72 2.35 2.35 0 0 0-.66-1.72 2.32 2.32 0 0 0-3.28 0 2.37 2.37 0 0 0-.66 1.72Zm7.24 3h-.77V7h.93l2.92 4.67V7h.77v6h-.8l-3-4.89v1.15L76.43 13Z" fill="#fff" stroke="#fff" strokeWidth=".2" strokeMiterlimit="10"></path><path d="M68.22 21.75A4.26 4.26 0 1 0 72.49 26a4.19 4.19 0 0 0-4.27-4.25Zm0 6.83a2.58 2.58 0 1 1 2.4-2.58 2.461 2.461 0 0 1-2.4 2.58Zm-9.32-6.83A4.26 4.26 0 1 0 63.17 26a4.19 4.19 0 0 0-4.27-4.25Zm0 6.83A2.58 2.58 0 1 1 61.3 26a2.461 2.461 0 0 1-2.4 2.58Zm-11.08-5.52v1.8h4.32a3.71 3.71 0 0 1-1 2.27 4.42 4.42 0 0 1-3.34 1.32 4.8 4.8 0 1 1 0-9.6 4.62 4.62 0 0 1 3.26 1.29l1.27-1.27a6.3 6.3 0 0 0-4.53-1.82 6.61 6.61 0 1 0 0 13.21 6.07 6.07 0 0 0 4.61-1.85A6 6 0 0 0 54 24.18a6.274 6.274 0 0 0-.09-1.12h-6.09Zm45.31 1.4a4 4 0 0 0-3.64-2.71 4.001 4.001 0 0 0-4 4.25 4.162 4.162 0 0 0 4.22 4.26 4.229 4.229 0 0 0 3.55-1.89l-1.45-1a2.44 2.44 0 0 1-2.1 1.17 2.15 2.15 0 0 1-2.06-1.29l5.69-2.35-.21-.44Zm-5.8 1.42a2.338 2.338 0 0 1 2.23-2.49 1.66 1.66 0 0 1 1.58.91l-3.81 1.58ZM82.71 30h1.87V17.5h-1.87V30Zm-3.06-7.3h-.07a2.922 2.922 0 0 0-2.24-.95 4.26 4.26 0 0 0 0 8.51 2.87 2.87 0 0 0 2.24-1h.07v.61c0 1.63-.87 2.5-2.27 2.5a2.36 2.36 0 0 1-2.15-1.51l-1.62.67a4 4 0 0 0 3.77 2.52c2.19 0 4-1.29 4-4.43V22h-1.73v.7Zm-2.14 5.88a2.58 2.58 0 0 1 0-5.15A2.391 2.391 0 0 1 79.78 26a2.382 2.382 0 0 1-2.27 2.58Zm24.38-11.08h-4.47V30h1.86v-4.74h2.61a3.89 3.89 0 1 0 0-7.76Zm0 6h-2.61v-4.26h2.65a2.138 2.138 0 0 1 1.513 3.653 2.138 2.138 0 0 1-1.513.627l-.04-.02Zm11.54-1.79a3.498 3.498 0 0 0-3.33 1.91l1.65.69a1.783 1.783 0 0 1 1.71-.91 1.802 1.802 0 0 1 2 1.61v.12a4.181 4.181 0 0 0-1.95-.48c-1.78 0-3.6 1-3.6 2.82a2.894 2.894 0 0 0 1.952 2.618c.365.126.752.178 1.138.152a2.65 2.65 0 0 0 2.4-1.24h.06v1h1.8v-4.81c0-2.19-1.65-3.46-3.79-3.46l-.04-.02Zm-.23 6.85c-.61 0-1.46-.31-1.46-1.06 0-1 1.06-1.34 2-1.34a3.321 3.321 0 0 1 1.7.42 2.26 2.26 0 0 1-2.2 2l-.04-.02ZM123.82 22l-2.13 5.42h-.07L119.4 22h-2l3.33 7.58-1.9 4.21h2L125.9 22h-2.08ZM107 30h1.86V17.5H107V30Z" fill="#fff"></path><path d="m20.8 19.42-10.65 11.3a2.89 2.89 0 0 0 4.24 1.74l12-6.92-5.59-6.12Z" fill="#EA4535"></path><path d="m31.57 17.5-5.17-3-5.83 5.19 5.85 5.85 5.14-3a2.87 2.87 0 0 0 0-5.06l.01.02Z" fill="#F9BC15"></path><path d="M10.15 9.28c-.065.241-.098.49-.1.74V30c.002.25.035.499.1.74l11-11-11-10.46Z" fill="#557EBF"></path><path d="m20.88 20 5.51-5.51-12-6.94a2.89 2.89 0 0 0-4.27 1.72L20.88 20Z" fill="#36A852"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h135v40H0z"></path></clipPath></defs></svg>
            </div>
          </div>
        </div>


        <div className="relative w-full h-full left-[0px] top-0 md:top-[-24px] overflow-x-hidden md:overflow-x-visible">
          <div className=" relative w-fit z-10 mx-auto overflow-x-hidden flex justify-center">
            <Image src={vidFrame} alt="Phone Frame" className="w-[600px]   lg:w-[700px] h-[100vh] object-contain ms-3" />
            
          </div>
        </div>
      </section>

      <section className='new-offering bg-[#fff] px-6 py-8'>
        <div className='smm:flex md:max-w-[95%] m-auto'>
          <div className="new-text">
            <h1 className='text-[#003b2f] text-[32px] md:text-[48px] font-bold my-5'>
              <mark className='bg-[#03fc9d] px-4 text-[#003b2f]'>New Offering&#58;</mark>
              <span>Set up Recurring buy or sell!</span>
            </h1>

            <p className='text-[#003b2f] mb-2 text-[18px] md:text-[20px]'>
              Effortlessly schedule your transaction and build your crypto routine
            </p>

            <div className="start-now my-4 hidden smm:block smm:w-[380px]">
            <Link href={"/login"}>
              <button className="get-started bg-[#03fc9d] text-[#003b2f] w-full p-2 rounded font-semi-bold smm:w-[30%]">Start now</button>
            </Link>
            </div>
          </div>

          <div className="new-image my-4 vsm:w-[500px] md:w-[630px] self-end">
            <Image src={newImg} alt="alt" />
          </div>

          <div className="start-now my-4 smm:hidden">
            <button className="get-started bg-[#03fc9d] text-[#F3F3F3] hover:bg-[#003b2f] hover:text-[#F3F3F3] w-full p-2 rounded font-semi-bold smm:w-[30%]">Start now</button>
          </div>
        </div>
      </section>

      <section className='assets h-[100vh] bg-[#f2f2f2]'>
        <div className='md:max-w-[95%] m-auto'>
        <CoinLibWidget/>
        </div>
      </section>

      <section className="bg-[#03fc9d] px-6 py-6">
        <div className='md:max-w-[95%] m-auto grid grid-cols-1 smm:grid-cols-2 md:grid-cols-3 gap-[2rem] smm:gap-[5rem] items-center justify-center my-14 mt-[6rem]'>
          <div className="ease-of-trading">
            <header className='flex flex-col items-center gap-4'>
              {/* <Image src={easeImg} alt="alt" /> */}

              <h3 className='text-[20px] smm:text-[29px] text-[#003b2f] font-GT font-bold'>
                <mark className='bg-[#fff] px-2'>Ease</mark>
                <span> of Trading</span>
              </h3>
            </header>

            <ul className="info text-center my-5 text-[16px] text-[#003b2f] smm:text-left smm:text-[18px]">
              <li className='border-b-[2px] border-[#fff] py-4'>Intuitive interface</li>
              <li className='border-b-[2px] border-[#fff] py-4'>Instant deposit options</li>
              <li className='pt-3'>Cash out directly to your bank account</li>
            </ul>
          </div>

          <div className="igs">
            <header className='flex flex-col items-center gap-4'>
              {/* <Image src={instImg} alt="alt" /> */}

              <h3 className='text-[20px] smm:text-[29px] text-[#003b2f] font-GT font-bold'>
                <mark className='bg-[#fff] px-2'>Mirror</mark>
                <span> Trading</span>
              </h3>
            </header>

            <ul className="info text-center my-5 text-[16px] text-[#003b2f] smm:text-left smm:text-[18px]">
              <li className='border-b-[2px] border-[#fff] py-4'>skills and strategies of experienced traders </li>
              <li className='border-b-[2px] border-[#fff] py-4'>benefiting from expert analysis</li>
              <li className='pt-3'>Diversify investment portfolio</li>
            </ul>
          </div>

          <div className="proven-realiability">
            <header className='flex flex-col items-center gap-4'>
              {/* <Image src={provenImg} alt="alt" /> */}

              <h3 className='text-[20px] smm:text-[29px] text-[#003b2f] font-GT font-bold'>
                <mark className='bg-[#fff] px-2'>Proven</mark>
                <span> Reliability</span>
              </h3>
            </header>

            <ul className="info text-center my-5 text-[16px] text-[#003b2f] smm:text-left smm:text-[18px]">
              <li className='border-b-[2px] border-[#fff] py-4'>Serving customers since 2011</li>
              <li className='border-b-[2px] border-[#fff] py-4'>Live customer support</li>
              <li className='pt-3'>Industry-leading uptime</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='join bg-[#003b2f] px-6 py-6'>
        <div className='md:max-w-[95%] m-auto md:flex items-center justify-between lg:gap-[20rem] w-full'>
          <div className="join-text sm:w-[70%] md:w-[50%] lg:w-[30%]">
            <h1 className='text-[#fff] text-[32px] smm:text-[48px] font-GT font-bold my-5'>
              <span>Join MirrorTradeX&#39;s </span>
              <mark className='bg-[#003b2f] px-2 text-[#F3F3F3]'>crypto explorers</mark>
            </h1>

            <p className='text-[#fff] mb-2 text-[18px] md:text-[16px] py-2 md:w-[85%]'>
              Take a journey to crypto clarity with our handy guide&#58;
              Crypto Categories Unveiled
            </p>

            <div className="start-exploring my-4 smm:w-[470px]">
            <Link href={"/login"}>
              <button className="get-started bg-[#03fc9d] text-[#003b2f] hover:bg-[#003b2f] w-full p-2 rounded font-semi-bold smm:w-[30%]">Start exploring</button>
            </Link>
            </div>
          </div>

          <div className="join my-[3rem] md:w-[500px] lg:w-full self-end">
            <Image src={crytoCatImg} alt="alt" />
          </div>
        </div>
      </section>

      <section className='explore-apps bg-[#fff] px-6 py-6'>
        <div className='md:max-w-[100%] lg:max-w-[80%] m-auto md:flex md:flex-row-reverse md:justify-around items-center w-full'>
          <div className="explore-text sm:w-[70%] md:w-[50%] lg:w-[100%]">
            <h1 className='text-[#003b2f] text-[32px] smm:text-[48px] font-GT font-bold my-5'>
              <mark className='bg-[#03fc9d] px-2 text-[#F3F3F3]'>COMING SOON!!! </mark>
              <span>  Trade on the go with our mobile apps.</span>
            </h1>
            <h4 className='text-[#000] text-[18px] smm:text-[25px] font-GT font-bold'>
              Take control of your crypto anytime with the app that fits your experience
            </h4>
            <p className='text-[#000] mb-2 text-[16px] md:text-[18px] py-2 md:w-[95%] lg:w-[100%]'>
Coming soon....            </p>
            {/* <small className='text-[12px]'>
              Not yet available in UK & USA but coming soon.
            </small> */}

            <div className="start-exploring my-4 smm:w-[470px]">
              {/* <button className="get-started bg-[#03fc9d] text-[#003b2f] hover:bg-[#003b2f] hover:text-[#003b2f] w-full p-2 rounded font-semi-bold smm:w-[30%]">Explore the Apps</button> */}
            </div>
          </div>

          <div className="join my-[3rem] md:w-[500px] lg:w-full self-end">
            <Image src={mobileAppsImg} alt="alt" />
          </div>
        </div>
      </section>

      <section className='bg-[#003b2f] px-6 py-6'>
        <div className='md:max-w-[95%] m-auto sm:flex lg:justify-between w-full lg:gap-[6rem]'>
          <div className="advanced-text sm:w-[48%] lg:w-full">
            <h1 className='text-[#fff] text-[32px] smm:text-[48px] font-GT font-bold my-5'>
              <mark className='bg-[#03fc9d] px-2 text-[#003b2f]'>Advanced</mark>
              <span>trading tools</span>
            </h1>

            <div className="tools grid smm:grid-cols-2 smm:gap-[2.5rem]">
              <div>
                <h4 className='text-[#fff] text-[18px] smm:text-[23px] font-GT font-bold'>
                  Professional access, non-stop availability
                </h4>
                <p className='text-[#f2f2f2] mb-2 text-[16px] sm:text-[17px] py-27lg:w-[100%]'>
                  We provide premium access to crypto trading for both individuals and institutions through high liquidity, reliable order execution and constant uptime.
                </p>
              </div>

              <div>
                <h4 className='text-[#fff] text-[18px] smm:text-[23px] font-GT font-bold'>
                  A range of powerful APIs
                </h4>
                <p className='text-[#f2f2f2] mb-2 text-[16px] sm:text-[17px] py-2 lg:w-[100%]'>
                  Set up your own trading interface or deploy your algorithmic strategy with our high-performance FIX and HTTP APIs. Connect to our WebSocket for real-time data streaming.
                </p>
              </div>

              <div>
                <h4 className='text-[#fff] text-[18px] smm:text-[23px] font-GT font-bold'>
                  Constant support
                </h4>
                <p className='text-[#f2f2f2] mb-2 text-[16px] sm:text-[17px] py-2 lg:w-[100%]'>
                  Live customer support available to all customers worldwide by phone or email. Dedicated account managers for partners.
                </p>
              </div>
            </div>

            <div className="start-exploring my-4 smm:w-[470px] flex flex-col gap-3 md:flex-row smm:gap-3">
            {/* <Link href={"/register"}>
              <button className="get-started bg-[#fff] text-[#F3F3F3] w-full p-2 rounded font-semi-bold smm:w-[40%]">Register</button>
            </Link>
              <Link href={"/login"}>
              <button className="get-started bg-[#03fc9d] text-[#F3F3F3] hover:bg-[#f2f2f2] w-full p-2 rounded font-semi-bold smm:w-[30%]">Get started</button>
              </Link> */}
            </div>
          </div>

          <div className="chart self-end sm:w-[100%]">
            <Image src={tradingImg} alt="alt" />
          </div>
        </div>
      </section>

      <section className='buy-crypto bg-[#f2f2f2] px-6'>
        <div className='md:max-w-[95%] m-auto lg:flex lg:flex-row-reverse lg:justify-between'>
          <div className='py-6 md:my-[6rem]'>
            <h1 className='text-[#F3F3F3] text-[32px] smm:text-[48px] font-GT font-bold my-5'>
              <span className='text-[#003b2f]'>Buy crypto</span>
              <mark className='bg-[#03fc9d] px-2 text-[#003b2f]'>instantly</mark>
            </h1>

            <div className='grid smm:grid-cols-2 md:grid-cols-2 md:gap-[3rem] gap-2 smm:gap-x-8 mt-[4rem]'>
              <div>
                <h4 className='text-[#003b2f] text-[18px] smm:text-[23px] font-GT font-bold my-[11px]'>
                  Effortless ways to buy
                </h4>
                <p className='text-[#003b2f] mb-2 text-[16px] sm:text-[17px] py-2 lg:w-[100%]'>
                  Pay with credit, debit cards or Apple Pay, Google Pay (some exceptions apply).
                </p>
              </div>

              <div>
                <h4 className='text-[#003b2f] text-[18px] smm:text-[23px] font-GT font-bold my-[11px]'>
                  Cash out in seconds
                </h4>
                <p className='text-[#003b2f] mb-2 text-[16px] sm:text-[17px] py-2 lg:w-[100%]'>
                  Withdraw funds directly to your bank account quickly and securely.
                </p>
              </div>
            </div>
            <div className="get-started my-4 smm:w-[470px]">
            <Link href={"/login"}>
              <button className="get-started text-[#f3f3f3] bg-[#003b2f] hover:text-[#F3F3F3] hover:bg-[#03fc9d] w-full p-2 rounded font-semi-bold smm:w-[30%]">Get started</button>
            </Link>
            </div>

          </div>

          <div className='hidden lg:block w-[250%] h-[100%] relative top-0'>
            <Image src={guyImage} alt="alt" className=' object-cover h-[750px] overflow-x-visible' />
          </div>
        </div>
      </section>

      {/* <section className="bg-white py-5 px-5">
        <div className='md:max-w-[80%] lg:max-w-[50%] m-auto my-[6.5rem]'>
          <h4 className='text-[#F3F3F3] text-[20px] smm:text-[28px] text-center font-GT font-bold my-[11px] md:w-[50%] md:m-auto'>
            <mark className='bg-[#03fc9d] px-2 text-[#F3F3F3]'>Reliable</mark>
            <span> institutional access to crypto</span>
          </h4>

          <div className='flex flex-col md:flex-row md:justify-around justify-center items-center gap-7 my-[4.5rem] md:my-[r5.5em]'>
            <div className='dukascopy'>
              <Image src={dukasImage} alt="alt" />
            </div>

            <div className='swissquote'>
              <Image src={swissImage} alt="alt" />
            </div>
          </div>
        </div>
      </section> */}

      <section className="trading-steps bg-[#f2f2f2] py-5 px-5">
        <div className='md:max-w-[95%] m-auto md:flex md:items-center'>
          <div className='md:w-[40%] lg:w-full'>
            <h2 className='text-[#003b2f] text-[30px] smm:text-[47px] font-GT font-bold my-8 '>
              <mark className='bg-[#03fc9d] px-2 text-[#003b2f]'>3 steps</mark>
              <span> to start trading</span>
            </h2>

            <div className="get-started my-[3rem] text-center smm:text-left">
              <button className="get-started bg-[#03fc9d] text-[#003b2f] hover:bg-[#003b2f] hover:text-[#fff] w-[95%] smm:w-[30%] md:w-[130px] p-2 rounded font-semi-bold ">Get started</button>
            </div>
          </div>

          <div className="steps grid grid-cols-1 smm:grid-cols-2 md:grid-cols-3 justify-center items-center text-center w-[95%] m-auto gap-[2.3rem] md:gap-[6.1rem] md:my-[6rem]">
            <div className="register flex flex-col items-center smm:items-start gap-4">
              {/* <Image src={registerImg} alt="alt" /> */}

              <div className='smm:text-left'>
                <h3 className='text-[#003b2f] text-[20px] smm:text-[23px] font-GT font-bold'>1. Register</h3>
                <p className='text-[#003b2f] mb-2 text-[18px] sm:text-[17px] py-2 lg:w-[100%]'>
                  Choose the right account type and verify your identity.
                </p>
              </div>
            </div>

            <div className="fund flex flex-col items-center smm:items-start gap-4 md:mt-[44px]">
              {/* <Image src={fundImg} alt="alt" /> */}

              <div className='smm:text-left'>
                <h3 className='text-[#003b2f] text-[20px] smm:text-[23px] font-GT font-bold'>2. Fund</h3>
                <p className='text-[#003b2f] mb-2 text-[18px] sm:text-[17px] py-2 lg:w-[100%]'>
                  Use your debit or credit card or a range of global bank deposit methods.
                </p>
              </div>
            </div>

            <div className="trade flex flex-col items-center smm:items-start gap-4">
              {/* <Image src={tradeImg} alt="alt" /> */}

              <div className='smm:text-left'>
                <h3 className='text-[#003b2f] text-[20px] smm:text-[23px] font-GT font-bold'>3. Trade</h3>
                <p className='text-[#003b2f] mb-2 text-[18px] sm:text-[17px] py-2 lg:w-[100%]'>
                  Buy, sell and transfer leading cryptocurrencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page