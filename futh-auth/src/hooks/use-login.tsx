import {useState,ChangeEvent,FormEvent} from 'react'
import { useRouter } from 'next/navigation';
import { useLoginMutation } from '@/redux/features/authApiSlice';
import { useAppDispatcher } from '@/redux/hooks';
import { setAuth } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';
export default function useLogin(){
  const dispacher=useAppDispatcher();
    const [login,{isLoading}] = useLoginMutation(); 
  const router=useRouter();

  const [formData,setformData] =useState({
    
    email: '',
    password: ''
  })

  const {email,password}=formData;

  const onChange=(event:ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=event?.target;
    setformData({...formData,[name]:value})
  };

  const onSumit=(event:FormEvent<HTMLFormElement>)=>{
    event?.preventDefault();
    login({email,password})
    .unwrap()
    .then(()=>{
          toast.success('Login Successfull')
          dispacher(setAuth())
          router.push('/dashboard')
    }).catch((e)=>{
      toast.error(e?.data.email?.[0] || e?.data.password?.[0] || e?.data.non_field_errors?.[0] || e?.data.detail || 'An error occurred. Please try again.');
      console.log(e)

    })
  }
  return {email,password,onSumit,onChange,isLoading}
}