import Image from 'next/image'




const page = () => {
  return (
    <section className='container mx-auto px-4'>


      <div>
        <div className='text-center'>
          <h2>Accelerate the world&apos;s transition</h2>
          <h6>At Coinnet, we are dedicated to fostering a sustainable and inclusive financial future. Our platform empowers users to effortlessly buy, sell, and trade cryptocurrencies, creating a vibrant global marketplace where innovation flourishes. By offering access to both American and cryptocurrency markets through a multi-currency account, we enable individuals and businesses to engage in seamless transactions and peer-to-peer (P2P) trading. 
          Our user-friendly interface ensures that everyone, from beginners to experienced traders, can navigate the crypto landscape with confidence. With a strong commitment to security and transparency, Coinnet prioritizes the protection of user assets and information. Join us in revolutionizing the financial ecosystem and unlocking new opportunities for growth and success in the digital age. Embrace the future of finance with Coinnet, where your cryptocurrency journey begins.
          </h6>
        </div>
        

        <div className='flex justify-center items-center my-7'>
          <Image src={'/chatimage.svg'} alt="image" width={600} height={300}/>
        </div>
      </div>

      <div>
        <h2 className='text-center'>Our story</h2>

        <p className='text-center'>
          Coinnet was founded with a vision to reshape the financial landscape by making cryptocurrency accessible to everyone. Our journey began when a group of passionate innovators recognized the potential of digital currencies to foster economic empowerment and inclusion. Frustrated by the barriers that existed in the traditional financial system, we set out to create a platform that would bridge the gap between the American and crypto markets.
        </p>

        <p className='text-center'>
          From our humble beginnings, we have grown into a vibrant community of users, traders, and enthusiasts dedicated to pushing the boundaries of what is possible in the world of finance. Our commitment to transparency, security, and user experience has guided us every step of the way
        </p>

        <p className='text-center'>
          As we continue to evolve, we remain focused on our mission: to empower individuals and businesses with the tools they need to thrive in the digital economy. Join us on this exciting journey as we work towards a more inclusive and sustainable financial future for all
        </p>
      </div>



      <div className='mt-10'>
        <div className='xl:flex '>
          <div className='xl:w-[50%]'>
            <Image src={'/about/image1.svg'} alt='image1' width={650} height={300} className='h-[400px] '/>
          </div>
          <div className='w-2 h-[500px] bg-bgyellow hidden xl:block rounded-ss-lg'></div>
          <div className='xl:w-[50%] flex justify-center items-center px-4 mt-5 xl:mt-0'>
            <div>
              <h2>Our size makes a big impact</h2>
              <p>
                As a growing platform in the cryptocurrency space, we harness our collective knowledge, resources, and diverse perspectives to create meaningful change. Our size allows us to innovate rapidly, adapt to market trends, and respond to the evolving needs of our users.
              </p>
              <h6>July 1, 2025</h6>
            </div>
          </div>
        </div>


        <div className='xl:flex mt-6 xl:mt-0'>

          <div className='xl:w-[50%] mt-5 xl:mt-0 xl:order-3'>
            <Image src={'/about/image2.svg'} alt='image1' width={650} height={300} className='h-[400px] '/>
          </div>

          <div className='w-2 h-[500px] bg-bgyellow hidden xl:block xl:order-2'></div>

          <div className='xl:w-[50%] flex justify-center items-center px-4 xl:order-1'>
            <div>
              <h2>Collaborating for Success Story</h2>
              <p>
                At Coinnect, we prioritize our people, bringing together a diverse team of over 400 tech experts and visionaries from around the globe. With offices spanning four continents, we empower our team to think innovatively and challenge the status quo. Every day, we ask ourselves: how can we redefine the future of trading? Together, we are committed to shaping a marketplace that is unique and accessible, ensuring that our users have the best tools and experiences to thrive in the digital economy.
              </p>

              <h6>July 15, 2024</h6>

            </div>
          </div>


          


         

        </div>


        <div className='xl:flex mt-6 xl:mt-0'>
          <div className='xl:w-[50%]'>
            <Image src={'/about/image3.svg'} alt='image1' width={650} height={300} className='h-[400px] '/>
          </div>
          <div className='w-2 h-[500px] bg-bgyellow hidden xl:block rounded-ee-lg'></div>
          <div className='xl:w-[50%] flex justify-center items-center px-4 mt-5 xl:mt-0'>
            <div>
              <h2>The Coinnect Way Is About Balance</h2>
              <p>
                At Coinnect, we believe that true success in the financial world comes from achieving balance. Our approach integrates innovation, security, and user experience to create a holistic platform that meets the diverse needs of our users. We strive to harmonize the complexities of the cryptocurrency market with intuitive tools that empower individuals and businesses alike.
              </p>

              <h6>January 20, 2024</h6>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default page