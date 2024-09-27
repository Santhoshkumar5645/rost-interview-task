import React, { useContext } from 'react'
// import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

function Footer() {

    // const navigate = useNavigate()

    const FooterContent = [
        {
            id: 1,
            title: 'HELPFUL LINKS',
            list: [
                {
                    id: 1,
                    name: 'OVERVIEW',
                    path: '/website-integration',
                },
                {
                    id: 1,
                    name: 'OVERVIEW',
                    path: '/website-integration',
                },
                {
                    id: 2,
                    name: 'PRICE DETAILS',
                    // instore
                    path: '',
                },
                {
                    id: 2,
                    name: 'DOWLOAD ITENARY',
                    // application
                    path: '',
                },
                
                {
                    id: 2,
                    name: 'DOWLOAD ITENARY',
                    // application
                    path: '',
                },
                
            ]
        },
        {
            id: 2,
            title: 'TOP DESTINATIONS',
            list: [
                {
                    id: 1,
                    name: 'privacy policy',
                    path: '/privacy-policy',
                },
                {
                    id: 2,
                    name: 'terms & conditions',
                    path: '/terms-&-condition',
                },
                {
                    id: 3,
                    name: '',
                    // about us
                    path: '',
                },
            ]
        },

    ]

    return (
        <>
            <div className='bg-[#28304C] font-mohave text-[#FAFAFA] relative z-10'>
                <div className='brand-container pt-20 pb-5 flex max-lg:flex-col items-start justify-between'>
                <div className='w-full lg:w-1/2  flex  max-lg:space-y-5 max-sm:px-0 max-lg:px-5 justify-between lg:justify-around'>

                        <div className='flex flex-col items-start w-1/2  max-lg:pt-5'>
                        <p className='text-[#F8CD8C] tracking-widest text-2xl font-bold'>HISTAY</p>
                                <p className='text-[#FAFAFA] pt-5'>
                                Lörem ipsum rent intraluna saskapet, har sor. Nin spen, nis prektig fade. Astrorade inaskad polyling edor är jugt. Ogt georäll et fagyng. Sejesamma infrana, liksom spena. 
                                </p>
                           
                        </div>
                        <div>
                            <p className='text-xl text-[#FAFAFA] font-medium'>HELPFUL LINKS</p>
                            <ul className='text-sm text-[#FAFAFA] space-y-1 pt-5'>
                                <li>OVERVIEW</li>
                                <li>OVERVIEW</li>
                                <li>DOWLOAD ITENARY</li>
                                <li>DOWLOAD ITENARY</li>
                                <li>PRICE DETAILS</li>
                                <li>PRICE DETAILS</li>
                                <li>ITENARY</li>
                            </ul>
                        </div>
                        </div>
                         <div className='w-full lg:w-1/2 flex items-center max-lg:pt-5 max-sm:px-0 max-lg:px-5 justify-between lg:justify-around'>
                        <div>
                            <p className='text-xl text-[#FAFAFA] font-medium'>HELPFUL LINKS</p>
                            <ul className='text-sm text-[#FAFAFA] space-y-1 pt-5'>
                                <li>OVERVIEW</li>
                                <li>OVERVIEW</li>
                                <li>DOWLOAD ITENARY</li>
                                <li>DOWLOAD ITENARY</li>
                                <li>PRICE DETAILS</li>
                                <li>PRICE DETAILS</li>
                                <li>ITENARY</li>
                            </ul>
                        </div>
                        <div>
                            <p className='text-xl text-[#FAFAFA] font-medium'>HELPFUL LINKS</p>
                            <ul className='text-sm text-[#FAFAFA] space-y-1 pt-5'>
                                <li>OVERVIEW</li>
                                <li>OVERVIEW</li>
                                <li>DOWLOAD ITENARY</li>
                                <li>DOWLOAD ITENARY</li>
                                <li>PRICE DETAILS</li>
                                <li>PRICE DETAILS</li>
                                <li>ITENARY</li>
                            </ul>
                        </div>
                        </div>
                 

                </div>
                <div className='brand-container pb-20 py-5'>

                    <div className='w-full h-[1px] bg-white '/>
                    <div className='pt-5 flex max-md:space-y-2 max-md:flex-col justify-between text-sm'>
                        <div className='flex items-center max-md:justify-center gap-x-3'>
                            <p className='flex items-center gap-x-2'> <span  className='p-1 rounded-full bg-white'></span> Privacy Policy</p>
                            <p className='flex items-center gap-x-2 '> <span  className='p-1 rounded-full bg-white'></span> Cancellation & Refund Policy</p>
  
                        </div>
                        <div className='max-md:text-center'>
                        Designed and Developved By RostTechnology
                        </div>
                        <div className='max-md:text-center'>
                        Copy Rights @ HiStay 2024
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Footer