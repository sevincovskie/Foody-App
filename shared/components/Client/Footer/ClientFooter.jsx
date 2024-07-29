import Image from 'next/image'
import React from 'react'

function ClientFooter() {
  return (
    <>
      <footer className="bg-[#181617] w-full mt-[60px] h-[385px] flex justify-center gap-[70px] pt-[130px] sm:ps-[60px] xs:ps-[60px]">
        <div className="flex flex-col justify-start">
          <Image src="../images/svg/logo.svg" width={92} height={32} alt="Foody Logo" />
          <p className="text-[#ffffff] max-w-[300px] mt-[5px]">
            Lorem ipsum is placeholder text commonly used in the graphic.
          </p>
          <div className="flex gap-[16px] mt-[10px]">
            <div className="w-[50px] h-[50px] text-white  flex justify-center items-center rounded-full">
              <Image src="../images/ClientSvg/facebook.svg" width={43} height={43} alt="Facebook Icon" />
            </div>
            <div className="w-[50px] h-[50px] bg-[#141313] flex justify-center items-center rounded-full">
              <Image src="../images/ClientSvg/instagram.svg" width={30} height={30} alt="Instagram Icon" />
            </div>
            <div className="w-[50px] h-[50px] bg-[#040404] flex justify-center items-center rounded-full">
              <Image src="../images/ClientSvg/x.svg" width={32} height={32} alt="X Icon" />
            </div>
          </div>
        </div>
        <div className="xl:flex gap-[100px] md:flex sm:hidden xs:hidden">
          <div className="flex flex-col gap-[10px] justify-start mt-[10px]">
            <a href="#">
              <p className="text-[23px] text-white font-bold font-['Roboto']">Popular</p>
            </a>
            <a href="#">
              <p className="text-[16px] text-[#BDBDBD] font-['Roboto']">Fast Food</p>
            </a>
            <a href="#">
              <p className="text-[16px] text-[#BDBDBD] font-['Roboto']">Pizza</p>
            </a>
            <a href="#">
              <p className="text-[16px] text-[#BDBDBD] font-['Roboto']">Shushi</p>
            </a>
            <a href="#">
              <p className="text-[16px] text-[#BDBDBD] font-['Roboto']">Salad</p>
            </a>
          </div>
          <div className="flex flex-col gap-[10px] justify-start mt-[10px]">
            <a href="#">
              <p className="text-[23px] text-white font-bold font-['Roboto']">Cash</p>
            </a>
            <a href="#">
              <p className="text-[16px] text-[#BDBDBD] font-['Roboto']">Delivery</p>
            </a>
            <a href="#">
              <p className="text-[16px] text-[#BDBDBD] font-['Roboto']">Payment</p>
            </a>
            <a href="#">
              <p className="text-[16px] text-[#BDBDBD] font-['Roboto']">About the store</p>
            </a>
          </div>
          <div className="flex flex-col gap-[10px] justify-start mt-[10px]">
            <a href="#">
              <p className="text-[23px] text-white font-bold font-['Roboto']">Help</p>
            </a>
            <a href="#">
              <p className="text-[16px] text-[#BDBDBD] font-['Roboto']">Contacts</p>
            </a>
            <a href="#">
              <p className="text-[16px] text-[#BDBDBD] font-['Roboto']">Purchase returns</p>
            </a>
            <a href="#">
              <p className="text-[16px] text-[#BDBDBD] font-['Roboto']">Buyer help</p>
            </a>
          </div>
        </div>
      </footer>
      <div className="bg-[#181617] text-center text-white">
        <p>All rights reserved © 2003-2022 Foody TERMS OF USE | Privacy Policy</p>
      </div>
    </>
  )
}

export default ClientFooter


