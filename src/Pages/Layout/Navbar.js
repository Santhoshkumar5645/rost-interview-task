import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router';
import { SlArrowDown } from "react-icons/sl";

function Navbar() {

    const [SideMenu, setSideMenu] = useState(false)
    const NavData = [
        {
            id: 1,
            type: "link",
            name: "Home",
            path: "",
            scrollid: 'award'
        },
        {
            id: 2,
            type: "link",
            name: "About Us",
            path: "",
            scrollid: 'work_shop'
        },
        {
            id: 3,
            type: "link",
            name: "Destination",
            path: "",
            scrollid: 'speakers'

        },
        {
            id: 4,
            type: "link",
            name: "Packages",
            path: "",
            scrollid: 'fun_act'
        },
        {
            id: 5,
            type: "link",
            name: "Contact Us",
            path: "",
            scrollid: 'fun_act'
        },
        

    ];

    const navigate = useNavigate();
    const [navbarBgColor, setNavbarBgColor] = useState(false);

    const navigationHandler = (path,id) =>{
        // Todo Check Scroll ID Presented or not
        if(id === ''){
            navigate(path)
        }else{
            console.log('scroll')
        }
    }

    useEffect(() => {
        // console.log(location.pathname)
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                setNavbarBgColor(true); // Set the desired background color
            } else {
                setNavbarBgColor(false); // Set the initial or default background color
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


  
    return (
        <>
       
            <div className='sticky top-0 z-30 font-mohave'>
           
                <header className='fixed top-0 w-full'>
                <div className='bg-[#28304C] py-3 '>
              <p className='text-[#F8CD8C] text-center animate-marquee whitespace-nowrap '>get ready for the festival and <span className='text-white'>claim 50% off</span>  on this diwali, use code diwali50 for booking property.   <span className='invisible'>empty</span>   get ready and claim 50% off on this diwali, use code diwali50 for booking property</p>
        </div>
                    <div className={`brand-container transition-all duration-500 flex justify-between items-center  py-5 ${navbarBgColor ? 'bg-black/20 backdrop-blur-md' : ''} `}>
                        {/* <img onClick={()=> navigate('/')} className='aspect-video w-28 object-contain cursor-pointer' src="/assets/svg/logo.svg" alt="" /> */}
                        <p className='text-[#F8CD8C] tracking-widest cursor-pointer text-2xl font-semibold'>HISTAY</p>
                        <ul className='hidden md:flex lg:flex xl:flex gap-5 lg:gap-10 items-center '>
                            {NavData.map((list, index) =>
                                <li key={index}>
                                           <p onClick={()=>{navigationHandler(list.path, list.scrollid)}} className='uppercase  text-white text-lg cursor-pointer active:opacity-50 select-none '>{list.name}</p>
                                </li>
                            )}
                        </ul>
                         

                         {/* <div className='flex items-center gap-x-2'> */}
                         <button className='text-[#28304C] bg-white flex items-center gap-x-2 max-md:text-sm whitespace-nowrap py-1 px-5 rounded-lg'>HI, GUEST<SlArrowDown className='w-4 h-4 mt-1 text-[#28304C]' />
                         </button>

                         {/* </div> */}


                        <div onClick={() => { setSideMenu(!SideMenu) }} className='flex md:hidden lg:hidden xl:hidden flex-col gap-2 active:opacity-50 cursor-pointer relative'>
                            <div className={`${SideMenu ? 'absolute -rotate-45' : ''} transition-all duration-500  w-8 h-[3px] bg-white`}></div>
                            <div className={`${SideMenu ? 'rotate-45' : ''} transition-all duration-500 w-8 h-[3px] bg-white`}></div>
                        </div>
                    </div>


                </header>
            </div>

            <SideMenuDesign state={SideMenu} SideNavHandler={setSideMenu} navmenu={NavData} NavigationHandler={navigationHandler} />
        </>
    )
}

export default Navbar


const SideMenuDesign = ({ state, navmenu, NavigationHandler, SideNavHandler }) => {
    return (
        <>
            <div className={`${state ? '' : '-translate-x-full'} transition-all duration-500 fixed left-0 h-screen top-0 bg-black/40 backdrop-blur-lg border-r-primary/40 rounded-r-[10px] border w-4/6 z-50 py-10`}>
                <div className='px-10 w-full'>
                <p className='text-[#F8CD8C] text-2xl tracking-widest font-semibold'>HISTAY</p>

                    <ul className='flex flex-col mt-5 gap-3'>
                        {navmenu.map((item, index) =>
                            <li className='' onClick={()=> SideNavHandler(false)}>
                                {item.type === 'button' ? 
                                <button>Empty</button>
                                 :

                                <p onClick={()=>NavigationHandler(item.path, item.scrollid)} className='text-white active:opacity-50 capitalize text-lg'>
                                    {item.name}
                                </p>
                                 }
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}