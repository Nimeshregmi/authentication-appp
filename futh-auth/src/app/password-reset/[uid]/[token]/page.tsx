
import { ResetPasswordconform } from '@/components/forms';
import { Metadata } from 'next';

export const metadata:Metadata={
  title:'Full Auth | ResetPassword',
  description:'Full auth Password Reset page'
}

interface Props{
  params:{
    uid:string;
    token:string;
  }
}
const Register = ({params}:Props) => {
  const {uid,token} = params;
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Reset Your Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <ResetPasswordconform uid={uid} token={token}/>
          
        </div>
      </div>
    </>
  );
};

export default Register;
