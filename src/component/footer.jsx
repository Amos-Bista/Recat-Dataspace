
import React from 'react'


const Footer = () => {
    const imagestyles ={
        width: "254.77px",
        height: "250.39px"
    }
  return (
    <div className=' bg-[#0D5077] '>  
    

    <div className='flex justify-center w-[100%] text-white bg-[#0D5077] py-4 '>
        <div className='flex w-[80%] pt-10'>
        <div className='w-[45%] flex-col'>
        <h1 className='text-3xl'>Service</h1>
            <div className='flex pt-3 pl-5 gap-28 '>

                <ul className='gap-10 list-disc text-1xl'>  
                    <li className='py-1'>Co-loocation</li>
                    <li className='py-1'>Virtual Private Server</li>
                    <li className='py-1'>Web-Hosting</li>
                    <li className='py-1'>Enterprise Secure E-mailkfa</li>
                    <li className='py-1'>Backup and replacation </li>

                </ul>
                <ul className='list-disc text-1xl pl-7'>
                    <li className='py-1'>End point security</li>
                    <li className='py-1'>bare metal service</li>
                    <li className='py-1'>set up and configuration</li>
                    <li className='py-1'>product addons</li>
                    <li className='py-1'>web developments</li>
                </ul>
            </div>
        </div>
        <div className=' flex w-[55%]'>
            <div className='px-5 w-[70%] pr-5'>
                <h1 className='text-3xl '>About us</h1>
                <p className='pt-3 leading-relaxed text-justify text-1xl'>we are Nepal First Data Center And Your
                Complete Technology Partner, Offering A
                Wide Range Of Services To Enhance Your
                Digital Journey.</p>
            </div>
            <div className='w-[40%] pl-10'>
                <h1 className='text-3xl'>Company</h1>
                <ul className='pt-3 pl-3 list-disc text-1xl'>
                    <li className='py-1'>Home</li>
                    <li className='py-1'>Service</li>
                    <li className='py-1'>About us</li>
                    <li className='py-1'>Contact</li>
                </ul>
                
            </div>
        </div>
        </div>
       <div className='px-'><img src= "/footerimage.png" alt="footerimage" style={imagestyles} className='' /></div> 
    
    </div>
    
    <div className='mx-16'>

    <div className='flex justify-between border-t-2  border-b-2 border-[#E5E7EB] px- py-2 text-white'>
        <div>ds@ds.com.np</div>
        <div>Putalisadak, Kathmandu, Nepal</div>
        <div>+977-1-5369718</div>
        <div className="">
            <ul className="flex justify-center gap-5">
              <li className="">
                
                  <img
                    src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png"
                    alt=""
                    className="w-6 rounded-full"
                    />
               
              </li>

              <li  className="">
                
                  <img
                    src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-6xtrjbtc.png"
                    alt=""
                    className="rounded-full w-7"
                    />
               
              </li>


              <li  className="">
                
                   <img
                    src="https://static-00.iconduck.com/assets.00/twitter-icon-2048x2048-pm1hdjoo.png"
                    alt=""
                    className="rounded-full w-7"
                    />
               
              </li>

              <li className="">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                        alt=""
                        className="rounded-full w-7 h-7"
                        />
                </li>
            </ul>
          </div>
    </div>
    </div>
    <div className='flex justify-end mr-16 text-white text-opacity-50'>© 2021 All Rights Reserved</div>
    
   </div>


  )
}

export default Footer
