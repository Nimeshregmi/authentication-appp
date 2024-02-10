'use client'
import { useLogin } from '@/hooks';
import { Forms } from ".";

const LoginForm = () => {
  const {email,password,onSumit,onChange,isLoading}=useLogin();
  const config = [
    {
      labelText: "email",
      labelID: "email",
      type: "email",
      value: email,
      required: true,
    },
    {
      labelText: "password",
      labelID: "password",
      type: "password",
      value: password,
      required: true,
      link:{
        linktext:'Forgot Password?',
        linkurl:'/password-reset'
      }
    },
   
  ];
  return (
    <Forms
      btnText="Login"
      config={config}
      isLoading={isLoading}
      onChange={onChange}
      onSumit={onSumit}
    />
  );
};

export default LoginForm;
