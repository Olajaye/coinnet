import Image from "next/image"
import { CiBasketball } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";

const Footer = () => {
  return (
    <section className="mt-16 relative">

      <Image src={'/RectangleSVG.svg'} alt="webs" width={600} height={100} className="absolute xl:-top-60  top-32 right-0 -z-50 "/>
      

      <div className="container mx-auto px-4 hidden xl:block">
        <div className="xl:flex relative">
          <div className="max-w-[60%]">
            <h2 className="font-bold text-4xl text-[#000000] my-5">Spend freely and without limits using Bitcoin through Coinnect.</h2>
            <h6 className="text-base font-normal text-[#000000] mb-5">With Coinnect, enjoy the freedom to spend Bitcoin without limits. Easily access your digital assets for everyday purchases, secure transfers, and seamless transactions, all within a single, powerful platform. Coinnect makes it easy to leverage the full potential of your Bitcoin, wherever you go.</h6>
            <button className="bg-bgyellow w-[300px] p-3 rounded-lg text-lg font-semibold text-foreground my-5">
             Get It
            </button>
            <div className="flex items-center space-x-7">
              <Image src={'/googleplay.svg'} alt="google play" width={150} height={150}/>

              <Image src={'/appstore.svg'} alt="google play" width={150} height={150}/>
            </div>
          </div>

          <div className="absolute right-0 -top-7 -z-10">
            <Image src={'/RectanglePhone.png'} alt="phone" width={600} height={400} className="-z-50"/>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 xl:hidden ">
        <div className="">
          <div className="">
            <h2 className="font-bold text-4xl text-[#000000] my-5">Spend freely and without limits using Bitcoin through Coinnect.</h2>
            <h6 className="text-base font-normal text-[#000000] mb-5">With Coinnect, enjoy the freedom to spend Bitcoin without limits. Easily access your digital assets for everyday purchases, secure transfers, and seamless transactions, all within a single, powerful platform. Coinnect makes it easy to leverage the full potential of your Bitcoin, wherever you go.</h6>
            <button className="bg-bgyellow w-[300px] p-3 rounded-lg text-lg font-semibold text-foreground my-5">
             Get It
            </button>
            <div className="flex items-center space-x-7">
              <Image src={'/googleplay.svg'} alt="google play" width={150} height={150}/>

              <Image src={'/appstore.svg'} alt="google play" width={150} height={150}/>
            </div>
          </div>

          <div className="flex justify-center items-center mt-16 xl:mt-0 relative">
            <Image src={'/RectanglePhoneHalf.png'} alt="phone" width={600} height={400} className="-z-30"/>
          </div>
        </div>
      </div>

      <div className=" bg-bgyellow w-full xl:mt-10 z-50">
        <div className="container mx-auto px-4 py-10">
          <div className="xl:flex justify-between items-center">
            <div className="">
              <Image src={'/ball.png'} alt="ball" width={500} height={200} className="w-[500px] md:w-[400px]"/>
            </div>
            <div className="xl:max-w-[60%] mt-9 xl:mt-0">
              <h1>Subscribe</h1>
              <h2>Stay Informed with Our Newsletter!</h2>
              <p>Subscribe to our newsletter for the latest updates, exclusive insights, and expert tips delivered right to your inbox. Be the first to know about new features, market trends, and opportunities – all designed to keep you connected and informed.</p>
              <div>
                <input 
                  type="text" 
                  name="" 
                  id="" 
                />
                  
                <button className="bg-bgyellow w-[300px] p-3 rounded-lg text-lg font-semibold text-foreground my-5">
                  Get It
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>


      <div className="container mx-auto px-4 mt-16">
        <div className="xl:flex justify-between">
          <div className="xl:max-w-[50%]">

            <div className="flex items-center space-x-3">
             <Image src={'/logo.svg'} alt="logo" width={70} height={70}/>
             <h2>COINNET</h2>
            </div>

            <p>
              Coinnect is your all-in-one crypto platform, designed to make managing, trading, and spending digital assets simple and secure. With advanced features like multi-currency support, real-time tracking, and seamless transactions, Coinnect empowers you to navigate the crypto landscape confidently. 

            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 lg:gap-y-0 lg:gap-x-9 mt-5 xl:mt-0">
            <div>
              <h1>Available Blockchains</h1>
              <p>Ethereum</p>
              <p>Binance Smart Chain</p>
              <p>Polygan</p>
              <p>Vales</p>
            </div>

            <div>
              <h1>Resources</h1>
              <p>Documentation</p>
              <p>Guides</p>
              <p>Blog</p>
            </div>

            <div>
              <h1>Company</h1>
              <p>FAQs</p>
              <p>About Us</p>
              <p>Contact Us</p>
            </div>

          </div>
        </div>

        <div className="md:flex justify-between items-center mt-5">
          <div className="grid xl:grid-cols-3 grid-cols-1  gap-4">
            <p>Contact@Coinnect.com</p>
            <p className="xl:ms-6">Terms Of Use</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex space-x-9 mt-4 md:mt-0">
            <CiBasketball className="w-7 h-7 bg-bgyellow p-1 rounded-lg"/>
            <SiFacebook className="w-7 h-7 bg-bgyellow p-1 rounded-lg"/>
            <FaGithub className="w-7 h-7 bg-bgyellow p-1 rounded-lg"/>
            <FaInstagram className="w-7 h-7 bg-bgyellow p-1 rounded-lg"/>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 my-5 text-center">
        <p>@ Copywrite, 2024</p>
      </div>

    </section>
  )
}

export default Footer