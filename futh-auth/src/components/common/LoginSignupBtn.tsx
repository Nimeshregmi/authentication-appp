"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useAppSelector, useAppDispatcher } from "@/redux/hooks";
import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { logout as setLogout } from "@/redux/features/authSlice";
import { toast } from "react-toastify";

const LoginSignupBtn: React.FC = () => {
  const router = useRouter();
  const dispacher = useAppDispatcher();
  const [logout] = useLogoutMutation();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [islogin, setislogin] = useState<boolean>(true);
  const [onProfileClick, setonProfileClick] = useState<boolean>(false);

  const handlelogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispacher(setLogout());
        toast.success("Logout successful");
      })
      .finally(() => {
        router.push("/");
        setonProfileClick((a: boolean) => !a);
      });
  };

  const onProfileClickHandeler = () => {
    setonProfileClick((a: boolean) => !a);
  };

  return (
    <div className="flex md:mr-6 mr-3">
      {!isAuthenticated ? (
        <div className="flex items-center font-bold">
          <Link href={"/auth/login"}>
            <div className="p-2 px-4 bg-green-400 rounded-xl cursor-pointer md:text-md hover:bg-green-600 hidden sm:flex">
              Log In
            </div>
          </Link>
          <Link href={"/auth/register"}>
            <div className="p-2 px-4 m-1 bg-green-400 rounded-xl cursor-pointer hover:bg-green-600">
              Sign Up
            </div>
          </Link>
        </div>
      ) : (
        <div className="flex items-center">
          <div className="flex flex-col items-center m-4 ms-3">
            <div>
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-user"
              >
                <span className="sr-only">Open user menu</span>
                <Image
                  height="100"
                  width="100"
                  className="w-8 h-8 rounded-full "
                  src="/img2.webp"
                  alt="user photo"
                  onClick={onProfileClickHandeler}
                />
              </button>
            </div>

            {onProfileClick && (
              <div
                className="z-50 absolute right-3 my-8 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdown-user"
              >
                <div className="px-4 py-3" role="none">
                  <p
                    className="text-sm text-gray-900 dark:text-white"
                    role="none"
                  >
                    Neil Sims
                  </p>
                  <p
                    className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                    role="none"
                  >
                    neil.sims@flowbite.com
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                      onClick={handlelogout}
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignupBtn;
