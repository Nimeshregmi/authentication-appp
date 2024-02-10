'use client';

import { usePathname } from 'next/navigation';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAppSelector, useAppDispatcher } from '@/redux/hooks';
import { useLogoutMutation } from '@/redux/features/authApiSlice';
import { logout as setLogout } from '@/redux/features/authSlice';
import { NavLink } from '@/components/common';

export default function Navbar() {
	const pathname = usePathname();
	const dispatch = useAppDispatcher();

	const [logout] = useLogoutMutation();

	const { isAuthenticated } = useAppSelector(state => state.auth);

	const handleLogout = () => {
		logout(undefined)
			.unwrap()
			.then(() => {
				dispatch(setLogout());
			});
	};

	const isSelected = (path: string) => (pathname === path ? true : false);

	const authLinks = (isMobile: boolean) => (
		<>
			<NavLink
				isSelected={isSelected('/dashboard')}
				isMobile={isMobile}
				href='/dashboard'
			>
				Dashboard
			</NavLink>
			<NavLink isMobile={isMobile} onClick={handleLogout}>
				Logout
			</NavLink>
		</>
	);

	const guestLinks = (isMobile: boolean) => (
		<>
			<NavLink
				isSelected={isSelected('/auth/login')}
				isMobile={isMobile}
				href='/auth/login'
			>
				Login
			</NavLink>
			<NavLink
				isSelected={isSelected('/auth/register')}
				isMobile={isMobile}
				href='/auth/register'
			>
				Register
			</NavLink>
		</>
	);

	return (
		<Disclosure as='nav' className='bg-gray-800'>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
						<div className='relative flex h-16 items-center justify-between'>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								<Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className='block h-6 w-6'
											aria-hidden='true'
										/>
									) : (
										<Bars3Icon
											className='block h-6 w-6'
											aria-hidden='true'
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
								<div className='flex flex-shrink-0 items-center'>
									<NavLink href='/' isBanner>
										Full Auth
									</NavLink>
								</div>
								<div className='hidden sm:ml-6 sm:block'>
									<div className='flex space-x-4'>
										{isAuthenticated
											? authLinks(false)
											: guestLinks(false)}
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'>
						<div className='space-y-1 px-2 pb-3 pt-2'>
							{isAuthenticated
								? authLinks(true)
								: guestLinks(true)}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}


// "use client"
// import React, { useRef, MouseEventHandler,useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { AiFillCloseCircle } from "react-icons/ai";
// import { VscThreeBars } from "react-icons/vsc";
// import LoginSignupBtn from "./LoginSignupBtn";

// const Navbar: React.FC = () => {

//   const togglecart: MouseEventHandler<HTMLAnchorElement> = (event) => {

//     if (ref.current) {
//       if (ref.current.classList.contains("-translate-x-full")) {
//         ref.current.classList.remove("-translate-x-full");
//         ref.current.classList.add("-translate-x-0");
//         ref.current.classList.add("left-2");
//       } else {
//         ref.current.classList.remove("-translate-x-0");
//         ref.current.classList.remove("left-2");
//         ref.current.classList.add("-translate-x-full");
//       }
//     }
//   };

//   const [islogin, setislogin] = useState<boolean>(false);
//   const ref = useRef<HTMLDivElement>(null);

//   return (
//     <div>
//       <div className="rounded-b-lg h-[8vh] lg:h-[10vh] flex justify-between max-w-[100vw] items-center bg-gray-800 shadow-xl">

//         {/* For mobile devices */}
//         <div ref={ref} className="rounded-lg px-3 top-14 ml-0 z-20 overflow-y-scroll bg-gray-600 absolute -translate-x-full no-scrollbar">
//           <h2 className="font-black text-black text-2xl mr-10 px-6 text-center mt-1">Courses</h2>
//           <a onClick={togglecart} className="absolute top-0 p-2 bg-white rounded-lg right-0 text-2xl mr-0 mt-0 cursor-pointer text-black">
//             <AiFillCloseCircle />
//           </a>
//           <hr className="text-black" />
//           <div className="z-20 ml-3 md:ml-6 mt-3">
//             <ul className="flex items-start flex-col">
//               <li>
//                 <Link legacyBehavior href={"/"}>
//                   <a onClick={togglecart} className="text-white text-xl m-4 md:m-2">
                  
//                     HOME
                  
//                     {/* <Image src={'/logomain.png'} height={50} width={50} alt="logoImage" /> */}
//                   </a>
//                 </Link>
//               </li>
//               <li>
//                 <Link legacyBehavior href={"/CSIT"}>
//                   <a onClick={togglecart} className="flex text-xl m-4 ml-3 text-white">
//                     CSIT
//                   </a>
//                 </Link>
//               </li>
//               <li>
//                 <Link legacyBehavior href={"/BCA"}>
//                   <a onClick={togglecart} className="flex text-xl m-4 ml-3 text-white">
//                     BCA
//                   </a>
//                 </Link>
//               </li>
//               <li>
//                 <Link legacyBehavior href={"/BIT"}>
//                   <a onClick={togglecart} className="flex text-xl m-4 ml-3 text-white">
//                     BIT
//                   </a>
//                 </Link>
//               </li>
//               <li>
//                 {
//                   !islogin && <div className="flex items-center font-bold ">
//                   <Link legacyBehavior href={'/login'}><a onClick={togglecart} className="p-2 px-4 bg-green-400 rounded-xl cursor-pointer md:text-md hover:bg-green-600  sm:flex">Log In</a></Link>
//                   <Link legacyBehavior href={'/signup'}><a onClick={togglecart} className="p-2 px-4 m-1 bg-green-400  rounded-xl cursor-pointer hover:bg-green-600">Sin Up</a></Link>
//                 </div>
//                 }
//               </li>

//             </ul>
//           </div>
//         </div>
//         {/* for pc and larger screen */}
//         <div className="z-20 ml-3 md:ml-6">
//           <ul className="flex items-center">
//             <a className="flex md:hidden text-white text-xl md:m-2 m-2 ml-4 hover:text-gray-500" onClick={togglecart}>
//               <VscThreeBars />
//             </a>
//             <li>
//               <Link legacyBehavior href={"/"}>
//                 <a className="hover:text-white text-gray-300 text-xl m-4 md:m-2">
//                 HOME
//                   {/* <Image src={'/logomain.png'}  className="border-spacing-8 max-w-full h-auto p-2"  height={50} width={50} alt="logoImage" /> */}
//                 </a>
//               </Link>
//             </li>
//             <li>
//               <Link legacyBehavior href={"/CSIT"}>
//                 <a className="hidden md:flex hover:text-white text-xl m-4 text-gray-300">CSIT</a>
//               </Link>
//             </li>
//             <li>
//               <Link legacyBehavior href={"/BCA"}>
//                 <a className="hidden md:flex hover:text-white text-xl m-4 text-gray-300">BCA</a>
//               </Link>
//             </li>
//             <li>
//               <Link legacyBehavior href={"/BIT"}>
//                 <a className="hidden md:block hover:text-white text-xl m-4 text-gray-300">BIT</a>
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <LoginSignupBtn />
        



//       </div>
//     </div>
//   );
// };

// export default Navbar;





