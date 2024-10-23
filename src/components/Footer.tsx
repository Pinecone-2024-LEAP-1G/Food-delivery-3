import React from 'react';
import FacebookIcon from "./icons/FacebookIcon"
import WhitePineIcon from "./icons/WhitePineIcon"
import InstaIcon from "./icons/InstaIcons"
import Twitter from "./icons/Twitter"
import SingleLine from './icons/SingleLine';


const Footer: React.FC = () => {
    return (
       
        <div 
            className="max-w-[1440px] h-[545px]  bg-[#18BA51] " 
            style={{
                backgroundImage: "url('Footer.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center", 
                backgroundSize: "cover",
                margin: "auto",
            }}
        >
           
           
            <div className='flex max-w-[1200px] h-[322px] justify-center m-auto pt-[114px] pb-[109px] '>
                <div className='flex flex-col'>
                    <div>
                <div className='flex gap-2 justify-center '>
            <WhitePineIcon/>
            <p className='font-bold text-[20px] text-white'>Food Delivery</p>
            </div>
            <div className='flex text-white text-[16px] gap-[96px] mt-[40px] max-w-[1200px]'>
                <p><u>Нүүр</u></p>
                <p><u>Холбоо барих</u></p>
                <p><u>Хоолны цэс</u></p>
                <p><u>Үйлчилгээний нөхцөл</u></p>
                <p><u>Хүргэлтийн бүс</u></p>
                <p><u>Нууцлалын бодлого</u></p>
            </div>
            </div>
            <div className='flex-col'>
            <div className='flex gap-[18px] justify-center m-auto mt-[40px]'>
            <FacebookIcon/>
            <InstaIcon/>
            <Twitter/>
           
            </div>
            <div className='flex justify-center mt-[40px]'>
            <SingleLine/>
            </div>
            <div className='flex items-center flex-col m-auto mt-[40px]'>
                <p className='text-white'>© 2024 Pinecone Foods LLC </p>
                <p className='text-white'>Зохиогчийн эрх хуулиар хамгаалагдсан. </p>
            </div>
        </div>
        </div >
        </div>
        
        </div>
       
       
    );
}

export default Footer;
