import {useState,ChangeEvent,FormEvent} from 'react'
import { useRouter } from 'next/navigation';
import { useRegisterMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';
export default function useRegister(){
    const [register,{isLoading}] = useRegisterMutation(); 
  const router=useRouter();

  const [formData,setformData] =useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    re_password: '',
  })
  const lodingstate=()=>{
    toast.error(!isLoading)
  }

  const {first_name,last_name,email,password,re_password}=formData;

  const onChange=(event:ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=event?.target;
    setformData({...formData,[name]:value})
  };

  const onSumit=(event:FormEvent<HTMLFormElement>)=>{
    event?.preventDefault();
    register({first_name,last_name,email,password,re_password})
    .unwrap()
    .then(()=>{
          toast.success('Plz check email to verify')
          router.push('/auth/login')
    }).catch((e)=>{
      toast.error(e?.data.email?.[0] || e?.data.password?.[0] || e?.data.non_field_errors?.[0] || 'An error occurred. Please try again.');
     

    })
  }
  return {first_name,last_name,email,password,re_password,onSumit,onChange,isLoading,lodingstate}
}