

import { RegisterForm } from '@/components/forms';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata:Metadata={
  title:'Full Auth | Registration',
  description:'Full auth Registration page'
}

const Register = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <RegisterForm/>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have account?{' '}
            <Link href="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Register;
